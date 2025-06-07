// components/TransactionCard.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface TransactionCardProps {
  id: string;
  imageUrl: string;
  waqfName: string; // Add waqfName
  transactionDate: string; // Add transactionDate
  transactionAmount: number; // Add transactionAmount
  transactionStatus: string; // Add transactionStatus
  additionalInfo?: string; // Optional field for any extra information
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  imageUrl,
  waqfName,
  transactionDate,
  transactionAmount,
  transactionStatus,
  additionalInfo,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    // Navigate to the transaction detail page with the transaction ID
    router.push(`/User/transactions/${id}`); // Adjust the path according to your routing structure
  };

  return (
    <div
      className="flex flex-col p-3 sm:p-4 rounded-lg md:rounded-xl bg-Green text-Tertiary mb-4 cursor-pointer shadow-md hover:shadow-lg transition-shadow h-full"
      onClick={handleCardClick} // Add click handler
    >
      <div className="relative w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4">
        <Image
          loading="lazy"
          src={imageUrl}
          alt={`Image of ${waqfName}`}
          className="object-cover rounded-md md:rounded-lg"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col px-1 sm:px-2 flex-grow">
        <div className="flex flex-wrap gap-2 justify-between items-center w-full text-base sm:text-lg md:text-xl">
          <div className="font-bold">
            <span>{waqfName}</span>
          </div>
          <div className="font-semibold text-sm sm:text-base">
            <span>Status: {transactionStatus}</span>
          </div>
        </div>
        <div className="mt-2 text-xs sm:text-sm">
          <span>Date: {transactionDate}</span>
        </div>
        <div className="mt-1 text-xs sm:text-sm">
          <span>Amount: RM{transactionAmount.toFixed(2)}</span>
        </div>
        {additionalInfo && (
          <div className="mt-1 text-xs sm:text-sm text-gray-400">
            <span>Info: {additionalInfo}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Skeleton Card for Loading State
const TransactionSkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-200 animate-pulse mb-4 h-full min-h-[280px] sm:min-h-[320px]">
      <div className="w-full h-32 sm:h-40 md:h-48 mb-3 sm:mb-4 bg-gray-300 rounded-md md:rounded-lg"></div>
      <div className="flex flex-col px-1 sm:px-2 flex-grow">
        <div className="flex flex-wrap gap-2 justify-between items-center w-full">
          <div className="h-6 w-3/5 bg-gray-300 rounded"></div>
          <div className="h-5 w-1/4 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
        <div className="mt-1 h-4 w-1/3 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

// components/Transactions.tsx
import { useEffect, useState } from 'react';

interface TransactionsProps {
  userId: string | null;
  userType: string | null; // Accept userType as a prop
}

const Transactions: React.FC<TransactionsProps> = ({ userId, userType }) => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!userId) {
        setIsLoading(false);
        setError("User not identified.");
        return;
      }
      
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/transactions/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        const enrichedTransactions = await Promise.all(data.map(async (transaction: { WaqfID: any; transactionDeposited: any; transactionScreened: any; totalScreened: any; transactionTransformed: any; transactionTransfered: any; transactionDate: any; transactionDescription: any; UserID: any; EntityID: any; LandfillsID: any; transactionAmount: any; }) => {
          const waqf = await fetch(`/api/waqfs/${transaction.WaqfID}`); // Fetch Waqf details
          const waqfData = await waqf.json();

          // Determine transaction status
          let transactionStatus = '';
          if (transaction.transactionDeposited == true) {
            transactionStatus = 'Awaiting Screening';
            
            if (transaction.transactionScreened == true) {
                transactionStatus = `Screened: ${transaction.totalScreened}kg`;
                
                if (transaction.transactionTransformed == true) {
                    transactionStatus = 'Ready for Transfer';

                    if (transaction.transactionTransfered == true) {
                        transactionStatus = 'Transferred';
                      } 
                  } 
            } 
          } else {
            transactionStatus = 'Awaiting Deposit';
          }

          return {
            ...transaction,
            waqfName: waqfData.waqfName || 'Waqf Name Unavailable',
            imageUrl: waqfData.imageUrl || '/placeholder-image.png',
            transactionStatus,
          };
        }));

        setTransactions(enrichedTransactions);
      } catch (error: any) {
        console.error('Error fetching transactions:', error);
        setError('Could not load transactions. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(3)].map((_, index) => (
          <TransactionSkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!transactions.length) {
    return <div className="text-gray-500 text-center p-4">No transactions found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          id={transaction.id}
          imageUrl={transaction.imageUrl || '/placeholder-image.png'}
          waqfName={transaction.waqfName}
          transactionDate={new Date(transaction.transactionDate).toLocaleDateString()}
          transactionAmount={transaction.transactionAmount}
          transactionStatus={transaction.transactionStatus}
        />
      ))}
    </div>
  );
};

export default Transactions;