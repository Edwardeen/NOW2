import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SideNav from './SideNav';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full bg-stone-300 min-h-[40px] rounded-lg md:rounded-xl lg:rounded-2xl">
        <div className="flex flex-row gap-4 sm:gap-6 justify-around items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="btn btn-ghost p-2" onClick={toggleNav}>
            <Image
              id='NavSide'
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a838a0e3e7a30c7c3a5843100bd198ab68d63ff1e957ba82cf5f3ff67e1206a4?apiKey=ca09dd87004c45a6bc6f8569245d5eaa&"
              alt="Menu Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 h-5 w-5 sm:h-6 sm:w-6"
            />
          </div>
          <div className="btn btn-ghost p-2" onClick={() => router.push('/User/home')}>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05adc747696cb083bf4d95d598b6fc127ee1991b0e88f61e3e0d40ed6b51b6cb?apiKey=ca09dd87004c45a6bc6f8569245d5eaa&"
              alt="Home Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 h-5 w-5 sm:h-6 sm:w-6"
            />
          </div>
          <div className="btn btn-ghost p-2" onClick={handleBack}>
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/167f7684b68c467f8d70807e2d68078559103884e28eb994b1dd5309bcd0b1be?apiKey=ca09dd87004c45a6bc6f8569245d5eaa&"
              alt="Back Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 h-5 w-5 sm:h-6 sm:w-6"
            />
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      <SideNav isOpen={isNavOpen} onClose={toggleNav} />
    </div>
  );
};

export default Header;