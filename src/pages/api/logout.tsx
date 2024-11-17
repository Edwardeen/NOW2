import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    // Optionally, you can invalidate the session token here if needed
    // This is usually handled by NextAuth automatically

    // Respond with a success message
    return res.status(200).json({ message: 'Logged out successfully' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}