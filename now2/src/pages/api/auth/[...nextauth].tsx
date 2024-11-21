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
        if (!credentials?.username || !credentials?.password) {
          throw new Error('No credentials provided');
        }
      
        // Helper function to validate user or entity
        const validateCredentials = async (account: any, type: string) => {
          if (account) {
            const isValidPassword = await bcrypt.compare(credentials.password, account.password);
            if (isValidPassword) {
              return {
                id: String(account.id),
                name: type === 'user' ? account.username : account.companyUsername,
                type,
                userName: type === 'user' ? account.username : account.companyUsername,
                frontName: type === 'user' ? account.frontName : account.picFrontName,
              };
            }
          }
          return null;
        };
      
        // Check in the `User` table
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });
        console.log(user);
        const validatedUser = await validateCredentials(user, 'user');
        console.log(validatedUser);
        if (validatedUser) return validatedUser;
      
        // Check in the `Entity` table
        const entity = await prisma.entity.findUnique({
          where: { companyUsername: credentials.username },
        });
        const validatedEntity = await validateCredentials(entity, 'entity');
        if (validatedEntity) return validatedEntity;
      
        // Throw error if no valid account is found
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
});
