import React, { useEffect, useRef } from 'react';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  const sideNavRef = useRef<HTMLDivElement>(null);

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
      >
        <div className="p-4">
        <button onClick={onClose} className="mt-4 text-red-500">Close</button>
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul>
            <li className="py-2"><a href="/link1" className="hover:underline">Link 1</a></li>
            <li className="py-2"><a href="/link2" className="hover:underline">Link 2</a></li>
            <li className="py-2"><a href="/link3" className="hover:underline">Link 3</a></li>
            <li className="py-2"><a href="/link4" className="hover:underline">Link 4</a></li>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default SideNav;