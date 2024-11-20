// app/components/HistoryCard.tsx
import React from 'react';
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

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch(`/api/history/${id}`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `history_${id}.pdf`; // Use a dynamic filename
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div
      className="flex flex-col p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer max-w-[550px] h-72"
      onClick={handleDownloadPdf}
    >
      <div className="flex flex-wrap px-4 mt-4">
        <div className="flex flex-col gap-5 justify-between items-center w-full text-3xl">
          <div className="self-stretch my-auto font-bold text-3xl">
            <span>{waqfName}</span>
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
          </div>
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

const Histories: React.FC< HistoriesProps> = ({ userId, userType }) => {
  const [histories, setHistories] = useState<HistoryItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistories = async () => {
      if (!userId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch histories');
        }
        const data = await response.json();

        const enrichedHistories = data.map((history: any) => ({
          id: history.id,
          waqfName: history.WaqfName,
          historyDate: history.historyDate,
          totalTransferred: history.totalTransferred,
          historyDescription: history.historyDescription,
          landfillName: history.LandfillName,
          imageUrl: history.imageUrl || '',
        }));

        setHistories(enrichedHistories);
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