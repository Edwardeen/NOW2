import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface CheckTransactionProps {
  userId: string; // Accept userId as a prop
}

const CheckTransaction: React.FC<CheckTransactionProps> = ({ userId }) => {
  const router = useRouter();
  const { landfillId, waqfId } = router.query;

  const [landfill, setLandfill] = useState<any>(null);
  const [waqf, setWaqf] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!landfillId || !waqfId) return; // Ensure IDs are present before fetching

        const [landfillRes, waqfRes] = await Promise.all([
          fetch(`/api/landfills/${landfillId}`),
          fetch(`/api/waqfs/${waqfId}`)
        ]);

        if (!landfillRes.ok || !waqfRes.ok) {
          throw new Error("Failed to fetch data.");
        }

        setLandfill(await landfillRes.json());
        setWaqf(await waqfRes.json());
      } catch (error: any) {
        console.error(error);
        setError("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, [landfillId, waqfId]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/finalize-transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ landfillId, waqfId, userId }), // Use userId from props
      });

      if (!response.ok) {
        throw new Error("Failed to submit transaction.");
      }

      alert("Transaction submitted successfully!");
      router.push("/success"); // Redirect to a success page
    } catch (error: any) {
      console.error(error);
      setError("Failed to submit transaction.");
    }
  };

  if (error) return <div className="text-red-500">{error}</div>;

  if (!landfill || !waqf) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Review Your Submission</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Landfill Details</h2>
        <p><strong>Name:</strong> {landfill.landfillName}</p>
        <p><strong>Phone:</strong> {landfill.landfillPhoneNumber}</p>
        <p><strong>Address:</strong> {landfill.landfillAddress}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Waqf Details</h2>
        <p><strong>Name:</strong> {waqf.waqfName}</p>
        <p><strong>Phone:</strong> {waqf.waqfPhoneNumber}</p>
        <p><strong>Address:</strong> {waqf.waqfAddress}</p>
        <p><strong>Total Raised:</strong> {waqf.totalRaised}</p>
      </div>
      <button
        onClick ={handleSubmit}
        className="mt-6 bg-green-600 text-white py-2 px-4 rounded"
      >
        Confirm and Submit
      </button>
    </div>
  );
};

export default CheckTransaction;