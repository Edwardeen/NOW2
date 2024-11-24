// components/CauseCard.tsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Waqf {
  id: number;
  imageUrl: string;
  waqfName: string;
  waqfPhoneNumber: string;
  waqfAddress: string;
  causes: string;
}

interface CauseCardProps extends Waqf {
  landfillId: string | null; // Add the landfillId prop
}

const CauseCard: React.FC<CauseCardProps> = ({ id, imageUrl, waqfName, waqfPhoneNumber, waqfAddress, causes, landfillId }) => {
  // Use landfillId as needed in the card (for example, display or use it for making further requests)
  console.log("Landfill ID passed to CauseCard:", landfillId); // Example use

  return (
    <Link href={`/waqfs/${id}?landfillId=${landfillId}`}>
      <div className="flex flex-col justify-center p-4 rounded-3xl bg-Green/80 text-zinc-800 mb-4 cursor-pointer h-80 w-full">
        <div className='flex h-1/3 w-full'>
          <Image
            loading="lazy"
            src={imageUrl}
            alt={`Image of ${waqfName}`}
            className="object-cover rounded-3xl w-full h-72 overflow-hidden"
            width={400}
            height={200}
          />
        </div>
        
        <div className="flex flex-col px-4 h-2/3 bg-gradient-to-b from-black/0 to-black/95 items-wrap rounded-3xl text-white">
          <div className="flex flex-col gap-5 mb-2 justify-between my-auto items-center w-full text-3xl">
            <div className="self-stretch text-4xl my-auto font-bold">
              <span>{waqfName}</span>
            </div>
            <div className="self-stretch text-sm font-semibold">
              <span>{waqfPhoneNumber}</span>
            </div>
          </div>
          <div className="text-sm">
            <span>{waqfAddress}</span>
          </div>
          <div className="font-semibold text-sm pb-3">
            <span>Cause: {causes}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Component to render all cause cards
const Causes: React.FC<{ landfillId: string }> = ({ landfillId }) => {  // Accept landfillId as a prop here
  const [waqfs, setWaqfs] = useState<Waqf[]>([]);
  const [error, setError] = useState<string | null>(null);

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
      }
    };

    fetchWaqfs();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {waqfs.map((waqf) => (
        <CauseCard
          key={waqf.id}
          id={waqf.id}
          imageUrl={waqf.imageUrl}
          waqfName={waqf.waqfName}
          waqfPhoneNumber={waqf.waqfPhoneNumber}
          waqfAddress={waqf.waqfAddress}
          causes={waqf.causes}
          landfillId={landfillId} // Pass landfillId to each CauseCard
        />
      ))}
    </div>
  );
};

export default Causes;
