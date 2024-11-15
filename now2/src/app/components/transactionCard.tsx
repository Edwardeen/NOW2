// components/TransactionCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface TransactionCardProps {
  id: string;
  imageUri: string;
  donatedWaqf: string;
  status: string;
  cause: string;
  date: string;
  currentStatus: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ id, imageUri, donatedWaqf, status, cause, date, currentStatus }) => {
  return (
    <div className="flex flex-col justify-center p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer max-w-[550px]">
      <Image
        loading="lazy"
        src={imageUri}
        alt={`Image of ${donatedWaqf}`}
        className="object-contain rounded-3xl aspect-[3.04] w-full"
        width={600} // Adjust width as needed
        height={200} // Adjust height as needed
      />
      <div className="flex flex-col px-4 mt-4">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full text-3xl">
          <div className="self-stretch my-auto font-bold">
            <span>{donatedWaqf}</span>
          </div>
          <div className="self-stretch my-auto font-semibold">
            <span>Status: {status}</span>
          </div>
        </div>
        <div className="mt-5">
          <span>Cause: {cause}</span>
        </div>
        <div className="mt-5">
          <span>Date: {date}</span>
        </div>
        <div className="mt-5">
          <span>Current Status: {currentStatus}</span>
        </div>
        <div className="flex justify-between mt-5">

        </div>
      </div>
    </div>
  );
};

// Dummy data creation for transaction cards
const dummyTransactionData = [
  {
    id: '1',
    imageUri: 'https://th.bing.com/th/id/OIP.ci1E7m8wCISyHZ6um8z01gHaDt?w=337&h=175&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    donatedWaqf: 'Waqf Project A',
    status: 'Completed',
    cause: 'Environmental Awareness',
    date: '2023-10-01',
    currentStatus: 'Funds Disbursed',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    donatedWaqf: 'Waqf Project B',
    status: 'Pending',
    cause: 'Waste Reduction',
    date: '2023-10-02',
    currentStatus: 'Awaiting Approval',
  },
  // Add more transaction items as needed
];

// Component to render all transaction cards
const Transactions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dummyTransactionData.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          id={transaction.id}
          imageUri={transaction.imageUri}
          donatedWaqf={transaction.donatedWaqf}
          status={transaction.status}
          cause={transaction.cause}
          date={transaction.date}
          currentStatus={transaction.currentStatus}
        />
      ))}
    </div>
  );
};

export default Transactions;