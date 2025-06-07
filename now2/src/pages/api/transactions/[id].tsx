// pages/api/transactions/[userId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure
import { getSession } from 'next-auth/react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the session from the request
  const session = await getSession({ req });

  // Check if the user is authenticated
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Use the user ID and type from the session
  const userId = Number(session.user.id); // Assuming user.id is a string
  const userType = session.user.type; // Assuming user.type is either 'user' or 'entity'

  try {
    let transactions;
    const whereClauseBase = {
      NOT: {
        AND: [
          { transactionDeposited: true },
          { transactionScreened: true },
          { transactionTransformed: true },
          { transactionTransfered: true },
        ],
      },
    };

    if (userType === 'user') {
      transactions = await prisma.transactions.findMany({
        where: {
          UserID: userId,
          ...whereClauseBase,
        },
      });
    } else if (userType === 'entity') {
      transactions = await prisma.transactions.findMany({
        where: {
          EntityID: userId,
          ...whereClauseBase,
        },
      });
    } else {
      throw new Error('Invalid user type');
    }

    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
}

