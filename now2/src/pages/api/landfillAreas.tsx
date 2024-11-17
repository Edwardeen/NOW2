// pages/api/landfillAreas.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const landfillAreas = await prisma.landfillArea.findMany({
      select: {
        id: true,
        location: true, // Assuming the name field exists
      },
    });

    res.status(200).json(landfillAreas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch landfill areas' });
  }
}