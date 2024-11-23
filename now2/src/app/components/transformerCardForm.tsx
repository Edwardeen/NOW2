"use client";

import axios from "axios";
import { useState } from "react";

interface User {
    id: number;
    email: string;
    address: string;
    city: string;
    country: string;
    dateofbirth: string | null;
    familyName: string;
    frontName: string;
    icNumber: number;
    phoneNumber: string;
    province: string;
    username: string;
    zipCode: number;
    password: string;
  }

interface Entity {
  id: number;
  companyUsername: string;
  picFrontName: string;
  picFamilyName: string;
  picPhoneNumber: string;
  dateofbirth: string;
  companyName: string;
  companyAddress: string;
  companyPhoneNumber: string;
  companyZipCode: number;
  companyEmail: string;
  companyRegistrationNumber: string;
  password: string;
}

interface TransactionData {
  id: number;
  transactionDate: string;
  transactionAmount: number;
  transactionType: string;
  transactionStatus: string;
  transactionDescription: string;
  User?: User | null; // User can be null or an object
  Entity?: Entity | null; // Entity can be null or an object
  transactionDeposited: boolean;
  transactionScreened: boolean;
  transactionTransfered: boolean;
  transactionTransformed: boolean;
  totalScreened: number;
  LandfillsID: number;
  WaqfID: number;
  ScreenerID: number | null;
  TransformerID: number | null;
}

// Props Interface for Card Component
interface CardProps {
  data: TransactionData;
  key : number;
}

export default function Card({ data, key }: CardProps) {
  const {
    id,
    transactionDate,
    transactionAmount,
    transactionType,
    transactionStatus,
    transactionDescription,
    User,
    Entity,
    transactionDeposited,
    transactionScreened,
    transactionTransfered,
    transactionTransformed,
    totalScreened,
    LandfillsID,
    WaqfID,
    ScreenerID,
    TransformerID,
  } = data;

    const [transformed, setTransformed] = useState(transactionTransfered);
    const [transfered, setTransfered] = useState(transactionTransformed);
    const [totalScreenedInput, setTotalScreenedInput] = useState(transactionAmount);

    const handleSubmit = async () => {
      try {
      
        


        const response = await axios.put(`/api/transactions/update/${id}`, {
            transactionScreened: transactionScreened,
            transactionDeposited: transactionDeposited,
            transactionAmount: totalScreenedInput,
            transactionTransformed: transformed,
            transactionTransfered: transfered,
            totalScreened: totalScreened
        });

        if(transformed && transfered && transactionDeposited && transactionScreened ){
          alert("transaction deleted, please refresh the page");
        }
        console.log(response.data);
      } catch (error) {
        console.error('Error submitting transaction:', error);
      }
    }
   
    

    return (
    <div className="rounded-3xl bg-Primary w-full p-5 mt-5">
        <h1 className='text-2xl text-white text-center font-bold'> Transaction ID : {id}</h1>
        <h1 className='text-xl text-white text-center'>{ new Date(transactionDate).toLocaleDateString() }</h1>

        <h1 className='mt-2 text-xl text-white text-left'>Type : {transactionType}</h1>
        <h1 className='mt-2 text-xl text-white text-left'>description : {transactionDescription}</h1>
        <h1 className='mt-2 text-xl text-white text-left'>Total Screened : {totalScreened}</h1>
      
        <input type="number" className="mt-5 w-full p-2 rounded-md bg-white text-Tertiary font-bold" placeholder="Transaction amount" onChange={(e) => setTotalScreenedInput(parseInt(e.target.value))} value={totalScreenedInput} />
        

        <div className="grid grid-cols-2 mt-5">
            <div>
                <h1 className='mt-2 text-xl text-white text-left'>Transaction Transformed</h1>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onChange={(e) => setTransformed(e.target.checked)} checked={transformed}/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>

            
            <div>        
                <h1 className='mt-2 text-xl text-white text-left'>Transaction Transfered</h1>
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onChange={(e) => setTransfered(e.target.checked)} checked={transfered}/>
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>

        <button type="submit" className="bg-Tertiary text-white w-full p-3 mt-5" onClick={handleSubmit}>Submit</button>

        
    </div>
   
    
  );
};

