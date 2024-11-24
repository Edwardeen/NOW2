import React, {useState, useEffect} from "react";
import Image from "next/image";
import LogoIMG from "../../public/logo.png";
import 'tailwindcss/tailwind.css';
import CardForm from "@/app/components/screenerCardForm";

export default function Home() {
  
  interface Transaction {
    id: number;
    transactionDate: string;
    transactionAmount: number;
    transactionType: string;
    transactionStatus: string;
    transactionDescription: string;
    UserID: number;
    EntityID: number | null;
    transactionDeposited: boolean;
    transactionScreened: boolean;
    transactionTransfered: boolean;
    transactionTransformed: boolean;
    totalScreened: number;
    LandfillsID: number;
    WaqfID: number;
    ScreenerID: number | null;
    TransformerID: number | null;
    User: {
      id: number;
      email: string;
      address: string;
      city: string;
      country: string;
      dateofbirth: string | null;
      familyName: string;
      frontName: string;
      icNumber: number;
      phoneNumber: string;
      province: string;
      username: string;
      zipCode: number;
      password: string;
    };
    Entity: any | null;
  }

  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch('/api/transactions/getAll')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  


  return (
    <div className="flex flex-col justify-center bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <Image src={LogoIMG} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>
    
      <div className='justify-center my-2 mx-10'>
        <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>Screener</span>
        
        <div className="grid grid-cols-4 w-full gap-5">
        {data.filter((item) => !(item.transactionDeposited && item.transactionScreened)).map((item) => (
          <CardForm key={item.id} data={item} />
        ))}
        </div>
      </div>

      
    </div>
  );
}