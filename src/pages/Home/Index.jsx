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

const Index = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });
  useGsap(scrollRef.current, () => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        pin: "#home",
        trigger: ".root",
        start: "top top",
        end: "+=1000",
        markers: true,
        scrub: true,
        pinSpacing: false,
      },
    });

    timeline.to(".appbar", {
      height: "0px",
    });

    timeline.to(
      ".links",
      {
        height: "0px",
      },
      "<"
    );

    timeline.to(".star", {
      fill: "black",
      scale: 100,
      duration: 0.5,
      ease: "power4.in",
    });

    timeline.to("#home", {
      opacity: 0,
      ease: "linear",
    });

    timeline.from(
      "#about",
      {
        opacity: 0,
      },
      ">+0.2"
    );
  });
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
    <div id="achievements" className="root-wrapper relative">
      <div className="absolute w-3/5 bg-red-600 h-3/4 bottom-1/2 translate-y-1/2 right-20">
        <div className="w-full h-full relative">
          <img
            src={BackgroundSVG}
            className="object-cover w-full shadow-inner md:h-auto-z-10 absolute top-0 left-0 "
          />
          <h1 className="font-[prompt] text-9xl font-thin [writing-mode:vertical-lr] absolute -right-16 bottom-0">
            NR'24
          </h1>
        </div>
      </div>
      <img
        src={BG}
        className="about_image object-cover shadow-inner md:h-auto h-full -z-10 w-full absolute top-0 left-0 "
      />

      <div className="root-about h-[100vh] relative shadow-inner overflow-hidden px-20">
        <div className="flex flex-row justify-start gap-10">
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
        </div>
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
