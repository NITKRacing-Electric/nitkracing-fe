import React from "react";
import { motion } from 'framer-motion';
import threeDImage from "../../../../images/threeD/threeD.png";

const CarsSection = () => {
  const cars = [
    { id: 1, name: "Speedster X1", topSpeed: "300 km/h", acceleration: "0-100 km/h in 3.2s", weight: "1200 kg" },
    { id: 2, name: "Thunderbolt GT", topSpeed: "320 km/h", acceleration: "0-100 km/h in 2.9s", weight: "1150 kg" },
    { id: 3, name: "Apex Racer", topSpeed: "310 km/h", acceleration: "0-100 km/h in 3.0s", weight: "1180 kg" },
  ];

  return (
    <section id="cars" className="bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 font-[prompt] text-blue-200">Our Racing Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CarCard = ({ car }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg relative"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={threeDImage} alt={car.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold mb-4 text-red-500">{car.name}</h3>
        <ul className="space-y-2 text-sm">
          <li><span className="font-bold text-gray-400">Top Speed:</span> {car.topSpeed}</li>
          <li><span className="font-bold text-gray-400">Acceleration:</span> {car.acceleration}</li>
          <li><span className="font-bold text-gray-400">Weight:</span> {car.weight}</li>
        </ul>
      </div>
      <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold">
        NEW
      </div>
    </motion.div>
  );
};

export default CarsSection;