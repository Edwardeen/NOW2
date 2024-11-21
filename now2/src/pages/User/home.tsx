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


interface HomeProps {
  userId: string | null;
  userType: string | null;
  userName: string | null;
  frontName: string | null;
}

export default function Home({ userId, userType, userName, frontName }: HomeProps) {
  // print all of the user's data from the session
  console.log(userId, userType, userName, frontName);   
  const router = useRouter();
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [historyItems, setHistoryItems] = useState<any[]>([]); // State for history data
  console.log(userId, userType, userName, frontName);
  // Fetch total donations
  useEffect(() => {
    const fetchTotalDonations = async () => {
      try {
        const response = await fetch('/api/waqfs/totalDonations');
        if (!response.ok) {
          throw new Error('Failed to fetch total donations');
        }
        const data = await response.json();
        setTotalDonations(data.totalRaised);
      } catch (error) {
        console.error('Error fetching total donations:', error);
      }
    };

    fetchTotalDonations();
  }, []);

  // Fetch history data
  useEffect(() => {
    const fetchHistory = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch history');
        }
        const data = await response.json();
        setHistoryItems(data); // Update history items state
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchHistory();
  }, [userId]);


  if (!userId) {
    return <Login />;
  }

  return (
    
    <div className="flex flex-col justify-center h-max bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <Header />
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <Image src={LogoIMG} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto w-11/12 h-max mb-20 items-start gap-10 px-[83px] py-[42px] relative bg-Cream rounded-[20px]'>
        <div className='flex flex-col gap-5 items-center mx-auto'>
          <span className='text-Tertiary font-bold'>Welcome {userName}!</span>
          <div className="flex flex-col gap-2 items-center">
            <span className='text-Tertiary font-black'>Total Donations:</span>
            <span className="text-Primary font-black text-6xl"> RM {totalDonations.toFixed(2)}</span>
          </div>
          <Graphcard />
        </div>

        <div className='flex flex-row gap-10 w-full items-center mx-auto'>
          <div className='bg-Green w-4/5 h-60 rounded-2xl'>
            <div className='flex flex-row h-full'>
              <div id="Image Picture" className='container w-1/4 h-full bg-Primary rounded-l-2xl'></div>
              <div className='flex flex-col gap-5 items-start m-8 ml-10 w-3/4'>
                <span className='text-Tertiary font-bold text-4xl'>Start Donating your Trashes Now.</span>
                <span className='text-Tertiary font-normal text-xl w-3/4'>
                  The more you donate trashes, the more money you can donate. From a simple household trash, converted into money to be sent to Waqf houses and used for numerous causes that will help everyone, from any kind, any age, and anyone.
                </span>
              </div>
            </div>
          </div>

          <div
            className='btn btn-ghost bg-Green text-Tertiary font-extrabold w-1/5 rounded-2xl h-full flex flex-col py-20'
            onClick={() => router.push('../landfills/chooseArea')}
          >
            <img
              src="https://img.icons8.com/?size=100&id=60996&format=png&color=000000"
              alt='leaf'
              width={40}
              height={40}
            />
            <span className='mx-auto'>Find Landfills near you!</span>
          </div>
        </div>

        <span className='text-Tertiary font-extrabold text-2xl mx-auto'>Check Your Transaction:</span>
        <div className='flex flex-col gap-4'>
          <Transactions userId={userId} userType={userType} />
        </div>

        <span className='text-Tertiary font-extrabold text-2xl mx-auto'>History:</span>
        <div className='flex flex-col mx-auto w-full h-5/6 items-start relative bg-Cream rounded-[20px] overflow-hidden'>
          <div className='flex flex-col gap-4 h-full overflow-y-auto'>
            <History userId={userId} userType={userType} /> {/* Pass history items to History component */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch user session on the server side
export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  const userId = session?.user?.id || null;
  const userType = session?.user?.type || null;
  const frontName = session?.user?.frontName || null;
  const userName = session?.user?.userName || null; // Ensure you access userName here

  return {
    props: {
      userId,
      userType,
      frontName,
      userName, // Pass userName to the page
    },
  };
}