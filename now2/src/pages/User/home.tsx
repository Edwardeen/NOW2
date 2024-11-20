// components/HomeContent.tsx
"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import LogoIMG from "../../public/logo.png";
import Image from "next/image";
import Header from "@/app/components/header";
import Transactions from "@/app/components/transactionCard";
import History from "@/app/components/historyCard";
import { ChartTotalEmmission } from "@/app/components/chart";

interface HomeContentProps {
  userId: string | null;
  userType: string | null;
  username: string | null;
}

const HomeContent: React.FC<HomeContentProps> = ({ userId, userType, username }) => {
  const router = useRouter();
  const [totalDonations, setTotalDonations] = useState<number>(0);
  const [historyItems, setHistoryItems] = useState<any[]>([]);

  // Fetch total donations
  useEffect(() => {
    const fetchTotalDonations = async () => {
      try {
        const response = await fetch("/api/waqfs/totalDonations");
        if (!response.ok) {
          throw new Error("Failed to fetch total donations");
        }
        const data = await response.json();
        setTotalDonations(data.totalRaised);
      } catch (error) {
        console.error("Error fetching total donations:", error);
      }
    };

    fetchTotalDonations();
  }, []);

  // Fetch history data
  useEffect(() => {
    const fetchHistory = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/history/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch history");
        }
        const data = await response.json();
        setHistoryItems(data);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [userId]);

  const handleSubmit = async () => {
    try {
      const payload = {
        transactionDate: new Date().toISOString(),
        transactionAmount: 100.5,
        transactionType: "Donation",
        transactionDescription: "Test donation",
        LandfillsID: 3,
        WaqfID: 2,
        ScreenerID: 4,
        TransformerID: 5,
      };

      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit transaction.");
      }

      alert("Transaction submitted successfully!");
      router.push("/success"); // Redirect to a success page
    } catch (error: any) {
      console.error(error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col justify-center h-max bg-Green">
      <div className="mx-24">
        <div className="flex flex-row justify-between items-center my-2">
          <Header />
          <div className="flex flex-row gap-2">
            <span className="flex flex-col my-auto text-Tertiary font-extrabold text-4xl">NOW²</span>
            <Image src={LogoIMG} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto w-11/12 h-max mb-20 items-start gap-10 px-[83px] py-[42px] relative bg-Cream rounded-[20px]">
        <div className="flex flex-col gap-5 items-center mx-auto">
          <span className="text-Tertiary font-bold">Welcome {username}!</span>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-Tertiary font-black">Total Donations:</span>
            <span className="text-Primary font-black text-6xl"> RM {totalDonations.toFixed(2)}</span>
          </div>
          <div className="w-full">
            <ChartTotalEmmission />
          </div>
        </div>

        <div className="flex flex-row gap-10 w-full items-center mx-auto">
          <div className="bg-Green w-4/5 h-full rounded-2xl">
            <div className="flex flex-row h-full">
              <div id="Image Picture" className="container w-1/4 h-full bg-Primary rounded-l-2xl"></div>
              <div className="flex flex-col gap-5 items-start m-8 ml-10 w-3/4">
                <span className="text-Tertiary font-bold text-4xl">Start Donating your Trashes Now.</span>
                <span className="text-Tertiary font-normal text-xl w-3/4">
                  The more you recycle, the more you give. What begins as everyday household waste can be transformed into something powerful—money that flows directly to Waqf houses, fueling a wave of good. With every discarded item, you're not just clearing space; you're creating opportunities. Your contributions help fund a multitude of causes, touching lives of all kinds, all ages, all backgrounds. It's a simple act that sparks change, turning waste into a force for collective good.
                </span>
              </div>
            </div>
          </div>

          <div
            className="btn btn-ghost bg-Green text-Tertiary font-extrabold w-1/5 rounded-2xl h-full flex flex-col py-20 cursor-pointer"
            onClick={() => router.push("/landfills/chooseArea")}
          >
            <img
              src="https://img.icons8.com/?size=100&id=60996&format=png&color=000000"
              alt="leaf"
              width={40}
              height={40}
            />
            <span className="mx-auto">Find Landfills near you!</span>
          </div>
        </div>

        <span className="text-Tertiary font-extrabold text-2xl mx-auto">Check Your Transaction:</span>
        <div className="flex flex-col gap-4">
          <Transactions userId={userId} userType={userType} />
        </div>

        <span className="text-Tertiary font-extrabold text-2xl mx-auto">History:</span>
        <div className="flex flex-col mx-auto w-full h-5/6 items-start relative bg-Cream rounded-[20px] overflow-hidden">
          <div className="flex flex-col gap-4 h-full overflow-y-auto">
            <History userId={userId} userType={userType} /> {/* Pass history items to History component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
