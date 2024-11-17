import 'tailwindcss/tailwind.css';
import LogoIMG from "../../../public/logo.png"
import Image from 'next/image';
//import React, { useState } from 'react';
//import { useRouter } from 'next/navigation'
import Header from '@/app/components/header';

export default function Page() {

  //  const router = useRouter()
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
            <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between'>

            </div>

        </div>
    )
};