'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CarCard = ({ car, index }) => {
  const router = useRouter();
  const imageUrl = car.image[0]; // Assuming the first image is the main image

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.div
      className="car-card bg-white h-auto dark:text-black rounded-lg overflow-hidden border border-gray-200 shadow-md transition transform hover:shadow-2xl"
      initial="hidden"
      animate="visible"
      custom={index}
      variants={cardVariants}
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
        <img
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-90"
          src={imageUrl}
          alt={car.name}
        />
      </div>
      <div className="p-6">
        <h2 className="text-orange-600 font-bold text-2xl mb-2">{car.brand} {car.name}</h2>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <div className="flex items-center mb-2">
          <span className="text-gray-600 font-semibold mr-2">Color:</span>
          <span className="w-6 h-6 rounded-full border border-gray-300" style={{ backgroundColor: car.color }}></span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-semibold mr-2">Transmission:</span>
          <span className="text-gray-800 capitalize">{car.transmissiontype}</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-semibold mr-2">Fuel Type:</span>
          <span className="text-gray-800 capitalize">{car.fueltype}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${car.availability ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {car.availability ? 'Available' : 'Not Available'}
            </span>
            <span className={`inline-block px-3 py-1 ml-2 rounded-full text-sm font-semibold ${car.seats > 5 ? 'bg-purple-200 text-purple-800' : 'bg-blue-200 text-blue-800'}`}>
              {car.seats} Seats
            </span>
          </div>
          <div>
            <span className="text-gray-700 font-semibold">PKR {car.perhourrate}</span>
          </div>
        </div>
        <button onClick={() => { router.push(`/vehicals/${car.id}`) }} className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded w-full transition-colors">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const CarShowCase = ({ category, limit }) => {
  const [cars, setCars] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (category) {
          const filteredCars = data.filter(car => car.category.toLowerCase() === category.toLowerCase());
          setCars(filteredCars);
        } else {
          setCars(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]); // Run once when the component mounts

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set(prev).add(entry.target));
          }
        });
      },
      { threshold: 0.1 }
    );

    const carElements = containerRef.current.querySelectorAll('.car-card');
    carElements.forEach(el => observer.observe(el));

    return () => {
      carElements.forEach(el => observer.unobserve(el));
    };
  }, [cars]);

  const carLimit = limit ? 20 : 3;
  const limitedCars = showMore ? cars : cars.slice(0, carLimit);

  const getHeading = () => {
    if (category) {
      return `Our ${category} Cars`;
    } else if (limit) {
      return 'Our Cars';
    } else {
      return 'Recommended Cars';
    }
  };

  return (
    <div className="container mx-auto mt-10" ref={containerRef}>
      <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">{getHeading()}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedCars.map((car, index) => (
          <CarCard key={car.id} car={car} index={index} />
        ))}
        <div className="flex justify-center mt-8">
          <Link href="/vehicals">

{

              (limit) ? null||undefined : <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-8 rounded transition-colors">
              Show More
              </button>
}
            
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarShowCase;
