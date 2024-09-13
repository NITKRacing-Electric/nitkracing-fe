import React, { useState, useEffect } from "react";
import { Section } from "../../../../components/Section/index.js";
import { BlueGradient, RedGradient } from "../../../../components/Gradient.jsx";
import { useStateContext } from "../../../../context";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { urlFor } from "../../../sponsors.jsx";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-black lg:px-20 relative py-20" id="about">
      <Section>
        <BlueGradient />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 font-[prompt] text-blue-200">
          Our Team
        </h1>
        <div className="relative mt-5">
          <RedGradient />
          <TeamCarousel />
        </div>
      </Section>
    </div>
  );
};

const TeamCarousel = () => {
  const { isLoading, membersData } = useStateContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (membersData.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % membersData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [membersData]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % membersData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + membersData.length) % membersData.length);
  };

  if (isLoading) return <p className="text-center text-white">Loading...</p>;

  if (membersData.length === 0) {
    return <p className="text-center text-white">No team members to display.</p>;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: `-${currentIndex * (100 / 3)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex"
        >
          {membersData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </motion.div>
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10">
        <FiChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full z-10">
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="relative pt-[100%]"> {/* 1:1 Aspect ratio */}
          <img
            src={urlFor(member.image)}
            alt={member.memberName}
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="p-4 relative">
          <h3 className="text-lg font-semibold mb-1 text-red-500">{member.memberName}</h3>
          <p className="text-xs text-gray-300">{member?.heading || "Team Member"}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
