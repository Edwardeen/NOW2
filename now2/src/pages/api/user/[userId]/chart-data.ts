import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma'; // Adjust import path if needed

interface AggregatedData {
  month: number;
  year: number;
  totalDonations: number;
  totalCarbon: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.query;

  if (typeof userId !== 'string' || !userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    // Fetch relevant history data for the user
    const historyRecords = await prisma.history.findMany({
      where: {
        // Assuming your History model links to User via a numeric UserID
        // Adjust field name and type (e.g., userId: userId if it's a string) if necessary
        UserID: parseInt(userId), 
      },
      select: {
        historyDate: true,
        totalTransferred: true, // Assuming this maps to 'donations'
        totalScreened: true,   // Assuming this maps to 'carbon' - VERIFY THIS FIELD NAME
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
        // Check if date is valid
        if (isNaN(date.getTime())) {
          console.warn(`Invalid date found in history record ID (if available): ${record.id || 'N/A'}`);
          return; // Skip this record
        }
        
        const year = date.getFullYear();
        const month = date.getMonth(); // 0-indexed (0 = January)
        const key = `${year}-${String(month + 1).padStart(2, '0')}`; // Format as YYYY-MM

        if (!monthlyData[key]) {
          monthlyData[key] = { donations: 0, carbon: 0 };
        }

        // Safely add amounts, defaulting to 0 if null/undefined
        monthlyData[key].donations += record.totalTransferred ?? 0;
         // VERIFY 'totalScreened' field exists and is correct for carbon metric
        monthlyData[key].carbon += record.totalScreened ?? 0; 

      } catch (dateError) {
          console.error('Error processing date for record: ' + (record.id || 'N/A'), dateError);
          // Decide if you want to skip the record or handle differently
      }
    });

    // Format for chart
    const chartData = Object.entries(monthlyData).map(([key, values]) => {
      // Construct date string for the first day of the month for consistent plotting
      const dateString = `${key}-01T00:00:00.000Z`; 
      return {
        date: dateString, // Use ISO string or YYYY-MM-DD
        donations: values.donations,
        carbon: values.carbon,
      };
    });

    // Sort by date just in case object key order isn't guaranteed (though usually it is)
    chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return res.status(200).json({ data: chartData });

  } catch (error) {
    console.error('API Error fetching chart data:', error);
    // Avoid sending detailed error messages to the client in production
    return res.status(500).json({ error: 'Failed to retrieve chart data' });
  } finally {
     // Disconnect Prisma client if necessary in your setup
     // await prisma.$disconnect(); 
  }
} 