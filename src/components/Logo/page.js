'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function LogoCars() {
  const router = useRouter()
  
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  
  return (  
    <div className="container mx-auto dark:text-white  text-black px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        What type of car are you looking for?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="flex flex-col items-center">
          <img
            src="./Alto.png"
            alt="Budget Car"
            className="h-40 mb-4"
            />
          <button
            onClick={() => router.push("/vehicals?category=budget")}
            className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ${
              selectedOption === 'budget' && 'bg-orange-700'
            }`}
            >
            Budget
          </button>

          <p className="text-sm dark:text-white text-blackmt-2">
            Daihatsu Mira or similar
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/civic.png"
            alt="Standard Car"
            className="h-40 mb-4"
            />
          <button
            onClick={() => router.push("/vehicals?category=standard")}
            className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ${
              selectedOption === 'standard' && 'bg-orange-700'
            }`}
          >
            Standard
          </button>
          <p className="text-sm dark:text-white text-black mt-2">
            Toyota Corolla or similar
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/fortuner.png"
            alt="SUV"
            className="h-40 mb-4"
            />
          <button
            onClick={() => router.push("/vehicals?category=suv")}
            className={`bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline ${
              selectedOption === 'suv' && 'bg-orange-600'
            }`}
            >
            SUV
          </button>
          <p className="text-sm dark:text-white text-black mt-2">
            Land Cruiser or similar
          </p>
        </div>
      </div>
    </div>
  );
}