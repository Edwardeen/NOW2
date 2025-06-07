import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import bcrypt from 'bcrypt';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('[NextAuth] Authorize: Attempting to log in with username:', credentials?.username);
        if (!credentials?.username || !credentials?.password) {
          console.error('[NextAuth] Authorize: Missing username or password');
          throw new Error('No credentials provided');
        }
      
        // Helper function to validate user or entity
        const validateCredentials = async (account: any, type: string, providedPass: string) => {
          if (account) {
            console.log(`[NextAuth] Authorize: Found ${type} account:`, account.id, account.username || account.companyUsername);
            try {
                const isValidPassword = await bcrypt.compare(providedPass, account.password);
                console.log(`[NextAuth] Authorize: Password validation for ${type} ${account.id}:`, isValidPassword);
                if (isValidPassword) {
                  return {
                    id: String(account.id),
                    name: type === 'user' ? account.username : account.companyUsername,
                    type,
                    userName: type === 'user' ? account.username : account.companyUsername,
                    frontName: type === 'user' ? account.frontName : account.picFrontName,
                  };
                }
            } catch (bcryptError) {
                console.error(`[NextAuth] Authorize: bcrypt error for ${type} ${account.id}:`, bcryptError);
                return null; // Treat bcrypt errors as failed validation
            }
          } else {
            console.log(`[NextAuth] Authorize: No ${type} account found for username:`, credentials.username);
          }
          return null;
        };
      
        try {
            // Check in the `User` table
            console.log(`[NextAuth] Authorize: Checking User table for username:`, credentials.username);
            const user = await prisma.user.findUnique({
              where: { username: credentials.username },
            });
            const validatedUser = await validateCredentials(user, 'user', credentials.password);
            if (validatedUser) {
              console.log('[NextAuth] Authorize: User validated successfully:', validatedUser.id);
              return validatedUser;
            }
          
            // Check in the `Entity` table
            console.log(`[NextAuth] Authorize: Checking Entity table for companyUsername:`, credentials.username);
            const entity = await prisma.entity.findUnique({
              where: { companyUsername: credentials.username },
            });
            const validatedEntity = await validateCredentials(entity, 'entity', credentials.password);
            if (validatedEntity) {
              console.log('[NextAuth] Authorize: Entity validated successfully:', validatedEntity.id);
              return validatedEntity;
            }
        } catch (dbError) {
            console.error('[NextAuth] Authorize: Database error during authorization:', dbError);
            // Throw a generic error to prevent leaking details, NextAuth will handle it as a 401 or 500
            throw new Error('Server error during authentication'); 
        }
      
        // Throw error if no valid account is found after checking both and no DB error occurred
        console.warn('[NextAuth] Authorize: Invalid username or password after checking all sources for:', credentials.username);
        throw new Error('Invalid username or password');
      }
      
    }),
  ],
  pages: {
    signIn: '/login', // Redirect users to the login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.type = user.type;
        token.userName = user.userName; // Ensure userName is set in the token
        token.frontName = user.frontName;
        token.name = user.userName; // Use user.userName for name as well if it's consistent
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        type: token.type as string,
        userName: token.userName as string, // Make sure userName is passed correctly from token
        frontName: token.frontName as string,
        name: token.userName as string,
      };
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development', // Enable NextAuth debug messages in development
});
