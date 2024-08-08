"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white h-[590px] rounded-lg overflow-hidden border border-gray-200 shadow-md">
      <img
        className="w-full h-64 object-cover object-center p-9 rounded-t-lg"
        src={car.image}
        alt={car.name}
      />
      <div className="p-4">
        <Link href={`/vehical`}>
          <h2 className="text-blue-900 font-bold text-xl mb-2">{car.brand} {car.name}</h2>
        </Link>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 font-semibold mr-2">Color:</span>
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: car.color, display: 'inline-block', borderRadius: '100%', verticalAlign: 'middle' }}></span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 font-semibold mr-2">Year:</span>
          <span className="text-gray-800">{car.year}</span>
        </div>
        <div>
          <span className="text-gray-600 font-semibold">Description:</span>
          <p className="text-gray-700 mb-1">{car.description}</p>
        </div>
        <div className="mb-4">
          <span className="text-gray-600 font-semibold mr-2">Features:</span>
          <span className="text-gray-800">{car.features}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`bg-gray-200 text-gray-700 mr-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${car.seats > 5 ? 'bg-purple-200 text-purple-800' : 'bg-blue-200 text-blue-800'}`}>{car.seats} Seats</span>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${car.availability ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{car.availability ? 'Available' : 'Not Available'}</span>
          </div>
          <div>
            <span className="text-gray-700 font-semibold">${car.perHourRate}</span>
            <span className="text-gray-500 text-sm">/ hour</span>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

const Cars = ({ category }) => {
  const [cars, setCars] = useState([]);
  const [showMore, setShowMore] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`/api/data?category=${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Refetch data whenever the category changes

  const limitedCars = showMore ? cars : cars.slice(0, 100);

  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {limitedCars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      
      <div className="flex justify-center mt-4">
      </div>
    </div>
  );
};

export default Cars;
