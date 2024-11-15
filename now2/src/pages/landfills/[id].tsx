// pages/landfills/[id].tsx
import { useRouter } from 'next/router';
import React from 'react';
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png";
import Image from 'next/image';
import Header from '@/app/components/header';

// Dummy data for landfills (In a real application, you would fetch this from an API)
const landfillData = [
  {
    id: '1',
    name: 'Landfill no. 1',
    phoneNumber: '036277-6611',
    address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
    description: 'Description for Landfill no. 1',
    imageUri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    name: 'Landfill no. 2',
    phoneNumber: '036277-6622',
    address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
    description: 'Description for Landfill no. 2',
    imageUri: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more landfills as needed
];

const LandfillDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL

  // Find the landfill data by ID
  const landfill = landfillData.find((lf) => lf.id === id);

  const handleSubmit = () => {
      // Navigate to the next page with the landfill ID
      router.push(`../waqfs/chooseWaqf/`);
      localStorage.setItem('landfillId', landfill.id);
  };

  if (!landfill) {
    return <div>Loading...</div>; // Handle loading state or not found
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

      {/* The one below this is for the contents of the body (Cream Box) */}
      <div id="CreamContainer" className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between overflow-auto'>
        <div className='flex mx-auto w-11/12 h-5/6 items-center gap-2.5 relative bg-Cream rounded-[20px] overflow-auto'>
          {/* Left side for Google Map */}
          <div className='w-1/3 h-full rounded-2xl'>
            {/* Replace with Google Map API component */}
            <div id="map" className='w-full h-full rounded-2xl'>
              {/* Google Map will be rendered here */}
              <img 
              src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with the actual image URL
              alt="Description of the image" // Provide a description for accessibility
              className='w-full h-full object-cover' // Use object-cover to maintain aspect ratio
            />
            </div>
          </div>

          {/* Right side for Landfill Details */}
          <div className='flex flex-col w-2/3 h-full px-4'>
            <h1 className="text-Tertiary font-extrabold text-xl mb-4">Pick this landfill?</h1>
            <div className="overflow-auto max-h-[80vh] w-full">
              <div className="p-4">
                <h1 className="text-3xl font-bold text-Tertiary">{landfill.name}</h1>
                <p className="mt-4 text-Tertiary">{landfill.description}</p>
                <p className="mt-2 text-Tertiary"><strong>Phone:</strong> {landfill.phoneNumber}</p>
                <p className="mt-2 text-Tertiary"><strong>Address:</strong> {landfill.address}</p>
              </div>
            </div>
            {/* Submission Button */}
            <div className="mt-4">
              <button 
                  onClick={handleSubmit} 
                  className="bg-Tertiary text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandfillDetail;