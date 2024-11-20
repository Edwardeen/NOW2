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
        // Check if credentials are provided
        if (!credentials || !credentials.username || !credentials.password) {
          throw new Error('No credentials provided');
        }

        // Check in User table
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (user) {
          // Compare passwords for user
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);
          if (isValidPassword) {
            return { id: String(user.id), name: user.username, type: 'user' }; // Return user object
          }
        }

        // Check in Entity table
        const entity = await prisma.entity.findUnique({
          where: { companyUsername: credentials.username },
        });

        if (entity) {
          // Compare passwords for entity
          const isValidPassword = await bcrypt.compare(credentials.password, entity.password);
          if (isValidPassword) {
            return { id: String(entity.id), name: entity.companyUsername, type: 'entity' }; // Return entity object
          }
        }

        // If neither user nor entity found
        throw new Error('Invalid username or password');
      }
    })
  ],
  pages: {
    signIn: '/login', // Redirect to your login page
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Ensure this is a string
        token.type = user.type; // Store the type (user or entity)
      }
      return token;
    },
    async session({ session, token }) {
      // Ensure session.user is initialized
      session.user = {
        id: token.id as string, // Cast token.id to string
        name: session.user?.name || null, // Preserve the name if it exists
        type: token.type as string, // Preserve the type (user or entity)
        frontName: session.user.frontName as string
      };
      return session;
    }
  }
});