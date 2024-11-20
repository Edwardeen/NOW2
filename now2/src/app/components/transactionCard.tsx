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
      className="flex flex-col p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer max-w-[550px] h-96"
      onClick={handleCardClick} // Add click handler
    >
      <Image
        loading="lazy"
        src={imageUrl}
        alt={`Image of ${waqfName}`}
        className="object-cover h-1/3 rounded-3xl w-full"
        width={600}
        height={100}
      />
      <div className="flex flex-col px-4 mt-4">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full text-3xl">
          <div className="self-stretch my-auto font-bold">
            <span>{waqfName}</span>
          </div>
          <div className="self-stretch my-auto font-semibold">
            <span>Status: {transactionStatus}</span>
          </div>
        </div>
        <div className="mt-5">
          <span>Transaction Date: {transactionDate}</span>
        </div>
        <div className="mt-5">
          <span>Transaction Amount: RM{transactionAmount.toFixed(2)}</span>
        </div>
        {additionalInfo && (
          <div className="mt-5">
            <span>Additional Info: {additionalInfo}</span>
          </div>
        )}
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

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/transactions/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch transactions');
        }
        const data = await response.json();
        const enrichedTransactions = await Promise.all(data.map(async (transaction: { WaqfID: any; transactionDeposited: any; transactionScreened: any; totalScreened: any; transactionTransformed: any; transactionTransfered: any; transactionDate: any; transactionDescription: any; UserID: any; EntityID: any; LandfillsID: any; transactionAmount: any; }) => {
          const waqf = await fetch(`/api/waqfs/${transaction.WaqfID}`); // Fetch Waqf details
          const waqfData = await waqf.json();
          console.log('User ID', {userId})
          // Determine transaction status
          let transactionStatus = '';
          if (transaction.transactionDeposited == true) {
            transactionStatus = 'Awaiting Screening';
            
            if (transaction.transactionScreened == true) {
                transactionStatus = `Screened for ${transaction.totalScreened}, awaiting Transformer`;
                
                if (transaction.transactionTransformed == true) {
                    transactionStatus = 'Awaiting Transfer';

                    if (transaction.transactionTransfered == true) {
                        // Logic to send data to History table
                        await fetch('/api/history', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            historyDate: transaction.transactionDate,
                            historyDescription: transaction.transactionDescription,
                            UserID: transaction.UserID,
                            EntityID: transaction.EntityID,
                            LandfillName: transaction .LandfillsID, // Assuming you have a way to get the landfill name
                            WaqfName: waqfData.waqfName,
                            totalTransferred: transaction.transactionAmount,
                          }),
                        });
                        transactionStatus = 'Transferred';
                      } 
                  } 
            } 
          } else {
            transactionStatus = 'Awaiting Deposit';
          }

          return {
            ...transaction,
            waqfName: waqfData.waqfName,
            imageUrl: waqfData.imageUrl,
            transactionStatus,
          };
        }));

        setTransactions(enrichedTransactions);
      } catch (error: any) {
        console.error('Error fetching transactions:', error);
        setError('Could not load transactions. Please try again later.');
      }
    };

    fetchTransactions();
  }, [userId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!transactions.length) {
    return <div>No transactions found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          id={transaction.id}
          imageUrl={transaction.imageUrl}
          waqfName={transaction.waqfName}
          transactionDate={new Date(transaction.transactionDate).toLocaleDateString()} // Format date
          transactionAmount={transaction.transactionAmount}
          transactionStatus={transaction.transactionStatus}
        />
      ))}
    </div>
  );
};

export default Transactions;