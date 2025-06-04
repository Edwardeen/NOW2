import 'tailwindcss/tailwind.css';
import LogoIMG from "@/public/logo.png"
import Image from 'next/image';
//import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Header from '@/app/components/header';


const TransactionSuccess: React.FC = () => {
    const router = useRouter();
  
    const handleCheckStatus = () => {
      // Navigate to the status page or wherever you want to redirect the user
      router.push('../User/home'); // Change '/status' to your desired route
    };

    return (
        <div className="flex flex-col min-h-screen bg-Green p-4 sm:p-6 lg:p-8">
            <div className='w-full max-w-7xl mx-auto'>
                <div className='flex flex-row justify-between items-center py-2'>
                    <Header />
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>WBC</span>
                        <Image
                            src={LogoIMG}
                            alt="Logo"
                            height={80} width={80}
                            className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
                        />
                    </div>
                </div>
            </div>

            <div className='flex flex-col flex-grow mx-auto w-full max-w-4xl items-center justify-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 my-4 md:my-6 relative bg-Cream text-Tertiary rounded-lg md:rounded-xl lg:rounded-2xl'>
                <div className="flex flex-col items-center text-center w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Transaction Appended!</h1>

                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 my-6 md:my-8">
                        <Image
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/badd950f0b38d888beb06387891081cf3bb483721d6906e8b3df9c80e21cf299?placeholderIfAbsent=true&apiKey=ca09dd87004c45a6bc6f8569245d5eaa"
                            alt="Transaction Success Checkmark"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                        />
                    </div>
                    
                    <div className="max-w-lg mx-auto my-4 md:my-6">
                        <p className="text-base sm:text-lg md:text-xl">
                            Please proceed to submit your trash to the chosen landfill area.
                            Your contribution is appreciated!
                        </p>
                    </div>

                    <button
                        onClick={handleCheckStatus}
                        className="bg-Primary hover:bg-opacity-90 text-white font-bold py-3 px-8 sm:px-10 rounded-lg transition-colors mt-6 md:mt-8 text-base sm:text-lg"
                    >
                        Go back to Home
                    </button>
                </div>
            </div>
        </div>
    )
};

export default TransactionSuccess;