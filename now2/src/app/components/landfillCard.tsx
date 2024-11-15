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
          <img
            src={imageUri}
            alt={`Image of ${name}`}
            className="object-contain grow shrink self-start rounded-3xl aspect-[0.79] min-w-[240px] w-[201px]"
          />
          <div className="flex flex-col grow shrink w-[179px]">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="mt-4 font-semibold">{phoneNumber}</p>
            <p className="mt-4">{address}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Dummy data creation
const dummyData = [
  {
    id: '1',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180',
 name: 'Landfill no. 1',
    phoneNumber: '036277-6611',
    address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
  },
  {
    id: '2',
    imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180 ',
    name: 'Landfill no. 2',
    phoneNumber: '036277-6622',
    address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
  },
  {id: '3',
  imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180 ',
  name: 'Landfill no. 3',
  phoneNumber: '036277-6622',
  address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
},
{
  id: '1',
  imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180',
name: 'Landfill no. 1',
  phoneNumber: '036277-6611',
  address: 'Address 1, Kuala Lumpur, Wilayah Persekutuan, 52100',
},
{
  id: '2',
  imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180 ',
  name: 'Landfill no. 2',
  phoneNumber: '036277-6622',
  address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
},
{id: '3',
imageUri: 'https://tse3.mm.bing.net/th?id=OIP.LQhTQBMr_aNk7toQvWk4NQHaEb&pid=Api&P=0&h=180 ',
name: 'Landfill no. 3',
phoneNumber: '036277-6622',
address: 'Address 2, Kuala Lumpur, Wilayah Persekutuan, 52100',
},  
// Add more landfills as needed
];

// Component to render all landfill cards
const Landfills: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {dummyData.map((landfill) => (
        <LandfillCard
          key={landfill.id}
          id={landfill.id}
          imageUri={landfill.imageUri}
          name={landfill.name}
          phoneNumber={landfill.phoneNumber}
          address={landfill.address}
        />
      ))}
    </div>
  );
};

export default Landfills;