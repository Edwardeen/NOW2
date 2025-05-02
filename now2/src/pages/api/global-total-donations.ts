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

  try {
    const result = await prisma.history.aggregate({
      _sum: {
        totalTransferred: true,
      },
    });

    const totalDonations = result._sum.totalTransferred || 0;

    return res.status(200).json({ totalDonations });

  } catch (error) {
    console.error('API Error fetching global total donations:', error);
    return res.status(500).json({ error: 'Failed to retrieve global total donations' });
  } finally {
    // await prisma.$disconnect(); // Optional
  }
} 