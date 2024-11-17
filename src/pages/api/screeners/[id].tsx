// pages/api/screeners/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log('Received ID:', id); // Log the received ID

  // Check if the ID is valid
  if (!id || isNaN(Number(id))) {
    console.error('Invalid ID:', id); // Log invalid ID
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const screener = await prisma.screener.findUnique({
      where: { id: Number(id) }, // Ensure the ID is a number
      select: {
        name: true, // Select the screener name
        email: true, // Select the email
        phoneNumber: true, // Select the phone number
      },
    });

    if (!screener) {
      console.error('Screener not found for ID:', id); // Log if Screener is not found
      return res.status(404).json({ error: 'Screener not found' });
    }

    res.status(200).json(screener);
  } catch (error) {
    console.error('Error fetching screener:', error); // Log the error
    res.status(500).json({ error: 'Failed to fetch screener' });
  }
}