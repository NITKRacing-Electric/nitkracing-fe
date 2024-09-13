import React, { useRef } from "react";
import "./styles.css";
import "./anime.css";
import Sponsors from "./sections/Sponsors/Index";
import Hero from "./sections/Hero";
import { Box } from "@mui/material";
import About from "./sections/About/index.jsx";
import Intro from "../About/sections/Intro/Index.jsx";
import CarsSection from "./sections/Cars/index.jsx";
import {
  BlueGradient,
  RedGradient,
} from "../../components/Gradient.jsx";
import AbstracrSVG from "../../assets/abstract.svg";
import { Link } from "react-router-dom";
import newsletterPreviewImg from "../../assets/background/nkr_car_render.png";
import { FiArrowRight } from "react-icons/fi";

const Index = () => {
  const scrollRef = useRef(null);

  return (
    <Box ref={scrollRef} className="bg-black text-white">
      <Hero />
      <Intro />
      <About />
      <CarsSection />
      <CallToAction />
      <Sponsors />
      <NewsLetter />
    </Box>
  );
};

function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
        <RedGradient />
        <BlueGradient />
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 relative z-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 font-[prompt] text-blue-200">
              Interested in <br className="hidden sm:inline" />
              Contributing?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
              Help us grow into a team everyone wants to work with and
              understand how things work around in racing clubs.
            </p>
          </div>
          <img
            src={AbstracrSVG}
            className="w-full max-w-md lg:max-w-lg"
            alt="Abstract design"
          />
        </div>
      </div>
    </section>
  );
}

function NewsLetter() {
  return (
    <Link to="/newsletter" className="block">
      <section className="py-20 px-4 sm:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
          <RedGradient />
          <div className="relative z-10 p-8 lg:p-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 font-[prompt] text-blue-200">
              Newsletter
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="sm:w-1/2 mb-8 sm:mb-0 text-center sm:text-left">
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  Catch up with our latest insights <br className="hidden sm:inline" />
                  and developments
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-colors duration-300 flex items-center mx-auto sm:mx-0">
                  Learn more
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
              <div className="sm:w-1/2 relative h-64 sm:h-80">
                <img
                  src={newsletterPreviewImg}
                  alt="Newsletter"
                  className="rounded-xl absolute inset-0 w-full h-full object-cover opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default Index;
