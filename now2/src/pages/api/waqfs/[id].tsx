// pages/api/waqfs/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import { getSession } from 'next-auth/react'; // Import getSession to handle session

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  console.log('Received ID:', id); // Log the received ID

  // Check if the ID is valid
  if (!id || isNaN(Number(id))) {
    console.error('Invalid ID:', id); // Log invalid ID
    return res.status(400).json({ error: 'Invalid ID' });
  }

  // Get the session
  const session = await getSession({ req });
  if (!session) {
    // If there's no session, return a 401 Unauthorized response
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const waqf = await prisma.waqf.findUnique({
      where: { id: Number(id) }, // Ensure the ID is a number
      select: {
        id: true,
        waqfName: true, // Select the waqf name
        imageUrl: true, // Select the image URI
        waqfPhoneNumber: true,
        waqfAddress: true,
        totalRaised: true,
        
        CauseOnWaqf: {
          include: {
            waqfCause: true, // Include the cause details if needed
          },
        },
      },
    });

    if (!waqf) {
      console.error('Waqf not found for ID:', id); // Log if Waqf is not found
      return res.status(404).json({ error: 'Waqf not found' });
    }

    res.status(200).json(waqf);
  } catch (error) {
    console.error('Error fetching waqf:', error); // Log the error
    res.status(500).json({ error: 'Failed to fetch waqf' });
  }
}