// app/components/HistoryCard.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HistoryCardProps {
  id: string;
  imageUrl: string;
  waqfName: string;
  historyDate: string;
  totalTransferred: number;
  historyDescription: string;
  landfillName: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  id,
  imageUrl,
  waqfName,
  historyDate,
  totalTransferred,
  historyDescription,
  landfillName,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/User/history/${id}`);
  };

  return (
    <div
      className="flex flex-col p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer max-w-[550px] h-72"
      onClick={handleCardClick}
    >
      <div className="flex flex-wrap px-4 mt-4">
        <div className="flex flex-col gap-5 justify-between items-center w-full text-3xl">
          <div className="self-stretch my-auto font-bold text-3xl">
            <span>{waqfName} </span>
            
          </div>
          
          <div className="self-stretch my-auto font-semibold text-3xl">
            <span>{landfillName}</span>
          </div>     
             
        <div className="self-stretch my-auto font-semibold text-xl">
          <span>History Date: {historyDate}</span>
        </div>
        <div className="self-stretch my-auto font-semibold text-xl">
          <span>Total Transferred: RM{totalTransferred.toFixed(2)}</span>
        </div>
        <div className="self-stretch my-auto font-semibold text-sm">
        <span>Id: {id}</span>
        </div >
        
        </div>

      </div>
    </div>
  );
};

// app/components/Histories.tsx
import { useEffect, useState } from 'react';

interface HistoriesProps {
  userId: string | null;
  userType: string | null;
}

interface HistoryItem {
  id: string;
  waqfName: string;
  historyDate: string;
  totalTransferred: number;
  historyDescription: string;
  landfillName: string;
  imageUrl: string;
}

interface WaqfData {
  waqfName: string;
  imageUrl: string;
}

const Histories: React.FC<HistoriesProps> = ({ userId, userType }) => {
  const [histories, setHistories] = useState<HistoryItem[]>([]);
  const [waqfDataMap, setWaqfDataMap] = useState<Record<string, WaqfData>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistories = async () => {
      if (!userId) return;

      setLoading(true);
      setError(null);

      try {
        // Fetch history data
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch histories');
        }
        const data = await response.json();

        // Extract unique Waqf names
        const waqfNames = Array.from(new Set(data.map((history: any) => history.WaqfName)));

        // Fetch all Waqf data in a single call
        const waqfResponse = await fetch(`/api/waqfs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ waqfNames }),
        });

        if (!waqfResponse.ok) {
          throw new Error('Failed to fetch Waqf data');
        }

        const waqfDataArray: WaqfData[] = await waqfResponse.json();

        // Create a map of Waqf data for quick lookup
        const waqfDataMap = waqfDataArray.reduce((map, waqf) => {
          map[waqf.waqfName] = waqf;
          return map;
        }, {} as Record<string, WaqfData>);

        // Enrich history data with Waqf data
        const enrichedHistories = data.map((history: any) => {
          const waqfData = waqfDataMap[history.WaqfName] || {};
          return {
            id: history.id,
            waqfName: history.WaqfName,
            imageUrl: waqfData.imageUrl || '',
            historyDate: history.historyDate,
            totalTransferred: history.totalTransferred,
            historyDescription: history.historyDescription,
            landfillName: history.LandfillName,
          };
        });

        setHistories(enrichedHistories);
        setWaqfDataMap(waqfDataMap);
      } catch (error: any) {
        console.error('Error fetching histories:', error);
        setError('Could not load histories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, [userId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading history...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!histories.length) {
    return <div className="text-center text-gray-500">No history records found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {histories.map((history) => (
        <HistoryCard
          key={history.id}
          id={history.id}
          imageUrl={history.imageUrl}
          waqfName={history.waqfName}
          historyDate={new Date(history.historyDate).toLocaleDateString()}
          totalTransferred={history.totalTransferred}
          historyDescription={history.historyDescription}
          landfillName={history.landfillName}
        />
      ))}
    </div>
  );
};

export default Histories;
