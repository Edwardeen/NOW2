// src/middleware/authMiddleware.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth'; // Adjust the import path as necessary
import { Session } from 'next-auth'; // Import the Session type

// Extend NextApiRequest to include session
interface ExtendedNextApiRequest extends NextApiRequest {
  session: Session | null; // Use the Session type from next-auth
}

export const authMiddleware = async (req: ExtendedNextApiRequest, res: NextApiResponse, next: () => void) => {
  // Get the session using NextAuth
  const session = await getServerSession(req, res, authOptions);

  // Check if the session exists
  if (!session) {
    return res.status(401).json({ error: 'User  is not logged in' });
  }

  // Attach session to request for further use in the route handler
  req.session = session; // Now req.session will have the user and accessToken

  next(); // Call the next middleware or route handler
};