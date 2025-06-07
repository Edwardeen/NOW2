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
  landfillId: string | null;
}

const CauseCard: React.FC<CauseCardProps> = ({ id, imageUrl, waqfName, waqfPhoneNumber, waqfAddress, causes, landfillId }) => {
  // Construct the link href safely, handle null landfillId
  const linkHref = landfillId ? `/waqfs/${id}?landfillId=${landfillId}` : `/waqfs/${id}`;

  return (
    <Link href={linkHref} className="block h-full">
      {/* Removed fixed height, adjusted padding/structure */}
      <div className="flex flex-col h-full rounded-lg md:rounded-xl bg-Green/80 text-zinc-800 shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className='relative h-40 sm:h-48 w-full flex-shrink-0'>
          <Image
            loading="lazy"
            src={imageUrl || '/placeholder-image.png'} // Fallback image
            alt={`Image of ${waqfName}`}
            fill // Use fill layout
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Adjust as needed
          />
        </div>
        
        {/* Text Content with Gradient Overlay */}
        {/* Note: Gradient might look different without fixed height */}
        {/* Consider applying gradient to a pseudo-element or inner div if needed */}
        <div className="relative flex flex-col flex-grow p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
           {/* Push content to bottom using flex-grow on spacer */} 
           <div className="flex-grow"></div> 
           <div className="flex flex-col gap-1 z-10"> {/* Ensure text is above gradient */}
             {/* Responsive Text */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold truncate">{waqfName}</h2>
            <p className="text-xs sm:text-sm font-semibold truncate">{waqfPhoneNumber}</p>
            <p className="text-xs sm:text-sm mt-1 line-clamp-2">{waqfAddress}</p> {/* Limit address lines */}
            <p className="font-semibold text-xs sm:text-sm mt-1">Cause: {causes}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Skeleton for CauseCard
const CauseCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col h-full rounded-lg md:rounded-xl bg-gray-200 animate-pulse overflow-hidden">
      <div className='relative h-40 sm:h-48 w-full flex-shrink-0 bg-gray-300'></div>
      <div className="flex flex-col flex-grow p-3 sm:p-4 gap-2">
          <div className="h-6 w-4/5 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/5 bg-gray-300 rounded"></div>
          <div className="h-3 w-full bg-gray-300 rounded mt-1"></div>
          <div className="h-3 w-full bg-gray-300 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-300 rounded mt-1"></div>
      </div>
    </div>
  );
};

// Component to render all cause cards
const Causes: React.FC<{ landfillId: string | null }> = ({ landfillId }) => { 
  const [waqfs, setWaqfs] = useState<Waqf[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchWaqfs = async () => {
      setIsLoading(true);
      setError(null);
      setWaqfs([]); // Clear previous results
      try {
        // TODO: Modify API to filter by landfillId or location if needed
        const response = await fetch('/api/waqfs'); 
        if (!response.ok) {
           const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch waqfs');
        }
        const data = await response.json();
        setWaqfs(data || []); // Default to empty array
      } catch (error: any) {
        console.error('Error fetching waqfs:', error);
        setError(error.message || 'Could not load Waqf list.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWaqfs();
    // Dependency array is empty: fetch only once on mount.
    // Add landfillId here if the fetch should re-run when it changes (requires API modification)
  }, []); 

  if (isLoading) {
     return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
         {[...Array(3)].map((_, index) => (
            <CauseCardSkeleton key={index} />
         ))}
       </div>
     );
  }

  if (error) {
    return <p className="text-red-500 text-center p-6">{error}</p>;
  }

  if (waqfs.length === 0) {
      return <p className="text-gray-500 text-center p-6">No Waqfs found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {waqfs.map((waqf) => (
        <CauseCard
          key={waqf.id}
          id={waqf.id}
          imageUrl={waqf.imageUrl}
          waqfName={waqf.waqfName}
          waqfPhoneNumber={waqf.waqfPhoneNumber}
          waqfAddress={waqf.waqfAddress}
          causes={waqf.causes}
          landfillId={landfillId} // Pass landfillId down
        />
      ))}
    </div>
  );
};

export default Causes;
