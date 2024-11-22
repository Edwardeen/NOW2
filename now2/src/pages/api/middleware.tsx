import { NextResponse, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If the token does not exist, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Apply the middleware to specific routes
export const config = {
  matcher: ['/User/:path*'], // Protect all routes under /User  
  api: {
    bodyParser: true, // Ensures Next.js parses JSON
  }, 
};