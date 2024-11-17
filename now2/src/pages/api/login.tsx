import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import bcrypt from 'bcrypt';
import { getToken } from 'next-auth/jwt'; // Optional: If you want to use JWT

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // First, check the user table
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (user) {
      // Compare passwords for user
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        // Successfully authenticated
        // You can create a session or return a token here
        return res.status(200).json({ message: 'Login successful', type: 'user' });
      }
    }

    // If not found in user table, check the entity table
    const entity = await prisma.entity.findUnique({
      where: { companyUsername: username },
    });

    if (entity) {
      // Compare passwords for entity
      const isValidPassword = await bcrypt.compare(password, entity.password);
      if (isValidPassword) {
        // Successfully authenticated
        // You can create a session or return a token here
        return res.status(200).json({ message: 'Login successful', type: 'entity' });
      }
    }

    // If neither user nor entity found
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Method not allowed
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}