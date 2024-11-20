// pages/checkTransaction.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

// Dummy data for landfills and waqfs
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
    id: '1',
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

const CheckTransaction: React.FC = () => {
  const router = useRouter();
  const [landfill, setLandfill] = useState<any>(null);
  const [waqf, setWaqf] = useState<any>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve IDs from local storage
    const landfillId = localStorage.getItem('landfillId');
    const waqfId = localStorage.getItem('waqfId');

    // Find the corresponding landfill and waqf data
    if (landfillId) {
      const selectedLandfill = landfillData.find(lf => lf.id === landfillId);
      setLandfill(selectedLandfill);
    }
    if (waqfId) {
      const selectedWaqf = waqfData.find(wf => wf.id === waqfId);
      setWaqf(selectedWaqf);
    }
  }, []);

  const handleSubmit = () => {
    // Create a new transaction card
    if (landfill && waqf) {
      const newTransaction = {
        landfillId: landfill.id,
        waqfId: waqf.id,
        transactionId: `TRANSACTION-${Date.now()}`, // Example transaction ID
      };
  
      // Log the new transaction for debugging
      console.log('New Transaction:', newTransaction);
  
      // Retrieve existing transactions from local storage
      const existingTransactions = localStorage.getItem('transactions');
      const transactionsArray = existingTransactions ? JSON.parse(existingTransactions) : [];
  
      // Add the new transaction to the array
      transactionsArray.push(newTransaction);
  
      // Save the updated transactions back to local storage
      localStorage.setItem('transactions', JSON.stringify(transactionsArray));
  
      // Alert the user that the transaction was created successfully
      alert('Transaction created successfully!');
  
      // Clear local storage items as needed
      localStorage.removeItem('landfillId');
      localStorage.removeItem('waqfId');
  
      // Redirect to home or another page
      router.push('/finalize/transactionSuccess'); 
    }
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

      <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2 relative bg-Cream rounded-[20px] overflow-auto'>
        <h2 className='text-4xl text-Tertiary font-bold mb-4 mt-20'>Review Your Transaction</h2>
        {landfill && waqf ? (
          <div className='flex flex-col w-full p-4'>
            <div className='mb-4'>
              <h3 className='text-xl font-semibold'>Selected Landfill</h3>
              <img src={landfill.imageUri} alt={landfill.name} className='w-full h-48 object-cover rounded-md' />
              <p><strong>Name:</strong> {landfill.name}</p>
              <p><strong>Phone:</strong> {landfill.phoneNumber}</p>
              <p><strong>Address:</strong> {landfill.address}</p>
              <p><strong>Description:</strong> {landfill.description}</p>
            </div>
            <div>
              <h3 className='text-xl font-semibold'>Selected Waqf</h3>
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
        <button 
          onClick={handleSubmit} 
          className='mt-4 bg-Primary text-white font-bold py-2 px-4 rounded'>
          Submit Transaction
        </button>
      </div>
    </div>
  );
};

export default CheckTransaction;