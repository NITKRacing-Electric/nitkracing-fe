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

const Index = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });

  return (
    <Box ref={scrollRef}>
      <Hero />
      <About />
      <Description />
      <Sponsors />
    </Box>
  );
};

function Description() {
  useGsap(".root-wrapper", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".root-about",
        scrub: true,
        pin: false,
      },
    });

    tl.fromTo(
      ".about_image",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );

    tl.fromTo(
      ".about_image",
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        ease: "none",
      },
      "<"
    );

    for (let i = 0; i < 4; i++) {
      const direction = (i + 1) % 2 == 0 ? 1 : -1;

      tl.fromTo(
        `.racing-wrapper-${i + 1}`,
        {
          yPercent: direction * 25,
          ease: "none",
        },
        {
          yPercent: -1 * direction * 25,
          ease: "none",
        },
        "<"
      );
    }
  });
  return (
    <div id="achievements" className="root-wrapper">
      <div className="root-about h-[100vh] relative shadow-inner overflow-hidden p-8">
        <img
          src={BG}
          className="about_image object-contain shadow-inner -z-10 w-full absolute top-0 left-0 "
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-10 h-full racing-wrapper-1">
            <RacingCard />
            <RacingCard />
            <RacingCard />
            <RacingCard />
          </div>
          <div className="flex flex-col gap-10 h-full racing-wrapper-2">
            <RacingCard />
            <RacingCard />
            <RacingCard />
            <RacingCard />
          </div>
          <div className="flex flex-col gap-10 h-full racing-wrapper-3">
            <RacingCard />
            <RacingCard />
            <RacingCard />
            <RacingCard />
          </div>
          <div className="flex flex-col gap-10 h-full racing-wrapper-4">
            <RacingCard />
            <RacingCard />
            <RacingCard />
            <RacingCard />
          </div>
        </div>
      </div>
    </div>
  );
}

function RacingCard() {
  return (
    <div className="w-[300px] bg-slate-100 shadow-2xl rounded-lg relative">
      <div className="h-[200px]"></div>
      <h1 className="text-7xl font-bold text-red-200 font-[outfit] absolute -bottom-4 right-0">
        Racing
      </h1>
    </div>
  );
}

export default Index;
