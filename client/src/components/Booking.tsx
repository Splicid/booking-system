import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const rooms: Room[] = [
  { id: 1, name: 'Ocean View Room', description: 'A beautiful room with an ocean view.', price: 200, imageUrl: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Garden Room', description: 'A peaceful room with a garden view.', price: 150, imageUrl: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Suite', description: 'A luxurious suite with all amenities.', price: 300, imageUrl: 'https://via.placeholder.com/300' },
];


const RoomsGallery: React.FC = () => {
  const [data, setData] = useState({});


  const generateContent = () => {
    console.log(data)
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response =  await fetch('http://127.0.0.1:5000/hotels', {
          method: "POST",
        })
        
        const dbData = await response.json();
        setData(dbData)
        generateContent()
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, []); 

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Rooms Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <img src={room.imageUrl} alt={room.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{room.name}</h2>
                <p className="mb-2">{room.description}</p>
                <p className="font-bold">${room.price} per night</p>
                <Link
                  to={`/booking/${room.id}`}
                  className="mt-4 block w-full px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded text-center hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:shadow-outline"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsGallery;
