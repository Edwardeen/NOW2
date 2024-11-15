// pages/landfills-chooseLandfil.tsx
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png"
import React from 'react';
import { useRouter } from 'next/router';
import Landfills from '@/app/components/landfillCard';
import Header from '@/app/components/header';

const ChooseLandfill: React.FC = () => {
  const router = useRouter();
  const { city } = router.query; // Get the city from the query parameters

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
      
      {/* Cream Container with overflow control */}
      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
      <div id="pickALandfil" className='flex flex-row justify-between w-full'>
          <h1 className="text-Tertiary font-extrabold text-xl mb-4">Pick a Landfill</h1>
          <h1 className="text-Tertiary font-extrabold text-xl mb-4 ml-auto">📍 Chosen City: {city}</h1>
        </div>
        
        <div className="overflow-auto h-dvh w-full px-4">
          <div className="flex flex-col gap-4 items-start"> {/* Adjusted to justify from the start */}
            <Landfills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLandfill;