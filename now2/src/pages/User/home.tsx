import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
//import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Header from '@/app/components/header';
import WaqfCard from '@/app/components/card'
import History from '@/app/components/historyCard'
import Transactions from '@/app/components/transactionCard';

export default function Page() {

    const router = useRouter()
    return (
        <div className="flex flex-col justify-center h-max bg-Green">
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
            <div className='flex flex-col mx-auto w-11/12 h-max mb-20 items-start gap-10 px-[83px] py-[42px] relative bg-Cream rounded-[20px]'>
                <div className='flex flex-col gap-5 items-center mx-auto'>
                    <span className='text-Tertiary font-bold'>Welcome User!</span>
                    <span className='text-Tertiary font-black'>Total Donations in November: </span>
                </div>
                <div className='flex flex-row gap-10 w-full items-center mx-auto'>
                    <div className='bg-Green w-4/5 h-60 rounded-2xl'>
                    <div className='flex flex-row h-full'>
                        <div id="Image Picture" className='container w-1/4 h-full bg-Primary rounded-l-2xl'>
                        
                        </div>
                        <div className='flex flex-col gap-5 items-start m-8 ml-10 w-3/4'>
                            <span className='text-Tertiary font-bold text-4xl'>Start Donating your Trashes Now.</span>
                            <span className='text-Tertiary font-normal text-xl w-3/4'>The more you donate trashes, the more money you can donate. From a simple household trash, converted into money to be sent to Waqf houses and used for numerous causes that will help everyone, from any kind, any age, and anyone.</span>
                        </div>
                    </div>
                    </div>
                    <div className='btn btn-ghost bg-Green text-Tertiary font-extrabold w-1/5 rounded-2xl h-full flex flex-col py-20' onClick={() => router.push('../landfills/chooseArea')}>
                        <img
                            src="https://img.icons8.com/?size=100&id=60996&format=png&color=000000"
                            alt='leaf'
                            width={40}
                            height={40}
                            />
                        <span className='mx-auto'>Find Landfills near you!
                        </span>                    
                    </div>

                {/* This one below is to show Donation history */}   
                </div>
                
                <span className='text-Tertiary font-extrabold text-2xl mx-auto'>Check Your Transaction:</span>
                <div>
                    <div className='flex flex-col gap-4'>
                        <Transactions/>
                    </div>
                </div>

                {/* This one below is to show transaction history */}
                <span className='text-Tertiary font-extrabold text-2xl mx-auto'>History:</span>
                <div className='flex flex-col mx-auto w-full h-5/6 items-start relative bg-Cream rounded-[20px] overflow-hidden'> {/* Changed overflow-x-hidden to overflow-hidden */}
    
    <div className='flex flex-col gap-4 h-full overflow-y-auto'> {/* Set height and enable vertical scrolling */}
        <History />
    </div>
</div>

        </div>
        </div>
    )
};