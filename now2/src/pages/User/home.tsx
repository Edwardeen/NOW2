// app/page.tsx
import { getSession, GetSessionParams } from "next-auth/react";
import Login from "@/pages/login";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
import Transactions from '@/app/components/transactionCard';
import History from '@/app/components/historyCard';
import { useEffect, useState } from 'react';
import { Graphcard } from "@/app/components/carbon_and_donation_chart";
import axios from "axios";

// Skeleton Loader Component (Simple Example)
const SkeletonLoader = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
);

interface HomeProps {
  userId: string | null;
  userType: string | null;
  userName: string | null;
  frontName: string | null;
}

export default function Home({ userId, userType, userName, frontName }: HomeProps) {
  const router = useRouter();
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [isLoadingDonations, setIsLoadingDonations] = useState(true);
  const [donationError, setDonationError] = useState<string | null>(null);

  const [totalScreened, setTotalScreened] = useState<number>(0);
  const [isLoadingScreened, setIsLoadingScreened] = useState(true);
  const [screenedError, setScreenedError] = useState<string | null>(null);

  const [historyItems, setHistoryItems] = useState<any[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [historyError, setHistoryError] = useState<string | null>(null);

  const getPercent = (totalScreened: number) => {
    const target = userType === 'user' ? 45 : 900; // Corrected user target
    const percentage = (totalScreened / target) * 100;
    return Math.min(Math.max(percentage, 0), 100); // Clamp between 0 and 100
  }

  const getProgressColor = (progress: number) => {
    if (progress < 33) {
      return 'bg-red-500'; // Use actual color name if defined in tailwind config, else standard Tailwind color
    } else if (progress < 67) {
      return 'bg-orange-500'; // Use actual color name if defined in tailwind config
    } else {
      return 'bg-Primary'; // Assuming Primary is defined in tailwind config
    }
  }

  // Fetch total donations
  useEffect(() => {
    const fetchTotalDonations = async () => {
      setIsLoadingDonations(true);
      setDonationError(null);
      try {
        const response = await fetch('/api/global-total-donations');
        if (!response.ok) {
          throw new Error('Failed to fetch global total donations');
        }
        const data = await response.json();
        setTotalDonations(data.totalDonations || 0);
      } catch (error: any) {
        console.error('Error fetching global total donations:', error);
        setDonationError(error.message || 'Could not load donations.');
      } finally {
        setIsLoadingDonations(false);
      }
    };
    fetchTotalDonations();
  }, []);

  // Fetch total screened (User or Entity Specific)
  useEffect(() => {
    const fetchTotalScreened = async () => {
      if (!userId || !userType) {
        setIsLoadingScreened(false);
        return;
      }
      setIsLoadingScreened(true);
      setScreenedError(null);
      try {
        let url = '';
        if (userType === 'user') {
          url = `/api/user/${userId}/screened-total`;
        } else if (userType === 'entity') {
          url = `/api/entity/${userId}/screened-total`;
        } else {
          setIsLoadingScreened(false);
          setScreenedError('Invalid user type.');
          return;
        }
        const response = await axios.get(url);
        setTotalScreened(response.data.totalScreened || 0);
      } catch (error: any) {
        console.error('Error fetching screened total:', error);
        setScreenedError(error.message || 'Could not load progress.');
      } finally {
        setIsLoadingScreened(false);
      }
    }
    fetchTotalScreened();
  }, [userId, userType]);

  // Fetch history data
  useEffect(() => {
    const fetchHistory = async () => {
      if (!userId) {
        setIsLoadingHistory(false);
        return; // No user ID, nothing to fetch
      }
      setIsLoadingHistory(true);
      setHistoryError(null);
      try {
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({})); // Try to parse error, default to empty object
          throw new Error(errorData.error || 'Failed to fetch history');
        }
        const data = await response.json();
        setHistoryItems(data || []); // Update history items state, default to empty array
      } catch (error: any) {
        console.error('Error fetching history:', error);
        setHistoryError(error.message || 'Could not load history.');
      } finally {
        setIsLoadingHistory(false);
      }
    };

    fetchHistory();
  }, [userId]);


  if (!userId) {
    // If no userId, redirect to login or show login component
    // Ensure Login component doesn't trigger loops if session isn't immediately available
    return <Login />;
  }

  const currentProgressPercent = getPercent(totalScreened);
  const progressColorClass = getProgressColor(currentProgressPercent);

  return (
    <div className="flex flex-col justify-center min-h-screen bg-Green">
       {/* Responsive Header Area */}
      <div className='px-4 sm:px-6 lg:px-8 xl:px-12'>
        <div className='flex flex-row justify-between items-center py-2'>
          <Header />
          <div className='flex flex-row gap-2 items-center'>
             {/* Responsive Logo/Text */}
            <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>WBC</span>
            <Image src={LogoIMG} alt="Logo" height={80} width={80} className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" />
          </div>
        </div>
      </div>

      {/* Responsive Main Content Card */}
      <div className='flex flex-col mx-auto w-full max-w-7xl h-max mb-12 md:mb-20 items-start gap-8 md:gap-10 px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>

        {/* Welcome and Stats Section */}
        <div className='flex flex-col gap-6 md:gap-8 items-center w-full'>
          {/* Responsive Welcome Text - Conditional Name */}
          <span className='text-Tertiary font-bold text-xl sm:text-2xl md:text-3xl'>
             Welcome {userType === 'user' ? (frontName || 'User') : (userName || 'Organization')}!
          </span>
          
          {/* Total Donations - Updated Label */}
          <div className="flex flex-col gap-1 items-center">
            <span className='text-Tertiary font-black text-base sm:text-lg'>Global Total Donations:</span>
            {isLoadingDonations ? (
                <SkeletonLoader className="h-12 w-48" />
            ) : donationError ? (
                <span className="text-red-500 text-sm">{donationError}</span>
            ) : (
                <span className="text-Primary font-black text-4xl sm:text-5xl md:text-6xl"> RM {totalDonations.toFixed(2)}</span>
            )}
          </div>
          
          {/* Progress Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full">
            {/* Pass userId and userType props to Graphcard */}
            <Graphcard /> 
            
             {/* Progress Stats Card */}
            <div className="flex flex-col items-center justify-center bg-Tertiary p-4 sm:p-6 rounded-lg">
              {isLoadingScreened ? (
                <>
                    <SkeletonLoader className="h-8 w-3/4 mb-4" />
                    <SkeletonLoader className="h-8 w-1/2 mb-6" />
                    <SkeletonLoader className="h-6 w-[80%]" />
                </>
              ) : screenedError ? (
                <span className="text-red-100 text-center">{screenedError}</span>
              ) : (
                <>
                  <h1 className="text-Green font-bold text-lg sm:text-xl md:text-2xl text-center mb-2">
                    Your Progress : {totalScreened.toFixed(1)} / {userType === 'user' ? 45 : 900} Kg
                  </h1>
                  <h1 className="text-Green font-bold text-lg sm:text-xl md:text-2xl text-center mb-4">
                    Percentage: {Math.floor(currentProgressPercent)}%
                  </h1>
                  <div className="w-[80%] h-6 bg-gray-200 rounded-full overflow-hidden"> {/* Changed background */}
                    <div
                      className={`h-6 rounded-full transition-all duration-500 ease-out ${progressColorClass}`}
                      style={{ width: `${currentProgressPercent}%` }}
                    ></div>
                  </div>
                  <div className="mt-8 text-center text-Cream/50 text-xs sm:text-sm">The formula to count<p className="font-extrabold">Emissions (kg CO₂)</p> = Activity Data × Emission Factor</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className='flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-center'>
           {/* Text Block */}
          <div className='bg-Green w-full lg:w-3/4 rounded-lg md:rounded-xl overflow-hidden'>
            <div className='flex flex-col sm:flex-row h-full'>
              {/* Image Placeholder - Consider using an actual Image component or background image */}
              <div id="Image Picture" className='hidden sm:block w-full sm:w-1/4 h-32 sm:h-auto bg-Primary'></div> 
              <div className='flex flex-col gap-3 sm:gap-4 items-start p-4 sm:p-6 md:p-8 w-full sm:w-3/4'>
                 {/* Responsive Text */}
                <span className='text-Tertiary font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Start Donating your Trashes Now.</span>
                <span className='text-Tertiary font-normal text-sm sm:text-base md:text-lg w-full text-ellipsis overflow-hidden'>
                  The more you donate trashes, the more money you can donate. From a simple household trash, converted into money to be sent to Waqf houses and used for numerous causes that will help everyone.
                </span>
              </div>
            </div>
          </div>

          {/* Button Block */}
          <div
            className='btn btn-ghost bg-Green text-Tertiary font-extrabold w-full lg:w-1/4 rounded-lg md:rounded-xl h-auto p-6 sm:p-8 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-4 text-center cursor-pointer hover:bg-opacity-90 transition-colors'
            onClick={() => router.push('../landfills/chooseArea')}
          >
            <img
              src="https://img.icons8.com/?size=100&id=60996&format=png&color=000000"
              alt='leaf'
              className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' // Responsive icon size
            />
             {/* Responsive Text */}
            <span className='text-sm sm:text-base md:text-lg'>Find Landfills near you!</span>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="w-full flex flex-col gap-3">
          <span className='text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl text-center md:text-left'>Check Your Transaction:</span>
          {isLoadingHistory ? ( // Assuming transactions might be part of history fetch or need their own
             <SkeletonLoader className="h-20 w-full" />
          ) : historyError ? ( 
             <p className="text-red-500 text-center">Error loading transactions.</p>
          ) : (
            <div className='flex flex-col gap-4'>
               {/* Pass loading/error state if Transactions component needs it */}
              <Transactions userId={userId} userType={userType} /> 
            </div>
          )}
        </div>

        {/* History Section */}
        <div className="w-full flex flex-col gap-3">
          <span className='text-Tertiary font-extrabold text-lg sm:text-xl md:text-2xl text-center md:text-left'>History:</span>
          {isLoadingHistory ? (
            <>
                <SkeletonLoader className="h-16 w-full mb-2" />
                <SkeletonLoader className="h-16 w-full" />
            </>
          ) : historyError ? (
             <p className="text-red-500 text-center">{historyError}</p>
          ) : (
            historyItems.length === 0 && !isLoadingHistory ? (
                <p className="text-gray-500 text-center w-full bg-Cream p-6 rounded-lg">No history found.</p>
            ) : (
                <History userId={userId} userType={userType} /> 
            )
           )}
        </div>
      </div>
    </div>
  );
}

// Fetch user session on the server side
export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  // If no session, redirect to login
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const userId = session?.user?.id || null;
  const userType = session?.user?.type || null;
  const frontName = session?.user?.frontName || null;
  const userName = session?.user?.userName || null;

  // Basic check: If essential data like userId is missing, treat as unauthenticated
  if (!userId) {
     return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userId,
      userType,
      frontName,
      userName,
    },
  };
}