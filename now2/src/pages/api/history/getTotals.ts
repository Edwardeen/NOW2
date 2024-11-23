// pages/api/history/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import { getSession } from 'next-auth/react';


export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  // Get the session from the request
  const session = await getSession({ req });

  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }


    if(!session.user.id || !session.user.type) {
      return res.status(400).json({ error: 'Invalid user session' });
    }


  // Use the user ID and type from the session
  const userId = Number(session.user.id); // Assuming user.id is a string
  const userType = session.user.type; // Assuming user.type is either 'user' or 'entity'

  try {
    let historyItems;
    if (userType === 'user') {
      // Fetch history where UserID matches the user's ID
      historyItems = await prisma.history.findMany({
        where: {
          UserID: userId, // Use the user ID from the session
        },
        select: {
          totalScreened: true,
        }
      });
    } else if (userType === 'entity') {
      // Fetch history where EntityID matches the user's ID
      historyItems = await prisma.history.findMany({
        where: {
          EntityID: userId, // Use the entity ID from the session
        },
      });
    } else {
      throw new Error('Invalid user type');
    } 

    // get the total of all the totalScreened values
    const totalScreened = historyItems.reduce((acc, item) => acc + item.totalScreened, 0);

    res.status(200).json({ totalScreened });

    } catch (error) {
        console.error('Error fetching history:', error);
        res.status(500).json({ error: 'Failed to fetch history' });
    }

        
}
