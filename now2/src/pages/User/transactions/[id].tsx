// pages/TransactionDetail.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import LogoIMG from "@/public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

interface Transaction {
  landfillId: string;
  waqfId: string;
  transactionId: string;
}

const TransactionDetail: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve transactions from local storage
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  const handleBack = () => {
    router.push('../User/home'); // Navigate back to the homepage or previous page
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
              width={100} />
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2 relative bg-Cream rounded-[20px] overflow-auto p-6'>
        <h1 className="text-3xl font-bold text-Tertiary mb-4">Transaction Details</h1>

        {transactions.length > 0 ? (
          <div className="overflow-auto max-h-[80vh] w-full">
            {transactions.map((transaction, index) => (
              <div key={index} className="p-4 border-b border-gray-300">
                <h2 className="text-xl font-semibold">Transaction ID: {transaction.transactionId}</h2>
                <p><strong>Landfill ID:</strong> {transaction.landfillId}</p>
                <p><strong>Waqf ID:</strong> {transaction.waqfId}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">No transactions found.</p>
        )}
        
        <button 
          onClick={handleBack} 
          className="mt-4 bg-Tertiary text-white font-bold py-2 px-4 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default TransactionDetail;