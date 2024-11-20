// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import authOptions from '@/lib/auth'; // Adjust the path according to your project structure

export default NextAuth(authOptions);