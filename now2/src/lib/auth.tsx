import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma"; // Adjust the path
import bcrypt from "bcrypt";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          return null; // Return null for invalid inputs
        }

        try {
          // Check User table
          const user = await prisma.user.findUnique({
            where: { username: credentials.username },
          });

          if (user && (await bcrypt.compare(credentials.password, user.password))) {
            return {
              id: user.id,
              name: `${user.frontName || ""} ${user.familyName || ""}`.trim(),
              email: user.email,
              type: "user", // Use "type" instead of "userType"
            };
          }

          // Check Entity table
          const entity = await prisma.entity.findUnique({
            where: { companyUsername: credentials.username },
          });

          if (entity && (await bcrypt.compare(credentials.password, entity.password))) {
            return {
              id: entity.id,
              name: entity.companyName || "Entity",
              email: entity.companyEmail,
              type: "entity", // Use "type" instead of "userType"
            };
          }

          return null; // Return null if no match
        } catch (err) {
          console.error("Error during authentication:", err);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.type = user.type; // Add type to token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.type = token.type as string; // Add type to session
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom sign-in page
    error: "/auth/error", // Custom error page
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in your environment variables
};

export default authOptions;
