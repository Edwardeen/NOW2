// components/CauseCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CauseCardProps {
  id: string;
  imageUri: string;
  name: string;
  phoneNumber: string;
  address: string;
  cause: string;
}

const CauseCard: React.FC<CauseCardProps> = ({ id, imageUri, name, phoneNumber, address, cause }) => {
  return (
    <Link href={`/waqfs/${id}`}>
      <div className="flex flex-col justify-center p-4 rounded-3xl bg-Green text-zinc-800 mb-4 cursor-pointer max-w-[550px]">
        <Image
          loading="lazy"
          src={imageUri}
          alt={`Image of ${name}`}
          className="object-contain rounded-3xl aspect-[3.04] w-full"
          width={600} // Adjust wid th as needed
          height={200} // Adjust height as needed
        />
        <div className="flex flex-col px-4 mt-4">
          <div className="flex flex-wrap gap-10 justify-between items-center w-full text-3xl">
            <div className="self-stretch my-auto font-bold">
              <span>{name}</span>
            </div>
            <div className="self-stretch my-auto font-semibold">
              <span>{phoneNumber}</span>
            </div>
          </div>
          <div className="mt-5">
            <span>{address}</span>
          </div>
          <div className="mt-5 font-semibold">
            <span>Cause: {cause}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Dummy data creation
const dummyCauseData = [
  {
    id: '1',
    imageUri: 'https://th.bing.com/th/id/OIP.ci1E7m8wCISyHZ6um8z01gHaDt?w=337&h=175&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    name: 'Cause no. 1',
    phoneNumber: '036277-6611',
    address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
    cause: 'Environmental Awareness',
  },
  {
    id: '2',
    imageUri: 'https://th.bing.com/th/id/OIP.8AAZXg4tC_EX2Ol6Zk3jfQHaE5?w=302&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    name: 'Cause no. 2',
    phoneNumber: '036277-6622',
    address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
    cause: 'Waste Reduction',
  },
  // Add more causes as needed
];

// Component to render all cause cards
const Causes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dummyCauseData.map((cause) => (
        <CauseCard
          key={cause.id}
          id={cause.id}
          imageUri={cause.imageUri}
          name={cause.name}
          phoneNumber={cause.phoneNumber}
          address={cause.address}
          cause={cause.cause}
        />
      ))}
    </div>
  );
};

export default Causes;