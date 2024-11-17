// components/LandfillCard.tsx
import React from 'react';
import Link from 'next/link';

interface LandfillCardProps {
  id: string;
  imageUri: string;
  name: string;
  phoneNumber: string;
  address: string;
}

const LandfillCard: React.FC<LandfillCardProps> = ({ id, imageUri, name, phoneNumber, address }) => {
  return (
    <Link href={`/landfills/${id}`}>
      <div className="flex flex-col justify-center p-4 text-xl rounded-3xl bg-Green text-Tertiary cursor-pointer">
        <div className="flex flex-wrap flex-1 gap-7">
          <iframe
            src={imageUri}
            className="object-contain grow shrink self-start rounded-3xl aspect-[0.79] min-w-[240px] w-[201px]"
          />
          <div className="flex flex-col grow shrink w-[179px]">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-4 font-semibold">{phoneNumber}</p>
            <p className="mt-4 text-m">{address}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandfillCard;