// pages/transaction/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

interface Waqf {
  imageUrl: string;
  id: string;
  waqfName: string;
  phoneNumber: string; // Add phone number
  cause: string; // Add cause
}

interface Screener {
  id: number;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

interface Transformer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Transaction {
  id: string;
  WaqfID: string;
  imageUrl: string;
  transactionDate: string;
  transactionAmount: number;
  transactionDeposited: boolean;
  transactionScreened: boolean;
  transactionTransformed: boolean;
  transactionTransfered: boolean;
  transactionStatus?: string;
  totalScreened?: number;
  screenerID?: number;
  transformerID?: number;
  transactionDescription?: string;
  screener?: Screener;
  transformer?: Transformer;
}

// Skeleton Loader Component (Can be moved to a shared file)
const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
);

// Specific Skeleton for this page
const TransactionDetailSkeleton: React.FC = () => (
  <div className="flex flex-col justify-center min-h-screen bg-Green">
    {/* Skeleton Header */}
    <div className='px-4 sm:px-6 lg:px-8 xl:px-12'>
      <div className='flex flex-row justify-between items-center py-2'>
        <SkeletonLoader className="h-12 w-48" /> {/* Approx Header size */}
        <div className='flex flex-row gap-2 items-center'>
          <SkeletonLoader className="h-12 w-12 rounded-full" /> {/* Approx Logo size */} 
        </div>
      </div>
    </div>
    {/* Skeleton Content Area */}
    <div className='flex flex-col mx-auto w-full max-w-7xl h-max mb-12 md:mb-20 items-start gap-8 md:gap-10 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
      <SkeletonLoader className="h-8 w-1/3 self-center mb-4" /> {/* Title */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full">
        <div className="w-full md:w-1/3">
          <SkeletonLoader className="aspect-square w-full rounded-lg md:rounded-xl" /> {/* Image Placeholder */}
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <SkeletonLoader className="h-10 w-3/4" /> {/* Waqf Name */}
          <SkeletonLoader className="h-6 w-1/2" /> {/* Transaction ID */}
          <SkeletonLoader className="h-8 w-1/3" /> {/* Status */}
          <div className="mt-8 flex flex-col gap-3">
             <SkeletonLoader className="h-5 w-full" /> {/* Detail line 1 */}
             <SkeletonLoader className="h-5 w-5/6" /> {/* Detail line 2 */}
             <SkeletonLoader className="h-5 w-3/4" /> {/* Detail line 3 */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TransactionDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [waqf, setWaqf] = useState<Waqf | null>(null);
  const [screener, setScreener] = useState<Screener | null>(null);
  const [transformer, setTransformer] = useState<Transformer | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchTransaction = async () => {
      if (!id) {
         setLoading(false); // Stop loading if no id
         setError("Transaction ID not found.");
         return; 
      }
      setLoading(true); // Start loading
      setError(null);
      setTransaction(null); // Clear previous data
      setWaqf(null);
      setScreener(null);
      setTransformer(null);

      try {
        // Fetch transaction details
        const response = await fetch(`/api/transactions/details/${id}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch transaction details');
        }
        const transactionData = await response.json();

        // Fetch related data sequentially (Not optimal, recommend backend join)
        let fetchedWaqf = null;
        if (transactionData.WaqfID) {
           try {
             const waqfResponse = await fetch(`/api/waqfs/${transactionData.WaqfID}`);
             if (waqfResponse.ok) fetchedWaqf = await waqfResponse.json();
             else console.error('Failed to fetch waqf');
           } catch (err) { console.error('Error fetching waqf:', err); }
        }

        let fetchedScreener = null;
        if (transactionData.screenerID) {
           try {
             const screenerResponse = await fetch(`/api/screeners/${transactionData.screenerID}`);
             if (screenerResponse.ok) fetchedScreener = await screenerResponse.json();
             else console.error('Failed to fetch screener');
           } catch (err) { console.error('Error fetching screener:', err); }
        }
        
        let fetchedTransformer = null;
        if (transactionData.transformerID) {
           try {
             const transformerResponse = await fetch(`/api/transformers/${transactionData.transformerID}`);
             if (transformerResponse.ok) fetchedTransformer = await transformerResponse.json();
             else console.error('Failed to fetch transformer');
           } catch (err) { console.error('Error fetching transformer:', err); }
        }
        
        // Determine status (Duplicated logic - recommend moving to backend/util)
        const status = determineTransactionStatus(transactionData);

        // Update state once after all fetches attempt
        setTransaction({ ...transactionData, transactionStatus: status });
        setWaqf(fetchedWaqf);
        setScreener(fetchedScreener);
        setTransformer(fetchedTransformer);

      } catch (error: any) {
        console.error('Error fetching transaction:', error);
        setError(error.message || 'Could not load transaction. Please try again later.');
      } finally {
        setLoading(false); 
      }
    };

    fetchTransaction();
  }, [id]);

  const determineTransactionStatus = (transaction: Transaction) => {
    let transactionStatus = '';
    if (transaction.transactionDeposited) {
      transactionStatus = 'Awaiting Screening';
      if (transaction.transactionScreened) {
        transactionStatus = `Screened for ${transaction.totalScreened}, awaiting Transformer`;
        if (transaction.transactionTransformed) {
          transactionStatus = 'Awaiting Transfer';
          if (transaction.transactionTransfered) {
            transactionStatus = 'Transferred';
          }
        }
      }
    } else {
      transactionStatus = 'Awaiting Deposit';
    }
    return transactionStatus;
  };

  // Use Skeleton Loader when loading
  if (loading) {
    return <TransactionDetailSkeleton />;
  }

  if (error) {
    // Improve error display 
    return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Error Loading Transaction</h2>
            <p className="text-gray-700">{error}</p>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
         </div>
       </div>
     );
  }

  if (!transaction) {
    // Improve not found display
     return (
       <div className="flex items-center justify-center min-h-screen bg-Green">
         <div className="bg-Cream p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Transaction Not Found</h2>
            <button onClick={() => router.back()} className="mt-6 px-4 py-2 bg-Primary text-white rounded hover:bg-opacity-90">
               Go Back
            </button>
         </div>
       </div>
     );
  }

  // --- Render actual content --- 
  return (
    <div className="flex flex-col min-h-screen bg-Green"> {/* Use min-h-screen */} 
      {/* Responsive Header Area */}
      <div className='px-4 sm:px-6 lg:px-8 xl:px-12'> 
        <div className='flex flex-row justify-between items-center py-2'>
          <Header />
          <div className='flex flex-row gap-2 items-center'>
             {/* Responsive Logo/Text */}
            <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>WBC</span>
            <Image 
              src={LogoIMG} 
              alt="Logo" 
              height={80} width={80} // Keep fixed size or make responsive via className
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" 
            />
          </div>
        </div>
      </div>

      {/* Responsive Content Area */} 
      <div id="CreamContainer" className='flex flex-col flex-grow mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-4 md:gap-6 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
         {/* Removed extra nested divs */} 
         <h1 className="text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl mb-4 text-center">Transaction Details</h1>
         <div className="w-full overflow-auto"> {/* Allow inner scroll if needed, but main container is flex-grow */} 
           {/* Responsive Layout: flex-col md:flex-row */} 
           <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 p-2 md:p-4 w-full'>
             {/* Image Column */} 
             <div className='w-full md:w-1/3 flex-shrink-0'>
                {waqf?.imageUrl ? (
                   <Image
                     height={400} // Example size constraint 
                     width={400}  // Example size constraint
                     className='object-cover rounded-lg md:rounded-xl w-full h-auto aspect-square' // Maintain aspect ratio
                     src={waqf.imageUrl}
                     alt={waqf.waqfName || 'Waqf Image'} />
                 ) : (
                   <div className="w-full aspect-square bg-gray-200 rounded-lg md:rounded-xl flex items-center justify-center">
                     <span className="text-gray-500">No Image</span>
                   </div>
                 )}
              </div>
              {/* Details Column */} 
              <div className="w-full md:w-2/3 flex flex-col"> {/* Ensure it takes remaining space */} 
                 {/* Responsive Text Sizes */} 
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-Tertiary mb-2 md:mb-4"><strong> {waqf ? waqf.waqfName : 'Waqf Details Unavailable'} </strong></h1>
                 <p className="text-sm sm:text-base text-Tertiary mb-1">
                   Transaction ID: {transaction.id}
                 </p>
                 <p className="text-lg sm:text-xl md:text-2xl text-Tertiary font-semibold mb-4 md:mb-6"><strong>Status:</strong> {transaction.transactionStatus}</p>
                 
                 <div className='flex flex-col text-sm sm:text-base md:text-lg gap-2 md:gap-3 text-Tertiary mt-4 md:mt-8'> {/* Adjusted spacing/size */} 
                   <p><strong>Details:</strong> {transaction.transactionDescription || 'N/A'}</p>
                   <p><strong>Transaction Date:</strong> {new Date(transaction.transactionDate).toLocaleDateString()}</p>
                   <p><strong>Transaction Amount:</strong> RM {transaction.transactionAmount.toFixed(2)}</p>
                   {screener && (
                      <p><strong>Screener:</strong> {screener.name || screener.email || `ID: ${screener.id}`}</p>
                   )}
                   {transformer && (
                      <p><strong>Transformer:</strong> {transformer.name || transformer.email || `ID: ${transformer.id}`}</p>
                   )}
                 </div>
               </div>
             </div>
           </div>
      </div>
    </div>
  );
};

export default TransactionDetail;