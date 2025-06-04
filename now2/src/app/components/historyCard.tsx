import React, { useState, useEffect } from "react";
import Image from "next/image";
import { jsPDF } from "jspdf";
import axios from "axios";
import LogoIMG from "../../../src/public/logo.png"; // Import the logo

interface HistoryCardProps {
  id: string;
  // imageUrl: string; // Removed unused prop
  waqfName: string;
  historyDate: string;
  totalTransferred: number;
  historyDescription: string;
  landfillName: string;
  userId: string;
  userType: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  id,
  // imageUrl,
  waqfName,
  historyDate,
  totalTransferred,
  historyDescription,
  landfillName,
  userId,
  userType,
}) => {
  const [isLoadingPDF, setIsLoadingPDF] = useState(false);

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
    if (isLoadingPDF) return;
    setIsLoadingPDF(true);
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
      const pageWidth = doc.internal.pageSize.width;
      const margin = 15;
      const contentWidth = pageWidth - margin * 2;
      const labelIndent = 40; // Indentation for values after labels
      const sectionSpacing = 10;
      const itemSpacing = 6; // Spacing between label/value lines
      const logoHeight = 15; // Define logo height in mm
      const logoWidth = 15; // Define logo width in mm
      let y = margin;

      // --- Document Header ---
      // Add actual logo
      try {
        // Assuming LogoIMG.src is a usable path or data URL
        doc.addImage(LogoIMG.src, 'PNG', margin, y, logoWidth, logoHeight);
      } catch (imgError) {
          console.error("Error adding logo to PDF:", imgError);
          doc.setFontSize(8).setFont("helvetica", "italic").text("[Logo Error]", margin, y + logoHeight / 2);
      }
      const headerStartY = y; // Remember starting y for right-aligned text
      y += logoHeight + 5; // Move down after logo + spacing

      // Company Info (Right Aligned) - Adjust y relative to header start
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      const companyInfo = [
        "WBC Platform",
      ];
      doc.text(companyInfo, pageWidth - margin, headerStartY, { align: "right" }); // Align with top of logo
      // y remains below the logo

      // Main Title
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("Official Transaction Receipt", pageWidth / 2, y, { align: "center" });
      y += sectionSpacing;

      // Receipt Number and Date
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Receipt No: HIST-${id}`, margin, y);
      doc.text(`Date Issued: ${new Date().toLocaleDateString()}`, pageWidth - margin, y, { align: "right" });
      y += itemSpacing * 1.5;

      // --- Transaction Summary Section ---
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageWidth - margin, y); // Separator line
      y += itemSpacing;

      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Transaction Summary", margin, y);
      y += itemSpacing;

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");

      // Helper to add Label: Value pairs with wrapping and dynamic indent
      const addDetailLine = (label: string, value: string | number) => {
        const valueStr = typeof value === 'number' ? value.toString() : value;
        const labelText = `${label}:`; // Include colon for width calculation
        const valueBuffer = 2; // Small gap (mm) between label and value

        // Calculate actual label width
        doc.setFont("helvetica", "bold");
        const labelWidth = doc.getTextWidth(labelText);
        doc.setFont("helvetica", "normal"); // Reset font for value

        const valueStartX = margin + labelWidth + valueBuffer; // Start value after label + buffer
        const valueMaxWidth = contentWidth - (labelWidth + valueBuffer); // Max width for value

        // Split the value text into lines based on calculated max width
        const splitValue: string[] = doc.splitTextToSize(valueStr, valueMaxWidth);
        const valueHeight = splitValue.length * itemSpacing; // Calculate height needed

        // Draw the label
        doc.setFont("helvetica", "bold");
        doc.text(labelText, margin, y);
        doc.setFont("helvetica", "normal");

        // Draw the potentially multi-line value
        doc.text(splitValue, valueStartX, y); // Use calculated start X

        // Increment y based on the calculated height of the value
        y += valueHeight; // Use calculated height
        y += itemSpacing * 0.3; // Add small consistent buffer after each line
      };
      
      addDetailLine("Waqf Organization", waqfName);
      addDetailLine("Receiving Landfill", landfillName);
      addDetailLine("Transaction Date", new Date(historyDate).toLocaleDateString()); // Format date
      
      // --- Special handling for Description and Amount to prevent overlap ---
      addDetailLine("Transaction Description", historyDescription);
      
      // Add a clear buffer *after* the description before the amount line
      y += itemSpacing * 1.5; // Use 1.5 times itemSpacing as a buffer

      // Highlight Amount
      doc.setFont("helvetica", "bold");
      doc.text("Total Amount Transferred:", margin, y);
      doc.setFontSize(12); // Slightly larger font for amount
      // Adjust alignment/maxWidth slightly for amount value to prevent overlap with label
      doc.text(`RM ${totalTransferred.toFixed(2)}`, pageWidth - margin, y, { align: "right" }); // Align to page margin
      y += itemSpacing * 1.5;
      doc.setFontSize(11); // Reset font size

      // --- Participant Details Section ---
      if (userType === "user" || userType === "entity") {
        doc.setLineWidth(0.3);
        doc.line(margin, y, pageWidth - margin, y); // Separator line
        y += itemSpacing;

        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text(`Transaction Initiated By (${userType === "user" ? "User" : "Entity"} Details)`, margin, y);
        y += itemSpacing;

        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");

        const details = userType === "user"
          ? await getUserData(parseInt(userId))
          : await getEntityData(parseInt(userId));

        if (details) {
          delete details.password; // Remove sensitive information
          delete details.id;

          // Define relevant fields for the receipt (adjust as needed)
          const relevantFields = [
            { key: "frontName", label: "First Name" },
            { key: "familyName", label: "Family Name" },
            // { key: "icNumber", label: "IC Number" }, // Consider if needed on receipt
            // { key: "dateOfBirth", label: "Date of Birth" }, // Consider if needed
            { key: "phoneNumber", label: "Phone Number" },
            { key: "email", label: "Email" },
            { key: "address", label: "Address" },
            { key: "city", label: "City" },
            { key: "province", label: "Province" },
            { key: "zipCode", label: "Zip Code" },
            { key: "country", label: "Country" }
          ];

          relevantFields.forEach(({ key, label }) => {
            if (details[key]) {
              addDetailLine(label, details[key].toString());
            }
          });
        } else {
           addDetailLine("Details", "Could not be retrieved.");
        }
        y += itemSpacing; // Add extra space after details
      }

      // --- Footer Section ---
      doc.setLineWidth(0.3);
      doc.line(margin, y, pageWidth - margin, y); // Separator line
      y += itemSpacing;

      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      const footerText = "This receipt confirms the transaction details recorded in the WBC system. Generated on: " + new Date().toLocaleString();
      doc.text(footerText, pageWidth / 2, y, { align: "center", maxWidth: contentWidth });

      // Save the PDF
      doc.save(`WBC_Receipt_HIST-${id}.pdf`);

    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate receipt PDF.");
    } finally {
      setIsLoadingPDF(false);
    }
  };
  
  // JSX remains largely the same, but here's a cleaner version:
  return (
    <div
      className={`relative flex flex-col p-3 sm:p-4 rounded-lg md:rounded-xl bg-Green text-Tertiary mb-4 shadow-md hover:shadow-lg transition-shadow h-full min-h-[180px] sm:min-h-[200px] ${isLoadingPDF ? 'cursor-wait' : 'cursor-pointer'}`}
      onClick={handleCardClick}
    >
      {isLoadingPDF && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg md:rounded-xl z-10">
          <span className="loading loading-spinner loading-md text-white"></span>
        </div>
      )}
      <div className="flex flex-col gap-1 sm:gap-2 flex-grow">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">{waqfName}</h2>
        <h3 className="font-semibold text-base sm:text-lg md:text-xl">{landfillName}</h3>
        <p className="text-sm sm:text-base">Date: {historyDate}</p>
        <p className="text-sm sm:text-base">Amount: RM{totalTransferred.toFixed(2)}</p>
        <p className="text-xs sm:text-sm text-Cream mt-auto pt-1">Receipt ID: HIST-{id}</p>
      </div>
    </div>
  );
};

// Skeleton Card for History Loading State
const HistorySkeletonCard: React.FC = () => {
  return (
    <div className="flex flex-col p-3 sm:p-4 rounded-lg md:rounded-xl bg-gray-200 animate-pulse mb-4 h-full min-h-[180px] sm:min-h-[200px]">
      <div className="flex flex-col gap-2 sm:gap-3 flex-grow">
        <div className="h-6 w-4/5 bg-gray-300 rounded"></div> 
        <div className="h-5 w-3/5 bg-gray-300 rounded"></div> 
        <div className="h-4 w-1/2 bg-gray-300 rounded"></div> 
        <div className="h-4 w-1/3 bg-gray-300 rounded"></div> 
        <div className="h-3 w-1/4 bg-gray-300 rounded mt-auto"></div>
      </div>
    </div>
  );
};

// app/components/Histories.tsx

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
  // imageUrl: string; // Removed unused field
}

const Histories: React.FC<HistoriesProps> = ({ userId, userType }) => {
  const [histories, setHistories] = useState<HistoryItem[]>([]);
  // const [waqfDataMap, setWaqfDataMap] = useState<Record<string, WaqfData>>({}); // Removed
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistories = async () => {
      if (!userId) { // Handle missing userId
         setLoading(false);
         setError("User not identified.");
         return;
      }

      setLoading(true);
      setError(null);

      try {
        // Fetch history data - Assume API returns all needed fields
        // TODO: Ensure /api/history/:userId returns waqfName, landfillName etc.
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
           const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || 'Failed to fetch histories');
        }
        const data = await response.json();

        // Removed second fetch for Waqf data
        
        // Directly map the data if API returns correct structure
        const formattedHistories = data.map((history: any) => ({
          id: history.id,
          waqfName: history.WaqfName || 'N/A', // Use fallbacks
          historyDate: history.historyDate,
          totalTransferred: history.totalTransferred,
          historyDescription: history.historyDescription || '',
          landfillName: history.LandfillName || 'N/A',
        }));

        setHistories(formattedHistories);
        // setWaqfDataMap(waqfDataMap); // Removed
      } catch (error: any) {
        console.error('Error fetching histories:', error);
        setError('Could not load histories. Please try again later.');
        setHistories([]); // Clear histories on error
      } finally {
        setLoading(false);
      }
    };

    fetchHistories();
  }, [userId]); // Re-fetch if userId changes

  if (loading) {
    // Use Skeleton Loaders
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, index) => (
                <HistorySkeletonCard key={index} />
            ))}
        </div>
     );
  }

  if (error) {
    // Centered error message
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (!histories.length) {
    // Centered empty state message
    return <div className="text-gray-500 text-center p-4">No history records found.</div>;
  }

  return (
    // Use responsive grid layout
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {histories.map((history) => (
        // Ensure userId and userType are valid before rendering HistoryCard
        // userType might not be strictly needed by HistoryCard itself unless PDF logic uses it
        userId && userType && (
          <HistoryCard
            key={history.id}
            id={history.id}
            // imageUrl={history.imageUrl} // Removed
            waqfName={history.waqfName}
            historyDate={new Date(history.historyDate).toLocaleDateString()} // Format date
            totalTransferred={history.totalTransferred}
            historyDescription={history.historyDescription}
            landfillName={history.landfillName}
            userId={userId} // Pass userId
            userType={userType} // Pass userType
          />
        )
      ))}
    </div>
  );
};

export default Histories;
