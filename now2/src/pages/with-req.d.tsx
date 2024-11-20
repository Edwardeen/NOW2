declare module 'next-auth/client' {
    interface Session {
      req?: any; // You can replace 'any' with a more specific type if needed
    }
  }