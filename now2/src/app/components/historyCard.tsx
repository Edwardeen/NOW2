// components/HistoryCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HistoryCardProps {
  id: string;
  imageUri: string;
  waqfName: string;
  cause: string; // Removed status from here
  date: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({ id, imageUri, waqfName, cause, date }) => {
    return (
      <div className="flex flex-col justify-center p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer w-[300px] max-h-[400px]"> {/* Set a fixed width for the card */}
        <div className='h-1/3 overflow-hidden rounded-3xl'> {/* Allow overflow hidden on the container */}
          <Image
            loading="lazy"
            src={imageUri}
            alt={`Image of ${waqfName}`}
            className="object-cover rounded-3xl" // Use object-cover to ensure the image covers the area
            style={{ maxHeight: '200px' }} // Set max height directly on the image
            width={600} // Adjust width as needed
            height={200} // You can keep this if you want to maintain aspect ratio
          />
        </div>
        
        <div className="flex flex-col mt-2 overflow-hidden"> {/* Allow overflow hidden on the text container */}
          <div className="flex flex-wrap justify-between items-center w-full text-3xl">
            <div className=" my-auto font-bold">
              <span>{waqfName}</span>
            </div>
          </div>
          <div className="mt-5">
            <span>Cause: {cause}</span>
          </div>
          <div className="mt-5">
            <span>Date: {date}</span>
          </div>
          <div className="flex justify-between mt-5">
            <Link href={`/transactions/${id}`}>
              <button className="bg-blue-500 text-white rounded-md p-2 w-1/2 mr-1">
                Check Transaction Process
              </button>
            </Link>
            <Link href={`/receipts/${id}`}>
              <button className="bg-green-500 text-white rounded-md p-2 w-1/2 ml-1">
                Download Receipt
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

// Dummy data creation for history cards
const dummyHistoryData = [
  {
    id: '1',
    imageUri: 'https://th.bing.com/th/id/OIP.ci1E7m8wCISyHZ6um8z01gHaDt?w=337&h=175&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 1',
    cause: 'Environmental Awareness', // Updated to keep cause
    date: '2023-10-01',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    waqfName: 'Waqf Project 2',
    cause: 'Waste Reduction', // Updated to keep cause
    date: '2023-10-02',
  },
  
  // Add more history items as needed
];

// Component to render all history cards
const History: React.FC = () => {
  return (
    <div className="flex overflow-x-auto p-4"> {/* Enable horizontal scrolling */}
      <div className="flex flex-row space-x-4"> {/* Arrange items in a row with space between */}
        {dummyHistoryData.map((history) => (
          <HistoryCard
            key={history.id}
            id={history.id}
            imageUri={history.imageUri}
            waqfName={history.waqfName}
            cause={history.cause} // Pass cause
            date={history.date}
          />
        ))}
      </div>
    </div>
  );
};

export default History;