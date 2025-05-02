import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust import path if needed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Fetch all history records - consider performance for large datasets
    // Potential Optimization: Aggregate directly in the database if possible
    const historyRecords = await prisma.history.findMany({
      select: {
        historyDate: true,
        totalTransferred: true, // Donations
        totalScreened: true,    // Carbon Reduced
      },
      orderBy: {
        historyDate: 'asc',
      },
    });

    if (!historyRecords || historyRecords.length === 0) {
      return res.status(200).json({ data: [] }); // No history, return empty data
    }

    // Aggregate data by month
    const monthlyData: Record<string, { donations: number; carbon: number }> = {};

    historyRecords.forEach(record => {
      try {
        const date = new Date(record.historyDate);
        if (isNaN(date.getTime())) {
          // console.warn(`Invalid date found in global history processing.`); // Optional warning
          return; // Skip this record
        }
        
        const year = date.getFullYear();
        const month = date.getMonth(); // 0-indexed
        const key = `${year}-${String(month + 1).padStart(2, '0')}`; // YYYY-MM

        if (!monthlyData[key]) {
          monthlyData[key] = { donations: 0, carbon: 0 };
        }

        monthlyData[key].donations += record.totalTransferred ?? 0;
        monthlyData[key].carbon += record.totalScreened ?? 0;

      } catch (dateError) {
        console.error('Error processing date during global aggregation:', dateError);
        // Potentially log record ID if available and needed
      }
    });

    // Format for chart
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
    console.error('API Error fetching global chart data:', error);
    return res.status(500).json({ error: 'Failed to retrieve global chart data' });
  } finally {
    // await prisma.$disconnect(); // Optional
  }
} 