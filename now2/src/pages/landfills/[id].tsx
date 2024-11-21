// pages/landfills/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

const LandfillDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL
  const [landfill, setLandfill] = useState<any>(null); // Use a more specific type if possible
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandfill = async () => {
      if (!id) return; // Ensure ID is available

      try {
        const response = await fetch(`/api/landfills/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch landfill');
        }
        const data = await response.json();
        setLandfill(data);
      } catch (error: any) {
        console.error('Error fetching landfill:', error);
        setError('Could not load landfill details. Please try again later.');
      }
    };

    fetchLandfill();
  }, [id]);

  const handleSubmit = () => {
    if (landfill) {
      // Store landfill ID in local storage and navigate to the next page
      router.push({ pathname: '/waqfs/chooseWaqf',
        query: { landfillId: landfill.id },
      });
    } else {
      alert('Landfill not found.'); // Optional: Alert the user if landfill is not found
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>; // Handle error state
  }

  if (!landfill) {
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

      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] relative bg-Cream justify-between overflow-auto'>
        <div className='flex mx-auto my-auto w-11/12 h-5/6 gap-2.5 relative bg-Cream  overflow-auto'>
          {/* Left side for Google Map */}
          <div className='w-1/3 h-full mr-20 my-auto'>
            <div id="map" className='w-full h-full'>
            <iframe 
                src={landfill.imageUri} 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-full rounded-2xl'
              />
            </div>
          </div>

          {/* Right side for Landfill Details */}
          <div className='flex flex-col w-2/3 h-full px-4'>
            <h1 className="text-Tertiary font-extrabold text-xl mb-4 mx-auto">Pick this landfill?</h1>
            <div className="overflow-auto max-h-[80vh] w-full h-full text-center justify-center items-center my-auto">
              <div className="p-4 my-auto">
                <h1 className="text-5xl font-bold text-Tertiary py-10">{landfill.landfillName}</h1>
                <p className="mt-2 text-Tertiary"><strong>Phone:</strong> {landfill.landfillPhoneNumber}</p>
                <p className="mt-2 text-Tertiary"><strong>Address:</strong> {landfill.landfillAddress}</p>
                
              </div>
            </div>
            {/* Submission Button */}
            <div className="mt-4">
              <button 
                onClick={handleSubmit} 
                className="bg-Tertiary text-white font-bold py-2 px-4 rounded"
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

export default LandfillDetail;