// pages/api/landfills/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retrieve the session from the request
  const session = await getSession({ req });

  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  try {
    const landfill = await prisma.landfills.findUnique({
      where: { id: Number(id) }, // Ensure the ID is a number
    });

    if (!landfill) {
      return res.status(404).json({ error: 'Landfill not found' });
    }

    res.status(200).json(landfill);
  } catch (error) {
    console.error('Error fetching landfill:', error);
    res.status(500).json({ error: 'Failed to fetch landfill' });
  }
}