// pages/api/waqfs/totalDonations.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const totalDonations = await prisma.waqf.aggregate({
      _sum: {
        totalRaised: true, // Assuming 'totalRaised' is the column name
      },
    });

    res.status(200).json({ totalRaised: totalDonations._sum.totalRaised || 0 });
  } catch (error) {
    console.error('Error fetching total donations:', error);
    res.status(500).json({ error: 'Failed to fetch total donations' });
  }
}