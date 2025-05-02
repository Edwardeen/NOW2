// pages/landfills-chooseLandfil.tsx
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LandfillCard from '@/app/components/landfillCard'; // Corrected import name to match component
import Header from '@/app/components/header';
import Image from 'next/image'; // Import Image

// Skeleton Loader for Landfill Card
const LandfillCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col p-3 sm:p-4 h-full rounded-lg md:rounded-xl bg-gray-200 animate-pulse">
      <div className="relative w-full aspect-[4/3] mb-3 sm:mb-4 bg-gray-300 rounded-md md:rounded-lg"></div>
      <div className="flex flex-col flex-grow gap-2">
        <div className="h-6 w-4/5 bg-gray-300 rounded"></div>
        <div className="h-5 w-3/5 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded mt-1"></div>
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

interface Landfill {
  id: string; 
  imageUri: string;
  landfillName: string;
  landfillPhoneNumber: string;
  landfillAddress: string;
}

const ChooseLandfill: React.FC = () => {
  const router = useRouter();
  const { location } = router.query;
  const [landfills, setLandfills] = useState<Landfill[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchLandfills = async () => {
      if (!location || typeof location !== 'string') {
        setError('Invalid or missing location.');
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      setLandfills([]); // Clear previous results
      
      try {
        // Ensure location parameter is properly encoded
        const response = await fetch(`/api/landfills?location=${encodeURIComponent(location)}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch landfills');
        }
        const data = await response.json();
        setLandfills(data || []); // Default to empty array
      } catch (error: any) {
        console.error('Error fetching landfills:', error);
        setError(error.message || 'Could not load landfills. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch when location is available and is a string
    if (location && typeof location === 'string') {
        fetchLandfills();
    } else if (router.isReady) { // If router is ready but location is invalid/missing
        setError('Location parameter is missing or invalid.');
        setIsLoading(false);
    }
    // Add router.isReady dependency to ensure query params are available
  }, [location, router.isReady]);

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
      
      {/* Responsive Content Container */}
      <div id="CreamContainer" className='flex flex-col flex-grow mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
         {/* Title and Location Display */}
        <div id="pickALandfil" className='flex flex-col sm:flex-row justify-between items-center w-full mb-4 md:mb-6 px-2'>
           {/* Responsive Text */}
          <h1 className="text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl">Pick a Landfill</h1>
          {location && (
              <h2 className="text-Tertiary font-semibold text-sm sm:text-base md:text-lg mt-1 sm:mt-0">📍 Location: {Array.isArray(location) ? location[0] : location}</h2>
          )}
        </div>
        
         {/* Responsive Grid for Landfill Cards / Loading / Error */}
        <div className="w-full flex-grow">
            {isLoading ? (
                 // Skeleton Grid
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {[...Array(4)].map((_, index) => (
                        <LandfillCardSkeleton key={index} />
                    ))}
                </div>
            ) : error ? (
                 // Error Message
                <div className="text-red-500 text-center p-6">{error}</div>
            ) : landfills.length === 0 ? (
                 // No Landfills Found
                <div className="text-gray-500 text-center p-6">
                    No landfills found for the selected location: {Array.isArray(location) ? location[0] : location}.
                </div>
            ) : (
                 // Landfill Card Grid
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                    {landfills.map((landfill) => (
                        <LandfillCard 
                            key={landfill.id}
                            id={landfill.id}
                            imageUri={landfill.imageUri}
                            name={landfill.landfillName}
                            phoneNumber={landfill.landfillPhoneNumber}
                            address={landfill.landfillAddress}
                        />
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChooseLandfill;