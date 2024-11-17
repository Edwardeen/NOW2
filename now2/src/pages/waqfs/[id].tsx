// pages/waqfs/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

interface Waqf {
  id: number;
  waqfName: string;
  waqfPhoneNumber: string;
  waqfAddress: string;
  description?: string; // Add description if available
  imageUrl: string;
  totalRaised: number;
  CauseOnWaqf: {
    waqfCause: {
      waqfCause: string; // Assuming this is the field name in WaqfCause
    };
  }[];
}

const WaqfDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL
  const [waqf, setWaqf] = useState<Waqf | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWaqf = async () => {
      if (!id) return; // Ensure ID is available

      try {
        const response = await fetch(`/api/waqfs/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch waqf');
        }
        const data = await response.json();
        setWaqf(data);
      } catch (error: any) {
        console.error('Error fetching waqf:', error);
        setError(error.message);
      }
    };

    fetchWaqf();
  }, [id]);

  const handleSubmit = () => {
    if (waqf) {
      localStorage.setItem('waqfId', waqf.id.toString());
      router.push(`../finalize/checkTransaction`); // Change this to the desired route
    } else {
      alert('Waqf not found.'); // Optional: Alert the user if waqf is not found
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  if (!waqf) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <Header />
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <Image
              src={LogoIMG}
              alt="Logo"
              height={100}
              width={100} />
          </div>
        </div>
      </div>

      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
        <div className='flex mx-auto w-11/12 h-5/6 items-center gap-2.5 relative bg-Cream overflow-auto my-auto'>
          <div className='w-1/3 h-full'>
            <img 
              src={waqf.imageUrl} 
              alt="Description of the image" 
              className='w-full h-full object-cover  rounded-2xl' 
            />
          </div>

          <div className='flex flex-col w-2/3 h-full px-4'>
            <h1 className="text-Tertiary font-extrabold text-xl mb-4 mx-auto">Pick this waqf?</h1>
            <div className="overflow-auto w-full">
              <div className="p-4">
                <h1 className="text-6xl font-bold text-Tertiary mx-auto">{waqf.waqfName}</h1>
                <p className="mt-4 text-xl text-Tertiary">{waqf.description}</p>
                <h1 className='mt-4 text-xl font-extrabold text-Tertiary'>Total Raised in Ringgit: {waqf.totalRaised}</h1>
                <div className='mt-20'>
                <p className="mt-2 text-xl text-Tertiary"><strong>Phone:</strong> {waqf.waqfPhoneNumber}</p>
                <p className="mt-2 text-xl text-Tertiary"><strong>Address:</strong> {waqf.waqfAddress}</p>
                <p className="mt-2 text-xl text-Tertiary"><strong>Cause:</strong> {waqf.CauseOnWaqf.map(cause => cause.waqfCause.waqfCause).join(', ')}</p> {/* Display causes */}
              
                </div>
              </div>
            </div>
            <div className="my-auto mx-auto">
              <button 
                onClick={handleSubmit} 
                className="bg-Tertiary text-white font-bold py-6 px-14 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaqfDetail;