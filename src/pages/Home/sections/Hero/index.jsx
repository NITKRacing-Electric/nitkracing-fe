import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import MobileView from "../../../../components/mobileview/MobileView";
import { useStateContext } from "../../../../context";
import { MenuItems } from "../../../../components/Header";
import threeDImage from "../../../../images/threeD/threeD.png";
import whiteLogo from "../../../../images/logo/logo_white.png";

const Hero = () => {
  return (
    <section id="home" className="relative bg-black min-h-screen flex flex-col">
      <Navbar />
      <HeroContent />
    </section>
  );
};

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { drawerOpen, handleOpenAndClose } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full p-4 md:p-6 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img 
          src={whiteLogo} 
          alt="NITK Racing logo" 
          className="w-24 md:w-32 lg:hidden" // Hide on large screens (laptop)
        />
        {screenSize > 900 ? (
          <MenuItems />
        ) : (
          <button onClick={handleOpenAndClose} className="text-white">
            {drawerOpen ? <FiX size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        )}
      </div>
      {drawerOpen && screenSize <= 900 && <MobileView />}
    </nav>
  );
};

const HeroContent = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-center z-10 mb-8"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-red-200"><span className="text-blue-200">NITK</span> Racing</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">Pushing the limits of speed and innovation</p>
        <motion.a
          href="#cars"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg inline-block transition-colors duration-300"
        >
          Explore Cars
        </motion.a>
      </motion.div>
      <motion.div
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={threeDImage}
          alt="Racing Car"
          className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black z-0"></div>
    </div>
  );
};

export default Hero;


