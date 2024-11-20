// components/CauseCard.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Waqf {
  id: number ;
  imageUrl: string;
  waqfName: string;
  waqfPhoneNumber: string;
  waqfAddress: string;
  causes: string;
}

const CauseCard: React.FC<Waqf> = ({ id, imageUrl, waqfName, waqfPhoneNumber, waqfAddress, causes }) => {
  const router = useRouter();
  const { landfillId } = router.query; // Get landfillId from the query parameters

  return (
    <Link href={`/waqfs/${id}?landfillId=${landfillId || ''}`}>
      <div className="flex flex-col justify-center p-4 rounded-3xl bg-Green/80 text-zinc-800 mb-4 cursor-pointer h-80 w-full hover:shadow-lg transition-shadow">
        <div className="flex h-1/3 w-full">
          <Image
            loading="lazy"
            src={imageUrl}
            alt={`Image of ${waqfName}`}
            className="object-cover rounded-3xl w-full h-72"
            width={400}
            height={200}
          />
        </div>

        <div className="flex flex-col px-4 h-2/3 bg-gradient-to-b from-black/0 to-black/95 items-start rounded-3xl text-white">
          <h2 className="text-4xl font-bold my-2">{waqfName}</h2>
          <p className="text-sm font-semibold mb-1">{waqfPhoneNumber}</p>
          <p className="text-sm mb-2">{waqfAddress}</p>
          <p className="font-semibold text-sm">Cause: {causes}</p>
        </div>
      </div>
    </Link>
  );
};

// Component to render all cause cards
const Causes: React.FC = () => {
  const [waqfs, setWaqfs] = useState<Waqf[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWaqfs = async () => {
      try {
        const response = await fetch('/api/waqfs');
        if (!response.ok) {
          throw new Error('Failed to fetch waqfs');
        }
        const data = await response.json();
        setWaqfs(data);
      } catch (error: any) {
        console.error('Error fetching waqfs:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWaqfs();
  }, []);

  if (loading) {
    return <p className="text-center text-lg text-blue-500">Loading waqfs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (waqfs.length === 0) {
    return <p className="text-center text-gray-500">No waqfs available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {waqfs.map((waqf) => (
        <CauseCard
          key={waqf.id}
          id={waqf.id}
          imageUrl={waqf.imageUrl}
          waqfName={waqf.waqfName}
          waqfPhoneNumber={waqf.waqfPhoneNumber}
          waqfAddress={waqf.waqfAddress}
          causes={waqf.causes}
        />
      ))}
    </div>
  );
};

export default Causes;
