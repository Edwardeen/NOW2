import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import LogoIMG from "../../public/logo.png";
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';

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
  }, [isOpen, handleClickOutside]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={onClose} />
      )}
      <div
        ref={sideNavRef}
        className={`fixed top-0 left-0 w-64 h-full bg-Cream text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col`}
      >
        <div className="p-4 flex flex-col flex-grow justify-between">
          <div>
            <button onClick={onClose} className="mb-4 p-1 text-gray-600 hover:text-gray-800">
              <img
                src="https://img.icons8.com/?size=100&id=40217&format=png&color=000000"
                alt="Close Menu"
                width={24}
                height={24}
              />
            </button>
            <div className='flex flex-col gap-3 sm:gap-4 justify-start items-end mx-2'>
              <Image
                src={LogoIMG}
                alt='logo'
                width={80}
                height={80}
                className='object-contain'
              />
              <h2 className="text-base sm:text-lg font-bold text-Tertiary text-right">Net <br /> Zero <br /> Waste <br /> Wise</h2>
            </div>
          </div>
          <div className='flex flex-col justify-normal items-start mx-4 gap-2 sm:gap-3 mt-8 sm:mt-10 flex-grow'>
            <button className='btn btn-ghost text-Tertiary font-bold text-left w-full justify-start' onClick={() => { router.push('/User/home'); onClose(); }}>Home</button>
            <button className='btn btn-ghost text-Tertiary font-bold text-left w-full justify-start' onClick={() => { router.push('/landfills/chooseArea'); onClose(); }}>Donate</button>
            <button className='btn btn-ghost text-Tertiary font-bold text-left w-full justify-start' onClick={() => { router.push('/User/home'); onClose(); }}>Settings</button>
            <button className='btn btn-ghost text-Tertiary font-bold text-left w-full justify-start' onClick={() => { router.push('/User/home'); onClose(); }}>Credits</button>
          </div>
          <div className='mt-auto pb-4'>
            <button className='btn btn-outline bg-Green justify-center w-full' onClick={handleSignOut}>
              <span className='text-Tertiary'>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;