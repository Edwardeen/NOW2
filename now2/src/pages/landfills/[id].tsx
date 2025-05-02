// pages/landfills/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

// Skeleton Loader (Shared or local)
const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
);

// Specific Skeleton for this page
const LandfillDetailSkeleton: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-Green">
    {/* Skeleton Header */}
    <div className='px-4 sm:px-6 lg:px-8 xl:px-12'>
      <div className='flex flex-row justify-between items-center py-2'>
        <SkeletonLoader className="h-12 w-48 rounded-lg" />
        <div className='flex flex-row gap-2 items-center'>
          <SkeletonLoader className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
    {/* Skeleton Content Area */}
    <div className='flex flex-col flex-grow mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
       <SkeletonLoader className="h-8 w-1/3 self-center mb-4" /> {/* Title */}
       <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
         {/* Map Placeholder */}
         <div className="w-full md:w-1/3 lg:w-1/2">
           <SkeletonLoader className="aspect-video w-full rounded-lg md:rounded-xl" />
         </div>
         {/* Details Placeholder */}
         <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-start gap-4">
           <SkeletonLoader className="h-10 w-3/4" /> {/* Name */}
           <SkeletonLoader className="h-6 w-1/2" /> {/* Phone */}
           <SkeletonLoader className="h-6 w-5/6" /> {/* Address */}
           <SkeletonLoader className="h-10 w-32 mt-6 rounded-md" /> {/* Button */}
         </div>
       </div>
    </div>
  </div>
);

interface Landfill {
  id: string;
  imageUri: string; // Assuming this is a Map Embed URL for the iframe
  landfillName: string;
  landfillPhoneNumber: string;
  landfillAddress: string;
}

const LandfillDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [landfill, setLandfill] = useState<Landfill | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchLandfill = async () => {
      if (!id || typeof id !== 'string') { // Check if id is a string
        setError('Invalid Landfill ID.');
        setIsLoading(false);
        return;
      }
      
      setIsLoading(true);
      setError(null);
      setLandfill(null);

      try {
        const response = await fetch(`/api/landfills/${id}`);
        if (!response.ok) {
           const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch landfill');
        }
        const data = await response.json();
        // Basic validation of expected fields
        if (!data || typeof data.landfillName === 'undefined') { 
             throw new Error('Received invalid landfill data.');
        }
        setLandfill(data);
      } catch (error: any) {
        console.error('Error fetching landfill:', error);
        setError(error.message || 'Could not load landfill details.');
      } finally {
        setIsLoading(false);
      }
    };

     if (router.isReady) { // Ensure router query is ready
       fetchLandfill();
     }

  }, [id, router.isReady]);

  const handleSubmit = () => {
    if (landfill) {
      router.push({
        pathname: '/waqfs/chooseWaqf',
        query: { landfillId: landfill.id },
      });
    } else {
      // This case should ideally not be reachable if loading/error states are handled
      alert('Landfill data is not available.'); 
    }
  };

  if (isLoading) {
    return <LandfillDetailSkeleton />;
  }

  if (error) {
     return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Error Loading Landfill</h2>
            <p className="text-gray-700">{error}</p>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
         </div>
       </div>
     );
  }

  // Landfill should not be null here if no error and not loading
  if (!landfill) {
     return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Landfill Not Found</h2>
             <p className="text-gray-500">The requested landfill could not be found.</p>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
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

      {/* Responsive Content Container */}
      <div id="CreamContainer" className='flex flex-col flex-grow mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
        {/* Removed extra nested divs */} 
        <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full'>
          {/* Left side for Map (iframe) */}
          <div className='w-full md:w-1/2 lg:w-1/2 flex-shrink-0'> {/* Adjusted width */} 
             {/* Assuming imageUri is a valid embed URL */}
             <iframe 
                title={`${landfill.landfillName || 'Landfill'} Location Map`}
                src={landfill.imageUri} 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full aspect-video rounded-lg md:rounded-xl shadow-md' /* Changed to aspect-video */
              />
          </div>

          {/* Right side for Landfill Details */}
          <div className='flex flex-col items-center md:items-start w-full md:w-1/2 lg:w-1/2'>
             {/* Responsive Text */} 
            <h1 className="text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl mb-4 text-center md:text-left">Pick this landfill?</h1>
            <div className="w-full text-center md:text-left flex flex-col items-center md:items-start gap-2">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-Tertiary">{landfill.landfillName}</h2>
               <p className="text-base sm:text-lg text-Tertiary"><strong>Phone:</strong> {landfill.landfillPhoneNumber || 'N/A'}</p>
               <p className="text-base sm:text-lg text-Tertiary"><strong>Address:</strong> {landfill.landfillAddress || 'N/A'}</p>
            </div>
            {/* Submission Button */}
            <div className="mt-6 md:mt-8 w-full flex justify-center md:justify-start">
              <button 
                onClick={handleSubmit} 
                className="btn bg-Tertiary text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Select & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandfillDetail;