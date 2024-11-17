// pages/landfills-chooseLandfil.tsx
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Landfills from '@/app/components/landfillCard'; // Adjust the import path if necessary
import Header from '@/app/components/header';

interface Landfills{
  id: string; // or number, depending on your database schema
  imageUri: string;
  landfillName: string;
  landfillPhoneNumber: string;
  landfillAddress: string;
}

const ChooseLandfill: React.FC = () => {
  const router = useRouter();
  const { location } = router.query; // Get the location from the query parameters
  const [landfills, setLandfills] = useState<Landfills[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log('Location:', location);

  useEffect(() => {
    const fetchLandfills = async () => {
      if (!location) return; // Ensure location is available

      try {
        const response = await fetch(`/api/landfills?location=${location}`);
        console.log('Response:', response); // Log the response
        if (!response.ok) {
          throw new Error('Failed to fetch landfills');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        setLandfills(data);
      } catch (error: any) {
        console.error('Error fetching landfills:', error);
        setError('Could not load landfills. Please try again later.');
      }
    };

    fetchLandfills();
  }, [location]);

  return (
    <div className="flex flex-col justify-center h-screen bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <Header />
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <img src={LogoIMG.src} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>
      
      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
        <div id="pickALandfil" className='flex flex-row justify-between w-full'>
          <h1 className="text-Tertiary font-extrabold text-xl mb-4">Pick a Landfill</h1>
          <h1 className="text-Tertiary font-extrabold text-xl mb-4 ml-auto">📍 Chosen Location: {location}</h1>
        </div>
        
        <div className="flex flex-col overflow-auto h-dvh w-full px-4 items-center mt-10">
          <div className="flex flex-row gap-20 items-start">
            {error ? (
              <div className="text-red-500">{error}</div>
            ) : (
              landfills.map((Landfill) => (
                <Landfills key={Landfill.id}
                  id={Landfill.id}
                  imageUri={Landfill.imageUri}
                  name={Landfill.landfillName}
                  phoneNumber={Landfill.landfillPhoneNumber}
                  address={Landfill.landfillAddress} // Corrected this line
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLandfill;