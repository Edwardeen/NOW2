"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Waqf from '@/app/components/waqfCard'; // Import the Waqf component
import Header from '@/app/components/header';

const ChooseWaqf: React.FC = () => {
  const router = useRouter();
  const { landfillId, city } = router.query; // Get the landfillId and city from the query parameters

  const [waqfId, setWaqfId] = useState<string>('');

  // State to hold the current landfillId if it's passed as a query parameter
  const [currentLandfillId, setCurrentLandfillId] = useState<string | null>(null);

  // When the router query changes, update the landfillId state
  useEffect(() => {
    if (landfillId) {
      setCurrentLandfillId(landfillId as string); // Cast to string
    }
  }, [landfillId]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWaqfId(event.target.value);
  };

  const handleSubmit = () => {
    // Save the current waqfId to session storage
    if (waqfId) {
      const existingIds = sessionStorage.getItem('waqfIds');
      const updatedIds = existingIds ? `${existingIds},${waqfId}` : waqfId;
      sessionStorage.setItem('waqfIds', updatedIds);
      setWaqfId(''); // Clear the input after submission
    }
  };

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
        <div id="pickAWaqf" className='flex flex-row justify-between w-full'>
          <h1 className="text-Tertiary font-extrabold text-3xl mb-10 mx-auto">Pick your Waqf</h1>
        </div>

        <div className="overflow-auto h-dvh w-full px-4">
          <div className="flex flex-col gap-4 items-center w-full">
            <Waqf  landfillId={currentLandfillId ?? ''} />
            {currentLandfillId && (
              <p className="text-Tertiary font-bold">Landfill ID: {currentLandfillId}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseWaqf;
