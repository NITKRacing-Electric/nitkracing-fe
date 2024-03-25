import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import "./styles.css";

import "./anime.css";
import Sponsors from "./sections/Sponsors/Index";
import Hero from "./sections/Hero";
import { Box } from "@mui/material";
import About from "./sections/About/index.jsx";
import BG from "../../images/bg.jpg";
import gsap from "gsap";
import useGsap from "../../hooks/useGsap.js";
import Section from "../../components/Section/section.jsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ScrollTrigger } from "gsap/all";
import BackgroundSVG from "../../assets/background.svg";
import {
  BlueGradient,
  RedGradient,
  WhiteGradient,
} from "../../components/Gradient.jsx";
import AbstracrSVG from "../../assets/abstract.svg";
import { Link } from "react-router-dom";

const Index = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });

  return (
    <Box ref={scrollRef}>
      <Hero />
      <About />
      <CallToAction />
      <Sponsors />
    </Box>
  );
};

function CallToAction() {
  return (
    <div className="py-10 px-4 sm:px-20 bg-black">
      <div className="flex justify-between relative overflow-hidden items-center my-6 sm:my-16 px-4 sm:px-16 py-4 sm:py-12 flex-col sm:flex-row rounded-3xl box-shadow">
        <RedGradient />
        <BlueGradient />
        <img
          src={AbstracrSVG}
          className="lg:absolute md:block block bottom-0 right-0 w-3/4 sm:w-[400px] h-3/4 sm:h-[400px]"
        />
        <div className="py-10">
          <Link to={"/crowdfunding"}>
            <h1 className="text-3xl sm:text-6xl text-blue-200 font-semibold font-[prompt] mb-4">
            Interested in <br />
            Contribution?
            </h1>
          </Link>

          <p className="font-[prompt] opacity-50 text-sm sm:text-base">
            Help us grow into a team everyone wants to work with and
            understand how things work around in racing clubs.
          </p>
        </div>
        <div className="relative h-full"></div>
      </div>
    </div>
  );
}


function NewsLetter() {
  return (
    <div className="py-10 px-20 bg-black">
      <div className="flex justify-between relative overflow-hidden  items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-3xl  box-shadow">
        <RedGradient />
        <BlueGradient />
        <img
          src={AbstracrSVG}
          className="absolute bottom-0 right-0 w-[400px] h-[400px]"
        />
        <div className="py-10">
        <Link to={"/crowdfunding"}>
            <h1 className="text-6xl text-blue-200 font-semibold font-[prompt] mb-4">
            Interested in <br />
            Contribution?
            </h1>
        </Link>

          <p className="ffont-[prompt] opacity-50">
            Help us grow into a team everyone want to work with and
            <br />
            understand how things work around in racing clubs.
          </p>
        </div>
        <div className="relative h-full"></div>
      </div>
    </div>
  );
}

function RacingCard() {
  return (
    <div className="w-[300px] bg-black shadow-2xl  relative">
      <div className="h-[200px]"></div>
      <h1 className="text-xl font-bold text-red-200 font-[prompt] absolute bottom-0 right-0">
        Racing
      </h1>
    </div>
  );
}

export default Index;
