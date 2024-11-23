import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust the path according to your project structure

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  return prisma.transactions.findMany({

    include : {
        User: true,
        Entity: true
        }
    })
  .then((data) => {
    res.status(200).json(data);
  });
}