import React, { useState, useEffect } from "react";
import Image from "next/image";
import LogoIMG from "../../public/logo.png";
import 'tailwindcss/tailwind.css';
import CardForm from "@/app/components/transformerCardForm";
import Header from "@/app/components/header";

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

interface Transaction {
  id: number;
  transactionDate: string;
  transactionAmount: number;
  transactionType: string;
  transactionStatus: string;
  transactionDescription: string;
  UserID: number;
  User?: User | null;
  EntityID: number | null;
  Entity?: Entity | null;
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

const CardSkeleton = () => (
  <div className="rounded-lg md:rounded-xl bg-gray-300/50 w-full p-3 sm:p-4 shadow-md animate-pulse">
    <div className="h-6 bg-gray-400 rounded w-3/4 mx-auto mb-2"></div>
    <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto mb-4"></div>
    <div className="h-5 bg-gray-400 rounded w-1/3 mb-2"></div>
    <div className="h-5 bg-gray-400 rounded w-full mb-2"></div>
    <div className="h-5 bg-gray-400 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-400 rounded w-full mb-4"></div>
    <div className="h-12 bg-gray-400 rounded w-full mb-4"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      <div className="flex flex-col items-start">
        <div className="h-5 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-6 w-11 bg-gray-400 rounded-full"></div>
      </div>
       <div className="flex flex-col items-start">
        <div className="h-5 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-6 w-11 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div className="h-12 bg-gray-400 rounded w-full mt-3"></div>
  </div>
);

export default function Home() {
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Callback to handle when a transaction is confirmed by the CardForm
  const handleTransactionConfirmed = (confirmedId: number) => {
    setData(prevData => 
      prevData.map(item => 
        item.id === confirmedId 
          ? { ...item, transactionTransformed: true, transactionTransfered: true } 
          : item
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/transactions/getAll'); 
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch transactions');
        }
        const resultData = await response.json();
        setData(resultData || []);
      } catch (err: any) {
        console.error("Error fetching transactions:", err);
        setError(err.message || "Could not load transactions.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Updated Filter Logic: Show items that are screened but not yet fully transformed AND transferred
  const filteredData = data.filter(
    (item) => item.transactionScreened && (!item.transactionTransformed || !item.transactionTransfered)
  );

  return (
    <div className="flex flex-col min-h-screen bg-Cream p-4 sm:p-6 lg:p-8">
      <div className='w-full max-w-7xl mx-auto mb-4 md:mb-6'>
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
    
      <div className='flex-grow w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-6'>
        <h1 className='text-Tertiary font-extrabold text-xl sm:text-2xl md:text-3xl text-center md:text-left'>Transformer Dashboard: Pending Transformation</h1>
        
        {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_, index) => <CardSkeleton key={index} />)}
            </div>
        ) : error ? (
            <div className="text-center text-red-500 bg-red-100 p-4 rounded-lg">
                Error loading transactions: {error}
            </div>
        ) : filteredData.length === 0 ? (
             <div className="text-center text-gray-500 bg-Cream p-6 rounded-lg">
                No transactions currently awaiting transformation.
            </div>
        ) : (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredData.map((item) => (
                    <CardForm 
                        key={item.id} 
                        data={item} 
                        onTransactionConfirmed={handleTransactionConfirmed}
                    />
                ))}
            </div>
        )}
      </div>
    </div>
  );
}