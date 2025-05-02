// pages/index.tsx
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
import React, { useEffect, useState } from 'react';

// Skeleton Loader (Shared or local)
const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded-lg md:rounded-xl ${className}`}></div>
);

interface LandfillArea {
  id: number;
  location: string;
}

export default function Page() {
  const router = useRouter();
  const [landfillAreas, setLandfillAreas] = useState<LandfillArea[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchLandfillAreas = async () => {
      setIsLoading(true); // Start loading
      setError(null);
      try {
        const response = await fetch('/api/landfillAreas');
        if (!response.ok) {
          throw new Error('Failed to fetch landfill areas');
        }
        const data = await response.json();
        setLandfillAreas(data || []); // Default to empty array
      } catch (error: any) {
        console.error('Error fetching landfill areas:', error);
        setError(error.message || 'Could not load areas.');
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchLandfillAreas();
  }, []);

  const handleAreaSelection = (location: string) => {
    router.push(`/landfills/chooseLandfill?location=${encodeURIComponent(location)}`); // Encode location
  };

  // Improved Error Display
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Error Loading Areas</h2>
            <p className="text-gray-700">{error}</p>
            {/* Optional: Add a retry button? */}
         </div>
       </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-Green">
       {/* Responsive Header */}
       <div className='px-4 sm:px-6 lg:px-8 xl:px-12'> 
         <div className='flex flex-row justify-between items-center py-2'>
           <Header />
           <div className='flex flex-row gap-2 items-center'>
             <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>NOW²</span>
             <Image 
               src={LogoIMG} 
               alt="Logo" 
               height={80} width={80}
               className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" 
             />
           </div>
         </div>
       </div>
      
      {/* Responsive Content Container - Added justify-center */}
      <div className='flex flex-col flex-grow justify-center mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-6 md:gap-8 px-4 py-6 sm:p-8 md:p-10 lg:p-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
         {/* Responsive Title */}
        <span className='text-Tertiary font-extrabold text-xl sm:text-2xl md:text-3xl'>Choose Your Landfill Area</span>
        
        {/* Responsive Grid for Buttons / Loading State - Added justify-center */}
        <div className='w-full flex-grow grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6'>
          {isLoading ? (
             // Skeleton Loaders - Changed to render 2
             [...Array(2)].map((_, index) => (
               // Added h-48 (example height, adjust if needed) or use h-full if grid row height is defined
               <SkeletonLoader key={index} className="w-full h-48" /> 
             ))
          ) : landfillAreas.length > 0 ? (
             // Area Buttons (Responsive)
             landfillAreas.map(area => (
               <button 
                 key={area.id} 
                 // Removed aspect-square, added h-full
                 className='btn btn-ghost bg-Green text-Tertiary rounded-lg md:rounded-xl flex items-center justify-center h-full p-4 sm:p-6 md:p-8 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-Primary focus:ring-opacity-50 transition-all' 
                 onClick={() => handleAreaSelection(area.location)}
               >
                 {/* Responsive Text */}
                 <span className='font-extrabold text-lg sm:text-xl md:text-2xl text-center'>{area.location}</span>
               </button>
             ))
          ) : (
             // No Areas Found Message
             <div className="col-span-full text-center text-gray-500 py-10">
                No landfill areas found.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}