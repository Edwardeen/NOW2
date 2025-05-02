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

  const { id } = req.query;

  if (typeof id !== 'string' || !id) {
    return res.status(400).json({ error: 'Entity ID is required and must be a string' });
  }

  try {
    // Convert id to number if your Prisma schema uses Int for ID
    // If your ID is a string (e.g., CUID), remove parseInt
    const entityId = parseInt(id); 
    if (isNaN(entityId)) {
         return res.status(400).json({ error: 'Invalid Entity ID format' });
    }

    const entity = await prisma.entity.findUnique({ // Assuming model name is 'entity'
      where: {
        id: entityId, // Assuming field name is 'id'
      },
      // Select specific fields if needed, otherwise fetches all
      // select: {
      //   id: true,
      //   entityName: true, 
      //   // Add other fields needed by the PDF generator
      // }
    });

    if (!entity) {
      return res.status(404).json({ error: 'Entity not found' });
    }

    // Return the found entity data
    return res.status(200).json(entity);

  } catch (error) {
    console.error('API Error fetching entity data:', error);
    return res.status(500).json({ error: 'Failed to retrieve entity data' });
  } finally {
    // Optional: Disconnect Prisma client if necessary
    // await prisma.$disconnect();
  }
} 