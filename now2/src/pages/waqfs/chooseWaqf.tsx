"use client";
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Waqf from '@/app/components/waqfCard'; // Import the Waqf component
import Header from '@/app/components/header';
import Image from 'next/image'; // Import Image

const ChooseWaqf: React.FC = () => {
  const router = useRouter();
  const { landfillId } = router.query; // Get landfillId 

  // Validate landfillId - must be a non-empty string
  const isValidLandfillId = typeof landfillId === 'string' && landfillId.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-Green">
       {/* Responsive Header */}
       <div className='px-4 sm:px-6 lg:px-8 xl:px-12'> 
         <div className='flex flex-row justify-between items-center py-2'>
           <Header />
           <div className='flex flex-row gap-2 items-center'>
             <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>NOW²</span>
             <Image 
               src={LogoIMG} 
               alt="Logo" 
               height={80} width={80}
               className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" 
             />
           </div>
         </div>
       </div>

      {/* Responsive Content Container */}
      <div id="CreamContainer" className='flex flex-col flex-grow mx-auto w-full max-w-7xl mb-12 mt-4 md:mt-6 items-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl'>
        <div id="pickAWaqf" className='w-full text-center mb-4 md:mb-6'>
           {/* Responsive Title */}
          <h1 className="text-Tertiary font-extrabold text-xl sm:text-2xl md:text-3xl">Pick your Waqf</h1>
        </div>

        <div className="w-full flex-grow flex flex-col items-center">
          {/* Conditionally render Waqf component or error/message */}
          {router.isReady ? ( // Check if router query params are ready
             isValidLandfillId ? (
               // Render Waqf component only if ID is valid
               <Waqf landfillId={landfillId} /> 
             ) : (
               // Show message if landfillId is missing or invalid
               <div className="text-center text-red-500 p-6">
                 Missing or invalid Landfill ID in the URL.
               </div>
             )
           ) : (
             // Optional: Show a simple loading text while router is initializing
             <div className="text-center text-gray-500 p-6">Loading...</div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ChooseWaqf;
