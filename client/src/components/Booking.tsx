import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Hotel {
  address: string;
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
}

const rooms: Room[] = [
  { id: 1, name: 'Ocean View Room', description: 'A beautiful room with an ocean view.', price: 200, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Garden Room', description: 'A peaceful room with a garden view.', price: 150, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Suite', description: 'A luxurious suite with all amenities.', price: 300, imageUrl: 'https://via.placeholder.com/300' },
];

const RoomsGallery: React.FC = () => {
  const [data, setData] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const generateContent = () => {
    return data.map((hotel) => (
      <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{hotel.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{hotel.address}</p>
            <p className="text-gray-800 dark:text-gray-200">${hotel.price} / night</p>
          </div>
        </div>
      </Link>
    ));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/hotels', {
          method: "POST",
        });
        
        const dbData = await response.json();
        setData(dbData);
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false);  // Set loading to false even if there is an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Rooms Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? <p>Loading...</p> : generateContent()}
        </div>
      </div>
    </div>
  );
};

export default RoomsGallery;
