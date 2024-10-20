import React from "react";
import { motion } from 'framer-motion';
import threeDImage from "../../../../images/threeD/threeD.png";

// Import car images
import car2020 from "../../../../images/cars/1_1.jpeg";
import car2019 from "../../../../images/cars/1_3.jpeg";
import car2017 from "../../../../images/cars/NR17.png";
import car2016 from "../../../../images/cars/NR16.png";
import car2014 from "../../../../images/cars/IMG-20140622-WA0002.jpg";
import car2012 from "../../../../images/cars/DH NR XII.png";

const CarsSection = () => {
  const cars = [
    {
      year: 2024,
      specs: [
        "Motors - Dual Agni 119R",
        "Peak Power - 79.2kW",
        "Peak Torque - 136Nm",
        "Planetary Gearbox with 6 gear ratio",
        "Maximum Accumulator Voltage - 126V",
        "Accumulator Capacity - 7.6kWh",
        "AISI 1018 Steel Spaceframe Chassis"
      ],
      image: null
    },
    {
      year: 2020,
      specs: [
        "Engine - KTM 390",
        "Power - 65HP"
      ],
      image: car2020
    },
    {
      year: 2019,
      specs: [
        "Engine - KTM 390",
        "Power - 43HP @ 9500RPM",
        "SAE 1018 Steel Spaceframe Chassis",
        "20.5x7 R13 Hoosier Tires",
        "Front and Rear pushrod suspension"
      ],
      image: car2019
    },
    {
      year: 2017,
      specs: [
        "Engine - KTM 390",
        "Power - 43HP @ 9500RPM",
        "SAE 1018 Steel Spaceframe Chassis",
        "20.5x7 R13 Hoosier Tires"
      ],
      image: car2017
    },
    {
      year: 2016,
      specs: [
        "Engine - Honda CBR600RR",
        "Engine Type and Displacement - 599cc Liquid-Cooled Inline Four-Cylinder",
        "Peak Power - 65HP",
        "Peak Torque - 51Nm",
        "Torsen Limited-Slip Differential",
        "Launch Control"
      ],
      image: car2016
    },
    {
      year: 2014,
      specs: [
        "Engine - Honda CBR600RR",
        "Engine Type and Displacement - 599cc Liquid-Cooled Inline Four-Cylinder",
        "Peak Power - 45HP @9500RPM",
        "Custom made ECU",
        "4130 Chromoly Alloy Steel Spaceframe Chassis"
      ],
      image: car2014
    },
    {
      year: 2012,
      specs: [
        "Engine - Honda CBR600RR",
        "Engine Type and Displacement - 599cc Liquid-Cooled Inline Four-Cylinder",
        "Peak Power - 45HP @9500RPM",
        "Custom made ECU",
        "4130 Chromoly Alloy Steel Spaceframe Chassis"
      ],
      image: car2012
    }
  ];

  return (
    <section id="cars" className="bg-black text-white py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 font-[prompt] text-blue-200">Our Racing Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.year} car={car} />
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
        <img 
          src={car.image || threeDImage} 
          alt={`Car ${car.year}`} 
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold mb-4 text-red-500">{car.year} Model</h3>
        <ul className="space-y-2 text-sm">
          {car.specs.map((spec, index) => (
            <li key={index}><span className="font-bold text-gray-400">{spec.split(' - ')[0]}:</span> {spec.split(' - ')[1]}</li>
          ))}
        </ul>
      </div>
      {car.year === 2024 && (
        <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold">
          NEW
        </div>
      )}
    </motion.div>
  );
};

export default CarsSection;
