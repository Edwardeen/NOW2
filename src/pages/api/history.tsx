// pages/api/history.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { historyDate, historyDescription, UserID, EntityID, LandfillName, WaqfName, totalTransferred } = req.body;

    try {
      const history = await prisma.history.create({
        data: {
          historyDate: new Date(historyDate),
          historyDescription,
          UserID,
          EntityID,
          WaqfName,
          totalTransferred,
          LandfillName,
        },
      });

      res.status(201).json(history);
    } catch (error) {
      console.error('Error creating history:', error);
      res.status(500).json({ error: 'Failed to create history' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}