// pages/api/waqfs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const waqfs = await prisma.waqf.findMany({
      select: {
        id: true,
        waqfName: true,
        waqfAddress: true,
        waqfPhoneNumber: true,
        imageUrl: true,
        totalRaised: true,
        CauseOnWaqf: {
          select: {
            waqfCause: {
              select: {
                waqfCause: true, // Assuming this is the field name in WaqfCause
              },
            },
          },
        },
      },
    });

    // Format the data to include causes
    const formattedWaqfs = waqfs.map(waqf => ({
      id: waqf.id,
      waqfName: waqf.waqfName,
      waqfAddress: waqf.waqfAddress,
      waqfPhoneNumber: waqf.waqfPhoneNumber,
      imageUrl: waqf.imageUrl,
      causes: waqf.CauseOnWaqf.map(cause => cause.waqfCause.waqfCause).join(', '), // Join causes into a string
    }));

    res.status(200).json(formattedWaqfs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch waqfs' });
  }
}