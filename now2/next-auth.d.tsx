// next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string; // Add the id property
    type: string | null;
  }

  interface Session {
    user: User; // Ensure the user object includes the extended User type
  }

  interface JWT {
    id: string; // Add the id property to the JWT interface
  }
}