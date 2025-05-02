// components/LandfillCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LandfillCardProps {
  id: string;
  imageUri: string;
  name: string;
  phoneNumber: string;
  address: string;
}

const LandfillCard: React.FC<LandfillCardProps> = ({ id, imageUri, name, phoneNumber, address }) => {
  return (
    <Link href={`/landfills/${id}`} className="block h-full">
      <div className="flex flex-col p-3 sm:p-4 h-full rounded-lg md:rounded-xl bg-Green text-Tertiary shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative w-full aspect-video mb-3 sm:mb-4 overflow-hidden rounded-md md:rounded-lg">
          <iframe
            src={imageUri || ''}
            title={`${name || 'Landfill'} Location Preview`}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col flex-grow">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 truncate">{name}</h1>
          <p className="text-sm sm:text-base font-semibold mb-1 truncate">{phoneNumber}</p>
          <p className="text-xs sm:text-sm mt-1 flex-grow">{address}</p>
        </div>
      </div>
    </Link>
  );
};

export default LandfillCard;