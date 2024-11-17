// pages/api/landfills/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const landfill = await prisma.landfills.findUnique({
      where: { id: Number(id) }, // Ensure the ID is a string
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