import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { entityId } = req.query;

  if (typeof entityId !== 'string' || !entityId) {
    return res.status(400).json({ error: 'Entity ID is required' });
  }

  try {
    const historyRecords = await prisma.history.findMany({
      where: {
        EntityID: parseInt(entityId),
      },
      select: {
        historyDate: true,
        totalTransferred: true,
        totalScreened: true,
      },
      orderBy: {
        historyDate: 'asc',
      },
    });

    if (!historyRecords || historyRecords.length === 0) {
      return res.status(200).json({ data: [] });
    }

    const monthlyData: Record<string, { donations: number; carbon: number }> = {};

    historyRecords.forEach(record => {
      try {
        const date = new Date(record.historyDate);
        if (isNaN(date.getTime())) {
          console.warn(`Invalid date found in entity history processing.`);
          return;
        }
        
        const year = date.getFullYear();
        const month = date.getMonth();
        const key = `${year}-${String(month + 1).padStart(2, '0')}`;

        if (!monthlyData[key]) {
          monthlyData[key] = { donations: 0, carbon: 0 };
        }

        monthlyData[key].donations += record.totalTransferred ?? 0;
        monthlyData[key].carbon += record.totalScreened ?? 0;

      } catch (dateError) {
          console.error('Error processing date for record: ', dateError);
      }
    });

    const chartData = Object.entries(monthlyData).map(([key, values]) => {
      const dateString = `${key}-01T00:00:00.000Z`; 
      return {
        date: dateString,
        donations: values.donations,
        carbon: values.carbon,
      };
    });

    chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return res.status(200).json({ data: chartData });

  } catch (error) {
    console.error('API Error fetching entity chart data:', error);
    return res.status(500).json({ error: 'Failed to retrieve chart data' });
  }
} 