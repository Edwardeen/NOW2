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

  const { entityId } = req.query;

  if (typeof entityId !== 'string' || !entityId) {
    return res.status(400).json({ error: 'Entity ID is required' });
  }

  try {
    // Convert entityId to number if your Prisma schema uses Int for EntityID
    const entityIdNum = parseInt(entityId);
    if (isNaN(entityIdNum)) {
      return res.status(400).json({ error: 'Invalid Entity ID format' });
    }

    const result = await prisma.history.aggregate({
      where: {
        EntityID: entityIdNum, // Filter by EntityID
      },
      _sum: {
        totalScreened: true, // Sum the screened amount for this entity
      },
    });

    const totalScreened = result._sum.totalScreened || 0;

    return res.status(200).json({ totalScreened });

  } catch (error) {
    console.error(`API Error fetching screened total for entity ${entityId}:`, error);
    return res.status(500).json({ error: 'Failed to retrieve screened total' });
  } finally {
    // await prisma.$disconnect(); // Optional
  }
} 