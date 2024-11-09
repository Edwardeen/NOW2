// pages/index.tsx (or wherever your Page component is defined)
import 'tailwindcss/tailwind.css';
import LogoIMG from "../../public/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Header from '@/app/components/header';

export default function Page() {
  const router = useRouter();

  const handleCitySelection = (city: string) => {
    router.push(`/landfills/chooseLandfill?city=${city}`);
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-Green">
      <div className='mx-24'>
        <div className='flex flex-row justify-between items-center my-2'>
          <Header />
          <div className='flex flex-row gap-2'>
            <span className='flex flex-col my-auto text-Tertiary font-extrabold text-4xl'>NOW²</span>
            <Image src={LogoIMG} alt="Logo" height={100} width={100} />
          </div>
        </div>
      </div>
      
      {/* The one below this is for the contents of the body (Cream Box) */}
      <div className='flex flex-col mx-auto w-11/12 h-5/6 items-center gap-2.5 px-[83px] py-[42px] relative bg-Cream rounded-[20px] justify-between'>
        <span className='text-Tertiary font-extrabold text-2xl'>Choose Your City</span>
        <div className='flex flex-row mx-auto gap-20 my-auto'>
          <div className='btn btn-ghost bg-Green w-80 h-80 rounded-2xl' onClick={() => handleCitySelection('Putrajaya')}>
            <span className='text-Tertiary font-extrabold text-2xl'>Putrajaya</span>
          </div>
          <div className='btn btn-ghost bg-Green w-80 h-80 rounded-2xl' onClick={() => handleCitySelection('Kuala Lumpur')}>
            <span className='text-Tertiary font-extrabold text-2xl'>Kuala Lumpur</span>
          </div>
        </div>
      </div>
    </div>
  );
}