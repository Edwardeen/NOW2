import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectValue
} from "@/components/ui/select"

import { getSession, GetSessionParams } from "next-auth/react";

import axios from 'axios';
import { get } from 'http';

interface CheckTransactionProps {
  userId: string | null;
  userType: string | null;
  userName: string | null;
  frontName: string | null;
}



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
  ];
  
  const waqfData = [
    {
      id: '8',
      name: 'Waqf no. 1',
      phoneNumber: '036277-7711',
      address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
      description: 'Description for Waqf no. 1',
      imageUri: 'https://example.com/image1.jpg',
    },
    {
      id: '2',
      name: 'Waqf no. 2',
      phoneNumber: '036277-7722',
      address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
      description: 'Description for Waqf no. 2',
      imageUri: 'https://example.com/image2.jpg',
    },
  ];
  

export default function CheckTransaction({ userId, userType, userName, frontName }: CheckTransactionProps) {
    const router = useRouter();
    const { landfillId, waqfId } = router.query;

    const [transactionType, setTransactionType] = useState('');
    const [transactionDescription, setTransactionDescription] = useState('');

    const [landfill, setLandfill] = useState<any>(null);
    const [waqf, setWaqf] = useState<any>(null);

    const getLandfillData = async (id : number) => {
      const response = await axios.get(`/api/landfills/${id}`);
      return {
        id : response.data.id,
        name : response.data.landfillName,
        phoneNumber : response.data.landfillPhoneNumber,
        address : response.data.landfillAddress,
        description : response.data.landfillDescription,
        imageUri : response.data.imageUri
      }
    }

    const getWaqfData = async (id : number) => {
      const response = await axios.get(`/api/waqfs/${id}`);
      return {
        id : response.data.id,
        name : response.data.waqfName,
        phoneNumber : response.data.waqfPhoneNumber,
        address : response.data.waqfAddress,
        description : response.data.waqfDescription,
        imageUri : response.data.imageUri
      }
    }

    useEffect(() => {
        if (router.isReady) {
          console.log('landfillId:', landfillId);
          console.log('waqfId:', waqfId);
    
          // Find the corresponding landfill and waqf data
          if (landfillId) {
            const selectedLandfill =  getLandfillData(parseInt(Array.isArray(landfillId) ? landfillId[0] : landfillId)).then((data) => {
              setLandfill(data);
              console.log('Landfill:', data);
            }).catch((error) => {
              console.error('Error fetching landfill:', error);
            });
            
          }
          if (waqfId) {
            const selectedWaqf = getWaqfData(parseInt(Array.isArray(waqfId) ? waqfId[0] : waqfId)).then((data) => {
              setWaqf(data);
              console.log('Waqf:', data);
            }).catch((error) => {
              console.error('Error fetching waqf:', error);
            });
          }
        }
      }, [router.isReady, landfillId, waqfId]); // Effect runs when router is ready and query params change


      const handleSubmit = () => {

        console.log('Transaction Type:', transactionType);
        console.log('Description:', transactionDescription);
        console.log('userId:', userId);
        console.log('userType:', userType);

        const data = {
          transactionDate: new Date(),
          transactionAmount: 1,
          transactionType,
          transactionDescription,
          userId,
          userType,
          LandfillsID: landfillId,
          WaqfID: waqfId,
          totalScreened: 0,
        }


        console.log("Payload sent to API:", data);


        fetch('/api/finalize/transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: 
            JSON.stringify(data)
        }).then((response) => {
          if (response.ok) {
            console.log('Transaction submitted successfully');
            router.push('/finalize/transactionSuccess');
          } else {
            console.error('Failed to submit transaction');
          }
        });
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
              width={100} />
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2 relative bg-Cream rounded-[20px] overflow-auto'>
        <h2 className='text-4xl text-Tertiary font-bold mb-4 mt-20'>Review Your Transaction</h2>
        {landfill && waqf ? (
          <div className='flex flex-col w-full p-4 grid grid-cols-2 text-black gap-20 px-20'>
            <div className='bg-Green p-5 rounded-[3%] '>
              <h3 className='text-xl font-bold justify-center text-center'>Selected Landfill</h3>
              <img src={landfill.imageUri} alt={landfill.name} className='w-full h-48 object-cover rounded-md' />
              <p><strong>Name:</strong> {landfill.name}</p>
              <p><strong>Phone:</strong> {landfill.phoneNumber}</p>
              <p><strong>Address:</strong> {landfill.address}</p>
              <p><strong>Description:</strong> {landfill.description}</p>
            </div>
            <div className='bg-Green p-5 rounded-[3%]'>
              <h3 className='text-xl font-bold text-center'>Selected Waqf</h3>
              <img src={waqf.imageUri} alt={waqf.name} className='w-full h-48 object-cover rounded-md' />
              <p><strong>Name:</strong> {waqf.name}</p>
              <p><strong>Phone:</strong> {waqf.phoneNumber}</p>
              <p><strong>Address:</strong> {waqf.address}</p>
              <p><strong>Description:</strong> {waqf.description}</p>
            </div>
          </div>
        ) : (
          <p className='text-red-500'>No landfill or waqf selected. Please go back and select one.</p>
        )}


        {/* create form transaction_type : radio & transaction_desc : longtext */}
        <Select onValueChange={setTransactionType}>
          <SelectTrigger className="w-[180px] bg-white text-black">
            <SelectValue placeholder="Transaction Type" />
          </SelectTrigger>
          <SelectContent className='bg-white text-black'>
              <SelectItem value="Organic Waste">Organic Waste</SelectItem>
              <SelectItem value="Recycleable Waste">Recycleable Waste</SelectItem>
              <SelectItem value="Electronic Waste">Electronic Waste</SelectItem>
              <SelectItem value="Hazardous Household Waste">Hazardous Household Waste</SelectItem>
              <SelectItem value="Textile Waste">Text Wasteile</SelectItem>
          </SelectContent>
        </Select>

        <input
          placeholder='Transaction Description'
          className='w-1/2 h-48 p-2 bg-white text-black rounded-md' onChange={(e) => setTransactionDescription(e.target.value)}
        ></input>

        



        
        <button 
          onClick={handleSubmit} 
          className='mt-4 bg-Primary text-white font-bold py-2 px-4 rounded'
          disabled= {!landfill || !waqf}>
          Submit Transaction
        </button>
      </div>
    </div>
  );
}
    

    export async function getServerSideProps(context: GetSessionParams | undefined) {
      const session = await getSession(context);
      console.log('Session:', session);
    
      const userId = session?.user?.id || null;
      const userType = session?.user?.type || null;
      const frontName = session?.user?.frontName || null;
      const userName = session?.user?.userName || null; // Ensure you access userName here
    
      return {
        props: {
          userId,
          userType,
          frontName,
          userName, // Pass userName to the page
        },
      };
    }
  
