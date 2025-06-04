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

// Define interfaces for fetched data
interface LandfillData {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  description?: string;
  imageUri?: string; // Keep existing name for compatibility
}

interface WaqfData {
  id: number;
  name: string;
  phoneNumber: string;
  address: string;
  description?: string;
  imageUrl: string;
}

interface CheckTransactionProps {
  userId: string | null;
  userType: string | null;
  userName: string | null;
  frontName: string | null;
}
  

export default function CheckTransaction({ userId, userType, userName, frontName }: CheckTransactionProps) {
    const router = useRouter();
    const { landfillId, waqfId } = router.query;

    const [transactionType, setTransactionType] = useState('');
    const [transactionDescription, setTransactionDescription] = useState('');

    const [landfill, setLandfill] = useState<LandfillData | null>(null); // Use interface
    const [waqf, setWaqf] = useState<WaqfData | null>(null); // Use interface

    // Loading and error states
    const [isFetchingDetails, setIsFetchingDetails] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const getLandfillData = async (id: number): Promise<LandfillData> => { // Add return type
      const response = await axios.get(`/api/landfills/${id}`);
      // Basic validation
      if (!response.data || typeof response.data.landfillName === 'undefined') {
        throw new Error('Received invalid landfill data.');
      }
      return {
        id : response.data.id,
        name : response.data.landfillName,
        phoneNumber : response.data.landfillPhoneNumber,
        address : response.data.landfillAddress,
        description : response.data.landfillDescription,
        imageUri : response.data.imageUri
      }
    }

    const getWaqfData = async (id: number): Promise<WaqfData> => { // Add return type
      const response = await axios.get(`/api/waqfs/${id}`);
       // Basic validation
      if (!response.data || typeof response.data.waqfName === 'undefined') {
        throw new Error('Received invalid waqf data.');
      }
      return {
        id : response.data.id,
        name : response.data.waqfName,
        phoneNumber : response.data.waqfPhoneNumber,
        address : response.data.waqfAddress,
        description : response.data.waqfDescription,
        imageUrl : response.data.imageUrl
      }
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!router.isReady || !landfillId || !waqfId) {
                 // Wait for router or IDs
                if (router.isReady && (!landfillId || !waqfId)) {
                    setFetchError("Missing Landfill or Waqf ID in URL.");
                    setIsFetchingDetails(false); // Stop loading if IDs are missing
                }
                return;
            }

            setIsFetchingDetails(true);
            setFetchError(null);
            setLandfill(null);
            setWaqf(null);

            try {
                const landfillIdStr = Array.isArray(landfillId) ? landfillId[0] : landfillId;
                const waqfIdStr = Array.isArray(waqfId) ? waqfId[0] : waqfId;

                // Fetch in parallel
                const [landfillData, waqfData] = await Promise.all([
                    getLandfillData(parseInt(landfillIdStr)),
                    getWaqfData(parseInt(waqfIdStr))
                ]);

                setLandfill(landfillData);
                setWaqf(waqfData);
                console.log('Landfill:', landfillData);
                console.log('Waqf:', waqfData);

            } catch (error: any) {
                console.error('Error fetching details:', error);
                setFetchError(error.message || 'Failed to load landfill or waqf details.');
            } finally {
                setIsFetchingDetails(false);
            }
        };

        fetchData();
      }, [router.isReady, landfillId, waqfId]); // Keep dependencies


      const handleSubmit = async () => { // Make async
        setSubmitError(null); // Clear previous errors
        setIsSubmitting(true); // Start submitting state

        // Basic validation
        if (!transactionType) {
            setSubmitError("Please select a transaction type.");
            setIsSubmitting(false);
            return;
        }
         if (!transactionDescription) {
            setSubmitError("Please enter a transaction description.");
            setIsSubmitting(false);
            return;
        }
        if (!userId || !userType || !landfillId || !waqfId) {
             setSubmitError("Missing required information (user, landfill, or waqf). Please refresh.");
             setIsSubmitting(false);
             return;
        }

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
          LandfillsID: parseInt(Array.isArray(landfillId) ? landfillId[0] : landfillId), // Ensure number
          WaqfID: parseInt(Array.isArray(waqfId) ? waqfId[0] : waqfId), // Ensure number
          totalScreened: 0, // Keep hardcoded for now
        }

        console.log("Payload sent to API:", data);

        try { // Use try/catch for fetch
          const response = await fetch('/api/finalize/transaction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:
              JSON.stringify(data)
          });

          if (response.ok) {
              console.log('Transaction submitted successfully');
              router.push('/finalize/transactionSuccess');
              // No need to setIsSubmitting(false) as we are navigating away
          } else {
              const errorData = await response.json().catch(() => ({})); // Try to get error details
              console.error('Failed to submit transaction:', response.status, errorData);
              setSubmitError(errorData.error || `Failed to submit transaction (Status: ${response.status})`);
              setIsSubmitting(false); // Stop submitting state on error
          }
        } catch (error: any) {
             console.error('Error during transaction submission:', error);
             setSubmitError(error.message || 'An unexpected error occurred during submission.');
             setIsSubmitting(false); // Stop submitting state on error
        }
      }

    // Skeleton Loader Component (Simplified)
    const SkeletonLoader = ({ className = '' }: { className?: string }) => (
      <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
    );

    return (
    // Use min-h-screen and padding for responsiveness
    <div className="flex flex-col min-h-screen bg-Green p-4 sm:p-6 lg:p-8">
      {/* Responsive Header */}
      <div className='w-full max-w-7xl mx-auto'>
        <div className='flex flex-row justify-between items-center py-2'>
          <Header />
          <div className='flex flex-row gap-2 items-center'>
             {/* Responsive Text and Logo */}
            <span className='hidden sm:flex flex-col my-auto text-Tertiary font-extrabold text-2xl md:text-3xl lg:text-4xl'>WBC</span>
            <Image
              src={LogoIMG}
              alt="Logo"
              height={80} width={80} // Keep base size
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" // Responsive sizes
            />
          </div>
        </div>
      </div>

      {/* Responsive Content Container */}
      {/* Use flex-grow, max-width, responsive padding/margins */}
      <div className='flex flex-col flex-grow mx-auto w-full max-w-7xl items-center gap-4 md:gap-6 px-4 py-6 sm:p-8 md:p-10 lg:p-12 my-4 md:my-6 relative bg-Cream rounded-lg md:rounded-xl lg:rounded-2xl overflow-auto'>
         {/* Responsive Title */}
        <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-Tertiary font-bold mb-4 md:mb-6 text-center'>Review Your Transaction</h2>

        {isFetchingDetails ? (
            // Skeleton Loader for details section
             <div className='flex flex-col md:flex-row w-full gap-6 md:gap-8 lg:gap-12'>
               {/* Skeleton Landfill Card */}
                <div className='w-full md:w-1/2 bg-Green/50 p-4 md:p-5 rounded-lg md:rounded-xl animate-pulse'>
                   <SkeletonLoader className="h-6 w-1/2 mx-auto mb-3" /> {/* Title */}
                   <SkeletonLoader className="aspect-video w-full mb-3 rounded-md" /> {/* Image */}
                   <SkeletonLoader className="h-4 w-3/4 mb-2" /> {/* Name */}
                   <SkeletonLoader className="h-4 w-1/2 mb-2" /> {/* Phone */}
                   <SkeletonLoader className="h-4 w-full mb-2" /> {/* Address */}
                   <SkeletonLoader className="h-4 w-5/6" /> {/* Desc */}
               </div>
               {/* Skeleton Waqf Card */}
               <div className='w-full md:w-1/2 bg-Green/50 p-4 md:p-5 rounded-lg md:rounded-xl animate-pulse'>
                   <SkeletonLoader className="h-6 w-1/2 mx-auto mb-3" /> {/* Title */}
                   <SkeletonLoader className="aspect-video w-full mb-3 rounded-md" /> {/* Image */}
                   <SkeletonLoader className="h-4 w-3/4 mb-2" /> {/* Name */}
                   <SkeletonLoader className="h-4 w-1/2 mb-2" /> {/* Phone */}
                   <SkeletonLoader className="h-4 w-full mb-2" /> {/* Address */}
                   <SkeletonLoader className="h-4 w-5/6" /> {/* Desc */}
               </div>
           </div>
        ) : fetchError ? (
             <p className='text-red-500 text-center p-6'>{fetchError}</p>
        ) : landfill && waqf ? (
           // Responsive Layout for Landfill/Waqf display
          <div className='flex flex-col md:flex-row w-full gap-6 md:gap-8 lg:gap-12'>
             {/* Landfill Card */}
            <div className='w-full md:w-1/2 bg-Green/80 text-Tertiary p-4 md:p-5 rounded-lg md:rounded-xl flex flex-col gap-2'>
              <h3 className='text-lg sm:text-xl font-bold text-center mb-2'>Selected Landfill</h3>
              {/* Revert to iframe for Google Maps embed URL */}
              <div className="relative w-full aspect-video mb-2 overflow-hidden rounded-md"> {/* Container for iframe */}
                 <iframe
                    src={landfill.imageUri || ''} // Use iframe src
                    title={`Location of ${landfill.name}`}
                    className='absolute top-0 left-0 w-full h-full border-0' // Fill container
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
              <p className="text-sm sm:text-base break-words"><strong>Name:</strong> {landfill.name}</p>
              <p className="text-sm sm:text-base break-words"><strong>Phone:</strong> {landfill.phoneNumber || 'N/A'}</p>
              <p className="text-sm sm:text-base break-words"><strong>Address:</strong> {landfill.address || 'N/A'}</p>
              <p className="text-sm sm:text-base break-words"><strong>Description:</strong> {landfill.description || 'N/A'}</p>
            </div>
            {/* Waqf Card */}
            <div className='w-full md:w-1/2 bg-Green/80 text-Tertiary p-4 md:p-5 rounded-lg md:rounded-xl flex flex-col gap-2'>
              <h3 className='text-lg sm:text-xl font-extrabold text-center mb-2'>Selected Waqf</h3>
              {/* Use next/image */}
               <div className="relative w-full aspect-video mb-2">
                 <Image
                    src={waqf.imageUrl || '/placeholder-image.png'} // Provide a fallback
                    alt={`Image of ${waqf.name}`}
                    fill
                    className='object-cover rounded-md'
                     sizes="(max-width: 768px) 100vw, 50vw"
                 />
               </div>
              <p className="text-sm sm:text-base break-words"><strong>Name:</strong> {waqf.name}</p>
              <p className="text-sm sm:text-base break-words"><strong>Phone:</strong> {waqf.phoneNumber || 'N/A'}</p>
              <p className="text-sm sm:text-base break-words"><strong>Address:</strong> {waqf.address || 'N/A'}</p>
              <p className="text-sm sm:text-base break-words"><strong>Description:</strong> {waqf.description || 'N/A'}</p>
            </div>
          </div>
        ) : (
           // Should ideally not be reached if fetchError handles missing IDs
          <p className='text-red-500 text-center p-6'>No landfill or waqf selected. Please go back and select one.</p>
        )}


        {/* Form section - only show if data loaded successfully */}
        {landfill && waqf && !isFetchingDetails && !fetchError && (
            <div className='w-full max-w-lg flex flex-col items-center gap-4 md:gap-6 mt-6 md:mt-8'>
              {/* Responsive Select Dropdown */}
              <Select onValueChange={setTransactionType} value={transactionType} disabled={isSubmitting}>
                <SelectTrigger className="w-full bg-white text-black border border-gray-300 rounded-md h-10 px-3">
                  <SelectValue placeholder="Select Transaction Type" />
                </SelectTrigger>
                <SelectContent className='bg-white text-black'>
                    <SelectItem value="Organic Waste">Organic Waste</SelectItem>
                    <SelectItem value="Recycleable Waste">Recycleable Waste</SelectItem>
                    <SelectItem value="Electronic Waste">Electronic Waste</SelectItem>
                    <SelectItem value="Hazardous Household Waste">Hazardous Household Waste</SelectItem>
                    <SelectItem value="Textile Waste">Textile Waste</SelectItem>
                </SelectContent>
              </Select>

              {/* Responsive Text Area */}
              <textarea // Use textarea for multi-line input
                placeholder='Transaction Description (e.g., bag of food scraps, old laptop)'
                className='w-full h-32 p-2 bg-white text-black rounded-md border border-gray-300 resize-none' // Allow vertical resize maybe? 'resize-y' or 'resize-none'
                value={transactionDescription}
                onChange={(e) => setTransactionDescription(e.target.value)}
                disabled={isSubmitting}
              />

              {/* Submission Error Message */}
              {submitError && (
                <p className="text-red-500 text-sm text-center mt-2">{submitError}</p>
              )}


              {/* Responsive Submit Button with Loading State */}
              <button
                onClick={handleSubmit}
                className='mt-4 bg-Primary text-white font-bold py-2 px-6 sm:px-8 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                disabled={!landfill || !waqf || isSubmitting || isFetchingDetails} // Also disable if fetching
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Transaction'
                )}
              </button>
          </div>
        )}
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
  
