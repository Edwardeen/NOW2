// pages/api/landfills.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { location } = req.query;

  try {
    // First, find the landfill area by city
    const landfillArea = await prisma.landfillArea.findUnique({
      where: {
        location: String(location), // Assuming there is a location field in the landfillArea table
      },
    });

    // If no landfill area is found, return an error
    if (!landfillArea) {
      return res.status(404).json({ error: 'Landfill area not found' });
    }

    // Now, find the landfills that belong to the found landfill area
    const landfills = await prisma.landfills.findMany({
      where: {
        landfillAreaName: landfillArea.location, // Use the ID of the found landfill area
      },
      select: {
        id: true,
        landfillName: true,
        landfillPhoneNumber: true,
        landfillAreaName: true,
        landfillAddress: true,
        imageUri: true, // Assuming this field exists
      },
    });

    console.log('Fetched landfills:', landfills); // Log the fetched landfills
    res.status(200).json(landfills);
  } catch (error) {
    console.error('Error fetching landfills:', error);
    res.status(500).json({ error: 'Failed to fetch landfills' });
  }
}