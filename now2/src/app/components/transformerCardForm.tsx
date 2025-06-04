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
  onTransactionConfirmed?: (transactionId: number) => void;
}

export default function Card({ data, onTransactionConfirmed }: CardProps) {
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

    const [transformed, setTransformed] = useState(transactionTransformed);
    const [transfered, setTransfered] = useState(transactionTransfered);
    const [transactionAmountInput, setTransactionAmountInput] = useState(transactionAmount || 0);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async () => {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      try {
        const payload = {
          transactionTransformed: transformed,
          transactionTransfered: transfered,
          transactionAmount: transactionAmountInput,
        };
        console.log(`Updating transaction ${id} with payload:`, payload);

        const response = await axios.put(`/api/transactions/update/${id}`, payload);

        console.log('Update response:', response.data);
        setSubmitSuccess(true);
        if (onTransactionConfirmed) {
          onTransactionConfirmed(id);
        }
        setTimeout(() => setSubmitSuccess(false), 1500);

      } catch (error: any) {
        console.error('Error submitting transaction update:', error);
        const errorMsg = error.response?.data?.error || error.message || 'Failed to update transaction.';
        setSubmitError(errorMsg);
      } finally {
        setIsSubmitting(false);
      }
    }

    const canSubmit = transformed && transfered && transactionAmountInput > 0 && !isSubmitting;

    return (
    <div className="rounded-lg md:rounded-xl bg-Green text-Tertiary w-full p-3 sm:p-4 shadow-md">
        <h1 className='text-lg sm:text-xl text-center font-bold mb-1'> Transaction ID : {id}</h1>
        <h1 className='text-sm sm:text-base text-center mb-3'>{ new Date(transactionDate).toLocaleDateString() }</h1>

        <h1 className='text-base sm:text-lg text-left mb-1'>Type : {transactionType}</h1>
        <h1 className='text-base sm:text-lg text-left mb-1 break-words'>Description : {transactionDescription}</h1>
        <h1 className='text-base sm:text-lg text-left mb-3 font-semibold'>Total Screened : {totalScreened} Kg</h1>
        <h1 className='text-base sm:text-lg text-left mb-3 font-semibold'>
          Donor: {
             data.User ? `${data.User.frontName || ''} ${data.User.familyName || ''}`.trim() :
             data.Entity ? data.Entity.companyName : 
             'Unknown Donor'
           }
        </h1>
      
        <label className="form-control w-full mb-4">
          <div className="label">
            <span className="label-text text-Tertiary">Final Transaction Amount (RM):</span>
          </div>
          <input 
             type="number" 
             className="input input-bordered w-full bg-Cream text-Tertiary font-bold focus:outline-none focus:border-Primary h-10 px-3" 
             placeholder="Enter final RM amount"
             onChange={(e) => setTransactionAmountInput(parseFloat(e.target.value) || 0)}
             value={transactionAmountInput}
             disabled={isSubmitting || (transformed && transfered)}
             min="0"
             step="0.01"
           />
        </label>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col items-start">
                <span className='text-base text-left mb-1'>Mark as Transformed</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      onChange={(e) => setTransformed(e.target.checked)}
                      checked={transformed} 
                      disabled={isSubmitting} 
                    />
                    <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Primary"></div>
                </label>
            </div>

            <div className="flex flex-col items-start">        
                <span className='text-base text-left mb-1'>Mark as Transferred</span>
                <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      onChange={(e) => setTransfered(e.target.checked)} 
                      checked={transfered} 
                      disabled={isSubmitting}
                     />
                    <div className="relative w-11 h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-Primary"></div>
                </label>
            </div>
        </div>

         {submitError && (
           <p className="text-red-400 text-sm text-center mb-3">Error: {submitError}</p>
         )}

        <button 
          type="button" 
          className={`btn w-full h-auto whitespace-normal py-2 px-3 mt-3 text-base sm:text-lg transition-colors duration-300 ${submitSuccess ? 'bg-green-500 text-white' : 'bg-Tertiary text-white hover:bg-opacity-80'} disabled:opacity-50`}
          onClick={handleSubmit}
          disabled={!canSubmit || submitSuccess}
         >
            {isSubmitting ? (
                <span className="loading loading-spinner loading-sm"></span>
            ) : submitSuccess ? (
                 '✓ Updated'
            ) : (
                 'Confirm Transformation & Transfer'
            )}
        </button>
    </div>
  );
};

