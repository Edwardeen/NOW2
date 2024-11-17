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
      router.push('home'); // Change '/status' to your desired route
    };

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
            <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream text-Tertiary rounded-[20px] justify-between'>
                <div className="flex flex-col items-center w-full max-md:max-w-full">
                    <div>
                    <h1>Transaction Appended!</h1>
                    </div>
                    <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/badd950f0b38d888beb06387891081cf3bb483721d6906e8b3df9c80e21cf299?placeholderIfAbsent=true&apiKey=ca09dd87004c45a6bc6f8569245d5eaa"
                    alt="Transaction Success"
                    className="object-contain mt-9 max-w-full aspect-[0.87] w-[260px]"
                    width={260} // Set width for Next.js Image component
                    height={300} // Set height for Next.js Image component
                    />
                    <div className="mt-9 text-center w-[662px] max-md:max-w-full">
                    <p>
                        Please proceed to submit your trash to the chosen area.
                    </p>
                    </div>
                    
                    
                    <button
                    onClick={handleCheckStatus}
                    className="gap-2.5 self-stretch px-8 py-5 mt-9 max-w-full mx-auto my-20 bg-zinc-800 min-h-[80px] w-[483px] max-md:px-5 max-md:max-w-full text-stone-300 font-bold"
                    >
                    Check out your status here.
                    </button>
                </div>
            </div>

        </div>
    )
};

export default TransactionSuccess;