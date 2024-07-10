import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const RoomsGallery: React.FC = () => {
  const [data, setData] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadMore, setLoadMore] = useState<boolean>(true);
  const [size, setSize] = useState<number>(12);
  const navigate = useNavigate();

  const handleBookNow = async (hotel: Hotel) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/book', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotel),
      });
      // Server response
      const servResponse = await response.json()

      if (response.ok) {
        navigate(`/book/${hotel.id}`);

      } else {
        console.error('Failed to book hotel');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const generateContent = () => {
    // Map over the first 10 hotels and display them
    return data.slice(0, size).map((hotel) => (
      <div key={hotel.id} className="bg-white dark:bg-gray-800 shadow p-4 rounded-lg">
        <img src={hotel.image} alt={hotel.name} className="w-full h-32 sm:h-48 object-cover rounded-lg" />
        <div className="mt-4">
          <h2 className="text-xl font-bold">{hotel.name}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{hotel.address}</p>
          <p className="text-gray-800 dark:text-gray-100 mt-2">${hotel.price} per night</p>
          <p className="text-gray-800 dark:text-gray-100 mt-2">Rating: {hotel.rating}</p>
          <button
            onClick={() => handleBookNow(hotel)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    ),
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/hotels', {
          method: 'GET',
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
          {/* Adding load more button */}
          <div className="col-span-4 flex justify-center">
            {loadMore && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition duration-300"
                onClick={() => {
                  setSize(size + 10);
                  // Example condition to stop loading more items
                  if (size + 10 >= 50) { // Adjust this condition as needed
                    setLoadMore(false);
                  }
                }}
              >
                Load More
            </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RoomsGallery;
