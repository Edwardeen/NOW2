// pages/index.tsx
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
import React, { useEffect, useState } from 'react';

interface LandfillArea {
  id: number;
  location: string;
}

export default function Page() {
  const router = useRouter();
  const [landfillAreas, setLandfillAreas] = useState<LandfillArea[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandfillAreas = async () => {
      try {
        const response = await fetch('/api/landfillAreas');
        if (!response.ok) {
          throw new Error('Failed to fetch landfill areas');
        }
        const data = await response.json();
        setLandfillAreas(data);
      } catch (error: any) {
        console.error('Error fetching landfill areas:', error);
        setError(error.message);
      }
    };

    fetchLandfillAreas();
  }, []);

  const handleAreaSelection = (location: string) => {
    router.push(`/landfills/chooseLandfill?location=${location}`);
     // Redirect to the landfills page with the selected area ID
  };

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <Header />
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <Image src={LogoIMG} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>
      
      <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between'>
        <span className='text-Tertiary font-extrabold text-2xl'>Choose Your Landfill Area</span>
        <div className='flex flex-row mx-auto gap-20 my-auto'>
          {landfillAreas.map(area => (
            <div 
              key={area.id} 
              className='btn btn-ghost bg-Green w-80 h-80 rounded-2xl flex items-center justify-center cursor-pointer' 
              onClick={() => handleAreaSelection(area.location)}
            >
              
              <span className='text-Tertiary font-extrabold text-2xl'>{area.location}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}