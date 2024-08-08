'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TeslaLogo from '/public/tesla_logo.png'; // Adjust the path as per your project structure
import WhatsAppLogo from '/public/whatsapp.png'; // Add the correct path to your WhatsApp logo image
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const CarDetail = ({ params }) => {
  const router = useRouter();
  const [car, setCar] = useState(null);
  const { id } = params; // Extracting id from params

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/data`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const carData = data.find(car => car.id === parseInt(id));
        if (!carData) {
          router.push('/404');
        } else {
          setCar(carData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        router.push('/404');
      }
    };
    fetchData();
  }, [id, router]);

  const Placeholder = () => (
    <div className="container mx-auto mt-10 p-6 bg-gray-800 text-gray-300 shadow-xl rounded-lg animate-pulse">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="h-10 bg-gray-700 w-3/4 mb-4"></div>
          <div className="w-full h-64 bg-gray-700 rounded-lg shadow-lg"></div>
          <div className="h-6 bg-gray-700 w-5/6 mt-4"></div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <div className="mb-6">
            <div className="h-8 bg-gray-700 w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
            <div className="h-4 bg-gray-700 w-full mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return car ? (
    <motion.div
      className="container mx-auto mt-10 p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-gray-300 shadow-2xl rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.h2
            className="text-orange-500 font-extrabold text-5xl mb-4 drop-shadow-md text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {car.brand} {car.name}
          </motion.h2>
          <motion.img
            className="w-full h-auto object-cover object-center rounded-lg shadow-lg"
            src={`${car.image[0]}`} // Assuming the first image is the main image
            alt={car.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.p
            className="text-gray-800 dark:text-white text-xl mt-4 italic text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {car.description}
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <motion.div
            className="mb-6 space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 text-center lg:text-left">Car Details</h3>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Make</p>
              <div className="flex items-center">
                <span className="text-gray-800 dark:text-white capitalize font-bold">{car.brand}</span>
                <Image src={TeslaLogo} alt={`${car.brand} logo`} width={40} height={40} className="ml-4" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Color</p>
              <div className="w-6 h-6 rounded-md border border-gray-500 dark:border-white" style={{ backgroundColor: car.color }}></div>
            </div>
            {/* <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Mileage:</p>
              <span className="text-gray-800 dark:text-white font-bold">{car.milage} km</span>
            </div> */}
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Year</p>
              <span className="text-gray-800 dark:text-white font-bold">{car.year}</span>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Seats</p>
              <span className="text-gray-800 dark:text-white font-bold">{car.seats}</span>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Fuel Type</p>
              <span className="text-gray-800 dark:text-white capitalize font-bold">{car.fueltype}</span>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Transmission</p>
              <span className="text-gray-800 dark:text-white capitalize font-bold">{car.transmissiontype}</span>
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md dark:border-white">
              <p className="text-gray-800 dark:text-white font-semibold">Rates</p>
              <span className="text-gray-800 dark:text-white font-bold">PKR {car.perhourrate}</span>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-10 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="tel:923331493112" className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full lg:w-48 dark:bg-orange-600">
          Call Us: &nbsp; 03331493112
        </a>
        <a href="https://wa.me/923331493112" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full lg:w-48 dark:bg-green-600">
          <Image src={WhatsAppLogo} alt="WhatsApp" width={30} height={30} className="mr-2" />
          WhatsApp: 03331493112
        </a>
      </motion.div>
    </motion.div>
  ) : (
    <Placeholder />
  );
};

export default CarDetail;
