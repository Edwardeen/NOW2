import React from 'react';

// Define the types for the WaqfCard data
interface WaqfCardData {
  id: string;
  imageUri: string;
  title: string;
  date: string;
}

const data = [
  {
    id: '1',
    imageUri: 'https://www.homestratosphere.com/wp-content/uploads/2018/07/green-house-example2018-07-09-at-5.03.11-PM-31.jpg',
    title: 'Waqf Title 1',
    date: '2023-01-01',
  },
  {
    id: '2',
    imageUri: 'https://c8.alamy.com/comp/DT40B2/traditional-chinese-house-DT40B2.jpg',
    title: 'Waqf Title 2',
    date: '2023-01-02',
  },
  // Add more data as needed
];

const HomePage = () => {
  return (
    <div>
      <WaqfCardList data={data} />
    </div>
  );
};

// Define the props for the WaqfCardList component
interface WaqfCardListProps {
  data: WaqfCardData[];
}

// WaqfCardList component
const WaqfCardList: React.FC<WaqfCardListProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item) => (
        <WaqfCard
          key={item.id}
          imageUri={item.imageUri}
          title={item.title}
          date={item.date}
        />
      ))}
    </div>
  );
};

// Define the props for the WaqfCard component
interface WaqfCardProps {
  imageUri: string;
  title: string;
  date: string;
}

// WaqfCard component
const WaqfCard: React.FC<WaqfCardProps> = ({ imageUri, title, date }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-Green max-w-[300px]">
      <img
        loading="lazy"
        src={imageUri}
        alt={title}
        className="object-contain w-max h-3/4 rounded-t-3xl overflow-hidden"
      />
      <div className="flex flex-row gap-6 justify-center my-8 w-full mx-auto">
        <div className="text-xl text-Tertiary w-[188px]">
          <p>{title}</p>
        </div>
        <div className="text-xs font-extrabold text-center text-Tertiary">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;