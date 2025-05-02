import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust import path if needed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.query;

  if (typeof userId !== 'string' || !userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Convert userId to number if your Prisma schema uses Int for UserID
    const userIdNum = parseInt(userId);
    if (isNaN(userIdNum)) {
      return res.status(400).json({ error: 'Invalid User ID format' });
    }

    const result = await prisma.history.aggregate({
      where: {
        UserID: userIdNum, // Filter by UserID
      },
      _sum: {
        totalScreened: true, // Sum the screened amount for this user
      },
    });

    const totalScreened = result._sum.totalScreened || 0;

    return res.status(200).json({ totalScreened });

  } catch (error) {
    console.error(`API Error fetching screened total for user ${userId}:`, error);
    return res.status(500).json({ error: 'Failed to retrieve screened total' });
  } finally {
    // await prisma.$disconnect(); // Optional
  }
} 