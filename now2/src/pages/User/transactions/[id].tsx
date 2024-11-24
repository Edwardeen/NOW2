// pages/transaction/[id].tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

interface Waqf {
  imageUrl: string;
  id: string;
  waqfName: string;
  phoneNumber: string; // Add phone number
  cause: string; // Add cause
}

interface Screener {
  id: number;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
}

interface Transformer {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

interface Transaction {
  id: string;
  WaqfID: string;
  imageUrl: string;
  transactionDate: string;
  transactionAmount: number;
  transactionDeposited: boolean;
  transactionScreened: boolean;
  transactionTransformed: boolean;
  transactionTransfered: boolean;
  transactionStatus?: string;
  totalScreened?: number;
  screenerID?: number;
  transformerID?: number;
  transactionDescription?: string;
  screener?: Screener;
  transformer?: Transformer;
}

const TransactionDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [waqf, setWaqf] = useState<Waqf | null>(null);
  const [screener, setScreener] = useState<Screener | null>(null); // Define state for screener
  const [transformer, setTransformer] = useState<Transformer | null>(null); // Define state for transformer
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchTransaction = async () => {
      if (!id) return; // Ensure ID is available

      try {
        const response = await fetch(`/api/transactions/details/${id}`); // Fetch transaction details by ID
        if (!response.ok) {
          throw new Error('Failed to fetch transaction details');
        }
        const transactionData = await response.json();
        setTransaction(transactionData);

        // Fetch Waqf data using the WaqfID from the transaction
        const fetchWaqf = async (waqfId: string) => {
          try {
            const waqfResponse = await fetch(`/api/waqfs/${waqfId}`);
            if (!waqfResponse.ok) {
              throw new Error('Failed to fetch waqf');
            }
            const waqfData = await waqfResponse.json();
            setWaqf(waqfData);
          } catch (error: any) {
            console.error('Error fetching waqf:', error);
            setError(error.message);
          }
        };

        if (transactionData.WaqfID) {
          await fetchWaqf(transactionData.WaqfID);
        }

        // Fetch Screener data if available
        if (transactionData.screenerID) {
          const fetchScreener = async (screenerId: number) => {
            try {
              const screenerResponse = await fetch(`/api/screeners/${screenerId}`);
              if (!screenerResponse.ok) {
                throw new Error('Failed to fetch screener');
              }
              const screenerData = await screenerResponse.json();
              setScreener(screenerData); // Set screener state
            } catch (error: any) {
              console.error('Error fetching screener:', error);
              setError(error.message);
            }
          };
          await fetchScreener(transactionData.screenerID);
        }

        // Fetch Transformer data if available
        if (transactionData.transformerID) {
          const fetchTransformer = async (transformerId: number) => {
            try {
              const transformerResponse = await fetch(`/api/transformers/${transformerId}`);
              if (!transformerResponse.ok) {
                throw new Error('Failed to fetch transformer');
              }
              const transformerData = await transformerResponse.json();
              setTransformer(transformerData); // Set transformer state
            } catch (error: any) {
              console.error('Error fetching transformer:', error);
              setError(error.message);
            }
          };
          await fetchTransformer(transactionData.transformerID);
        }

        // Determine transaction status
        const status = determineTransactionStatus(transactionData);
        setTransaction(prev => ({
          ...prev!,
          transactionStatus: status,
        }));

      } catch (error: any) {
        console.error('Error fetching transaction:', error);
        setError('Could not load transaction. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTransaction();
  }, [id]);

  const determineTransactionStatus = (transaction: Transaction) => {
    let transactionStatus = '';
    if (transaction.transactionDeposited) {
      transactionStatus = 'Awaiting Screening';
      if (transaction.transactionScreened) {
        transactionStatus = `Screened for ${transaction.totalScreened}, awaiting Transformer`;
        if (transaction.transactionTransformed) {
          transactionStatus = 'Awaiting Transfer';
          if (transaction.transactionTransfered) {
            transactionStatus = 'Transferred';
          }
        }
      }
    } else {
      transactionStatus = 'Awaiting Deposit';
    }
    return transactionStatus;
  };

  if (loading) {
    return <div>Loading...</div>; // Handle loading state
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message
  }

  if (!transaction) {
    return <div>No transaction found.</div>; // Handle case where transaction is not found
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

      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
        <div className='flex mx-auto w-11/12 h-5/6 items-center gap-2.5 relative bg-Cream overflow-auto my-auto'>
          <div className='flex flex-col w-full h-full px-4'>
            <h1 className="text-Tertiary font-extrabold text-xl mb-4 mx-auto">Transaction Details</h1>
            <div className="overflow-auto w-full">
              <div className="p-4 w-full h-full">
                <div className='flex flex-row gap-20'>
                  <div className='w-1/3 h-full'>
                    <img
                      height={200}
                      width={200}
                      className='w-full h-full rounded-2xl'
                      src={waqf?.imageUrl}
                      alt='Waqf Image' />
                  </div>
                  <div>
                    <h1 className="text-6xl font-bold text-Tertiary mx-auto"><strong> {waqf ? waqf.waqfName : 'Loading...'} </strong></h1>
                    <p className="mt-4 text-xl text-Tertiary">
                      Transaction ID: {transaction.id}
                    </p>
                    <p className="mt-4 text-2xl text-Tertiary"><strong>Status:</strong> {transaction.transactionStatus}</p>
                    <div className='flex flex-col text-xl mt-20 gap-4 text-Tertiary'>
                      <p><strong>Details:</strong> {transaction.transactionDescription}</p>
                      <p><strong>Transaction Date:</strong> {new Date(transaction.transactionDate).toLocaleDateString()}</p>
                      <p><strong>Transaction Amount:</strong> RM{transaction.transactionAmount}</p>
                      
                      {/* Add more details as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;