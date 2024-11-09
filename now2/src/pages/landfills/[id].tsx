// pages/landfills/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png"
import Image from 'next/image';
//import React, { useState } from 'react';
//import { useRouter } from 'next/navigation'
import Header from '@/app/components/header';

// Dummy data for landfills (In a real application, you would fetch this from an API)
const landfillData = [
  {
    id: '1',
    name: 'Landfill no. 1',
    phoneNumber: '036277-6611',
    address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
    description: 'Description for Landfill no. 1',
    imageUri: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    name: 'Landfill no. 2',
    phoneNumber: '036277-6622',
    address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
    description: 'Description for Landfill no. 2',
    imageUri: 'https://example.com/image2.jpg',
  },
  // Add more landfills as needed
];

const LandfillDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL

  // Find the landfill data by ID
  const landfill = landfillData.find((lf) => lf.id === id);

  if (!landfill) {
    return <div>Loading...</div>; // Handle loading state or not found
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
                width={100}/>
                
            </div>
            
        </div>
    
    </div>
    
    {/*The one below this is for the contents of the body (Cream Box)*/}
    <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
        <h1 className="text-Tertiary font-extrabold text-xl mb-4">Pick a Landfill</h1>
            <div className="overflow-auto max-h-[80vh] w-full px-4">
            <div className="p-4">
      <h1 className="text-3xl font-bold">{landfill.name}</h1>
      <img src={landfill.imageUri} alt={landfill.name} className="w-full h-auto" />
      <p className="mt-4">{landfill.description}</p>
      <p className="mt-2"><strong>Phone:</strong> {landfill.phoneNumber}</p>
      <p className="mt-2"><strong>Address:</strong> {landfill.address}</p>
    </div>
            </div>
    </div>
    </div>

    
  );
};

export default LandfillDetail;