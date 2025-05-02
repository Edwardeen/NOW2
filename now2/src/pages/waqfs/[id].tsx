// pages/waqfs/[id].tsx
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
const WaqfDetailSkeleton: React.FC = () => (
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
         {/* Image Placeholder */}
         <div className="w-full md:w-1/3 lg:w-1/2">
           <SkeletonLoader className="aspect-[4/3] w-full rounded-lg md:rounded-xl" />
         </div>
         {/* Details Placeholder */}
         <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center md:items-start gap-3 md:gap-4">
           <SkeletonLoader className="h-10 w-3/4" /> {/* Name */}
           <SkeletonLoader className="h-5 w-full" /> {/* Desc line 1 */}
           <SkeletonLoader className="h-5 w-5/6" /> {/* Desc line 2 */}
           <SkeletonLoader className="h-6 w-1/2 mt-2" /> {/* Total Raised */}
           <div className="mt-6 md:mt-8 flex flex-col gap-2 w-full">
             <SkeletonLoader className="h-5 w-3/4" /> {/* Phone */}
             <SkeletonLoader className="h-5 w-full" /> {/* Address */}
             <SkeletonLoader className="h-5 w-2/3" /> {/* Cause */}
           </div>
           <SkeletonLoader className="h-12 w-36 mt-6 rounded-md self-center md:self-start" /> {/* Button */}
         </div>
       </div>
    </div>
  </div>
);

interface Waqf {
  id: number;
  waqfName: string;
  waqfPhoneNumber: string;
  waqfAddress: string;
  description?: string; 
  imageUrl: string;
  totalRaised: number;
  CauseOnWaqf: {
    waqfCause: {
      waqfCause: string;
    };
  }[];
}

const WaqfDetail: React.FC = () => {
  const router = useRouter();
  const { id, landfillId } = router.query;
  const [waqf, setWaqf] = useState<Waqf | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchWaqf = async () => {
      if (!id || typeof id !== 'string') { // Check id
          setError("Invalid Waqf ID.");
          setIsLoading(false);
          return;
      }
      
      setIsLoading(true);
      setError(null);
      setWaqf(null);

      try {
        const response = await fetch(`/api/waqfs/${id}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch waqf');
        }
        const data = await response.json();
         // Basic validation
         if (!data || typeof data.waqfName === 'undefined') { 
             throw new Error('Received invalid waqf data.');
        }
        setWaqf(data);
      } catch (error: any) {
        console.error('Error fetching waqf:', error);
        setError(error.message || 'Could not load Waqf details.');
      } finally {
         setIsLoading(false);
      }
    };

    if (router.isReady) { // Ensure id is available
      fetchWaqf();
    }
  }, [id, router.isReady]);

  const handleSubmit = () => {
    // Ensure both IDs are valid strings before navigating
    if (waqf && typeof landfillId === 'string' && landfillId && typeof id === 'string' && id) {
      // localStorage.setItem('waqfId', String(waqf.id)); // Removed localStorage unless needed
      router.push({
        pathname: '/finalize/checkTransaction',
        query: { landfillId: landfillId, waqfId: id }, // Pass validated string IDs
      });
    } else {
      alert('Cannot proceed: Waqf or Landfill ID is missing or invalid.');
    }
  };

  if (isLoading) {
    return <WaqfDetailSkeleton />;
  }

  if (error) {
     return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Error Loading Waqf Details</h2>
            <p className="text-gray-700">{error}</p>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
         </div>
       </div>
     );
  }

  if (!waqf) {
    return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Waqf Not Found</h2>
            <p className="text-gray-500">The requested Waqf could not be found.</p>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
         </div>
       </div>
     ); 
  }

  // Safely format causes
  const causesString = waqf.CauseOnWaqf?.map(c => c.waqfCause?.waqfCause).filter(Boolean).join(', ') || 'N/A';

  return (
    <div className="flex flex-col min-h-screen bg-Green">
       {/* Responsive Header */}
       <div className='px-4 sm:px-6 lg:px-8 xl:px-12'> 
         {/* ... header jsx ... */} 
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
         {/* Responsive Layout */} 
        <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full'>
          {/* Image Column */}
          <div className='w-full md:w-1/3 lg:w-1/2 flex-shrink-0'>
            <div className="relative w-full aspect-[4/3]"> {/* Container for aspect ratio */}
               <Image 
                src={waqf.imageUrl || '/placeholder-image.png'} 
                alt={waqf.waqfName || 'Waqf Image'} 
                fill
                className='object-cover rounded-lg md:rounded-xl' 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Example sizes
               />
            </div>
          </div>

          {/* Details Column */}
          <div className='flex flex-col items-center md:items-start w-full md:w-2/3 lg:w-1/2'>
             {/* Responsive Text */}
            <h1 className="text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl mb-4 text-center md:text-left">Pick this Waqf?</h1>
            <div className="w-full text-center md:text-left flex flex-col items-center md:items-start gap-1 md:gap-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-Tertiary">{waqf.waqfName}</h2>
              <p className="text-sm sm:text-base md:text-lg text-Tertiary mt-2">{waqf.description || 'No description available.'}</p>
              <p className='text-base sm:text-lg md:text-xl font-semibold text-Tertiary mt-2'>Total Raised: RM {waqf.totalRaised.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              
              <div className='mt-4 md:mt-6 text-sm sm:text-base text-Tertiary flex flex-col gap-1'>
                  <p><strong>Phone:</strong> {waqf.waqfPhoneNumber || 'N/A'}</p>
                  <p><strong>Address:</strong> {waqf.waqfAddress || 'N/A'}</p>
                  <p><strong>Cause(s):</strong> {causesString}</p>
              </div>
            </div>
             {/* Responsive Button */}
            <div className="mt-6 md:mt-8 w-full flex justify-center md:justify-start">
              <button 
                onClick={handleSubmit} 
                className="btn btn-lg bg-Tertiary text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Select & Finalize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaqfDetail;
