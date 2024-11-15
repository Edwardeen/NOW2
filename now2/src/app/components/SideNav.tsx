import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import LogoIMG from "../../public/logo.png";
import { useRouter } from 'next/router';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" />
      )}
      <div
        ref={sideNavRef}
        className={`fixed top-0 left-0 w-64 h-full bg-Cream text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}
      >{/* Logo & Name */}
        <div className="p-4 flex flex-col h-full justify-between">
          <div>
            <button onClick={onClose} className="mt-4">
            <img
                src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
                alt="backbutton"
                width={24}
                height={24}
                />
            </button>
            <div className='flex flex-col gap-5 justify-start items-end mx-2'>
              <Image
                src={LogoIMG}
                alt='logo'
                width={100}
                height={100}
                />
              <h2 className="text-lg font-bold text-Tertiary justify-end text-end">Net <br /> Zero <br /> Waste <br /> Wise</h2>
            </div>
          </div>
        {/* The Navigations for SideBar */}

          <div className='flex flex-col justify-normal items-start mx-4 gap-4 mt-10'>
            <span className='btn btn-ghost text-Tertiary font-bold' onClick={() => router.push('/User/home')}>Home</span>
            <span className='btn btn-ghost text-Tertiary font-bold' onClick={() => router.push('/landfills/landfills-chooseArea')}>Donate</span>
            <span className='btn btn-ghost text-Tertiary font-bold' onClick={() => router.push('/User/home')}>Settings</span>
            <span className='btn btn-ghost text-Tertiary font-bold' onClick={() => router.push('/User/home')}>Credits</span>
          </div>
          <div className='btn btn-outline bg-Green justify-center mt-auto' onClick={() => router.push('/login')}>
            <span className='text-Tertiary'>Logout</span>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default SideNav;