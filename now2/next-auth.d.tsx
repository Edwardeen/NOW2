import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Unique user ID
    name?: string | null; // User's name (optional)
    type: string | null; // User type (e.g., 'user', 'entity')
  }

  interface Session {
    user: User; // The extended User object
    accessToken: string | unknown; // Add the accessToken field
  }

  interface JWT {
    id: string; // User ID
    type: string | null; // User type
    accessToken: string; // Add the accessToken field for JWT
  }
}
