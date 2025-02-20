

import React from "react";
import Image from "next/image";
import { jsPDF } from "jspdf";
import axios from "axios"

interface HistoryCardProps {
  id: string;
  imageUrl: string;
  waqfName: string;
  historyDate: string;
  totalTransferred: number;
  historyDescription: string;
  landfillName: string;
  userId: string;
  userType: string ;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  id,
  imageUrl,
  waqfName,
  historyDate,
  totalTransferred,
  historyDescription,
  landfillName,
  userId,
  userType,
}) => {

  const getUserData = async (id : number) => {
    try {
      const response = await axios.get(`/api/user/getUser/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }

  const getEntityData = async (id : number) => {
    try {
      const response = await axios.get(`/api/entity/getEntity/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching entity data:", error);
      return null;
    }
  }

  const handleCardClick = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let y = margin;
  
    // Header Section
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("RECEIPT", pageWidth / 2, y, { align: "center" });
    y += 15;
  
    // Receipt Info
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Receipt No: HIST-${id}`, pageWidth - margin, y, { align: "right" });
    y += 10;
    doc.text(`Date: ${new Date().toLocaleDateString()}`, pageWidth - margin, y, { align: "right" });
    y += 15;
  
    // Horizontal Line
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
  
    // Transaction Details Section
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Transaction Details", margin, y);
    y += 10;
  
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    
    // Create a two-column layout for transaction details
    const leftColumnX = margin;
    const rightColumnX = pageWidth / 2;
    
    doc.text("Waqf Name:", leftColumnX, y);
    doc.text(waqfName, leftColumnX + 30, y);
    
    doc.text("Landfill Name:", rightColumnX, y);
    doc.text(landfillName, rightColumnX + 30, y);
    y += 10;
  
    doc.text("Transaction Date: ", leftColumnX, y);
    doc.text(historyDate, leftColumnX + 30, y);
    y += 15;
  
    // Amount Section
    doc.setFont("helvetica", "bold");
    doc.text("Amount Transferred:", leftColumnX, y);
    doc.setFont("helvetica", "normal");
    doc.text(`RM ${totalTransferred.toFixed(2)}`, leftColumnX + 50, y);
    y += 10;
  
    doc.text("Description:", leftColumnX, y);
    doc.text(historyDescription, leftColumnX + 30, y, { maxWidth: pageWidth - (margin * 2) - 30 });
    y += 15;
  
    // User/Entity Details Section
if (userType === "user" || userType === "entity") {
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(`${userType === "user" ? "User" : "Entity"} Details`, margin, y);
  y += 10;

  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");

  const details = userType === "user" 
    ? await getUserData(parseInt(userId))
    : await getEntityData(parseInt(userId));

  if (details) {
    delete details.password; // Remove sensitive information
    delete details.id;

    // Define the specific order of fields we want to display
    const fieldOrder = [
      { key: "frontName", label: "First Name" },
      { key: "familyName", label: "Family Name" },
      { key: "icNumber", label: "IC Number" },
      { key: "dateOfBirth", label: "Date of Birth" },
      { key: "phoneNumber", label: "Phone Number" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address" },
      { key: "city", label: "City" },
      { key: "province", label: "Province" },
      { key: "zipCode", label: "Zip Code" },
      { key: "country", label: "Country" }
    ];

    // Display only the specified fields in the defined order
    fieldOrder.forEach(({ key, label }) => {
      if (details[key]) { // Only show if the field exists in the data
        doc.text(`${label}:`, leftColumnX, y);
        const value = details[key].toString(); // Ensure value is a string
        doc.text(value, leftColumnX + 30, y, { maxWidth: pageWidth - (margin * 2) - 30 });
        y += 7;
      }
    });
  }
}
  
    // Footer Section
    y += 10;
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for your transaction", pageWidth / 2, y, { align: "center" });
    
    // Save the PDF
    doc.save(`Receipt_HIST-${id}.pdf`);
  };
  
  // JSX remains largely the same, but here's a cleaner version:
  return (
    <div
      className="flex flex-col p-4 rounded-3xl bg-Green text-Tertiary mb-4 cursor-pointer max-w-[550px] h-72"
      onClick={handleCardClick}
    >
      <div className="flex flex-col px-4 mt-4 gap-4">
        <h2 className="font-bold text-3xl">{waqfName}</h2>
        <h3 className="font-semibold text-2xl">{landfillName}</h3>
        <p className="text-xl">Date: {historyDate}</p>
        <p className="text-xl">Amount: RM{totalTransferred.toFixed(2)}</p>
        <p className="text-sm">Receipt ID: {id}</p>
      </div>
    </div>
  );
};




// app/components/Histories.tsx
import { useEffect, useState } from 'react';

interface HistoriesProps {
  userId: string | null;
  userType: string | null;
}

interface HistoryItem {
  id: string;
  waqfName: string;
  historyDate: string;
  totalTransferred: number;
  historyDescription: string;
  landfillName: string;
  imageUrl: string;
}

interface WaqfData {
  waqfName: string;
  imageUrl: string;
}

const Histories: React.FC<HistoriesProps> = ({ userId, userType }) => {
  const [histories, setHistories] = useState<HistoryItem[]>([]);
  const [waqfDataMap, setWaqfDataMap] = useState<Record<string, WaqfData>>({});
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log('userId:', userId);
  console.log('userType:', userType);

  useEffect(() => {
    const fetchHistories = async () => {
      if (!userId) return;

      setLoading(true);
      setError(null);

      try {
        // Fetch history data
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch histories');
        }
        const data = await response.json();

        // Extract unique Waqf names
        const waqfNames = Array.from(new Set(data.map((history: any) => history.WaqfName)));

        // Fetch all Waqf data in a single call
        const waqfResponse = await fetch(`/api/waqfs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ waqfNames }),
        });

        if (!waqfResponse.ok) {
          throw new Error('Failed to fetch Waqf data');
        }

        const waqfDataArray: WaqfData[] = await waqfResponse.json();

        // Create a map of Waqf data for quick lookup
        const waqfDataMap = waqfDataArray.reduce((map, waqf) => {
          map[waqf.waqfName] = waqf;
          return map;
        }, {} as Record<string, WaqfData>);

        // Enrich history data with Waqf data
        const enrichedHistories = data.map((history: any) => {
          const waqfData = waqfDataMap[history.WaqfName] || {};
          return {
            id: history.id,
            waqfName: history.WaqfName,
            imageUrl: waqfData.imageUrl || '',
            historyDate: history.historyDate,
            totalTransferred: history.totalTransferred,
            historyDescription: history.historyDescription,
            landfillName: history.LandfillName,
          };
        });

        setHistories(enrichedHistories);
        setWaqfDataMap(waqfDataMap);
      } catch (error: any) {
        console.error('Error fetching histories:', error);
        setError('Could not load histories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, [userId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading history...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!histories.length) {
    return <div className="text-center text-gray-500">No history records found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {histories.map((history) => (
        userId && (
          <HistoryCard
            key={history.id}
            id={history.id}
            imageUrl={history.imageUrl}
            waqfName={history.waqfName}
            historyDate={new Date(history.historyDate).toLocaleDateString()}
            totalTransferred={history.totalTransferred}
            historyDescription={history.historyDescription}
            landfillName={history.landfillName}
            userId={userId}
            userType={userType || ''}
          />
        )
      ))}
    </div>
  );
};

export default Histories;
