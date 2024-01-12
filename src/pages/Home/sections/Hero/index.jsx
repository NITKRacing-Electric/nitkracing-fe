import React, { useCallback, useEffect, useRef, useState } from "react";
import properties from "../../home.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anime from "animejs";
import helmetLeft from "../../../../images/hero/helmet_left.png";
import helmetFront from "../../../../images/hero/helmet_front.png";
import helmetRight from "../../../../images/hero/helmet_right.png";
import { Box, Container, Typography } from "@mui/material";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { BsArrowDown, BsArrowRight } from "react-icons/bs";
import ScrollDown from "../../../../assets/scrolldown.gif";
import gsap from "gsap";
import useGsap from "../../../../hooks/useGsap";
import { FlowFieldCanvas } from "../../../../components";

const DUMMY_DATA = [
  {
    id: 0,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Maximum Performance",
    image: helmetLeft,
  },
  {
    id: 1,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Overtaking Competetion",
    image: helmetFront,
  },
  {
    id: 2,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Reliable & Aerodynamic",
    image: helmetRight,
  },
];

const Hero = ({ props }) => {
  const containerRef = useRef(null);

  return (
    <section id="home" className="overflow-hidden relative">
     
     <div className="relative z-10">
      <Container maxWidth="xl">
        <Box className={properties.wrapper}>
          <MainItem />
        </Box>
        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-xs">Scroll Down</p>
          <img className="w-5" src={ScrollDown} />
        </div>
      </Container>
      </div>
      <div className="absolute top-0 left-0 -z-0">
        <FlowFieldCanvas />
      </div>
    </section>
  );
};

function MainItem() {
  useGsap(".heromain", () => {
    const timeline = gsap.timeline();
    timeline.from(".heromain h1", {
      opacity: 0,
      y: 20,
      ease: "power4.out",
      duration: 1,
      stagger: 0.1,
    });

    timeline.to(".heromain h1", {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.1,
      ease: "power4.in",
    });
  });
  return (
    <div className="heromain w-full p-16">
      <h1 className="text-center text-[200px] font-[outfit] font-bold text-gray-600 leading-[160px] opacity-75">
        Live To Race
      </h1>
      <h1 className="text-center text-[200px] font-[outfit] font-bold text-gray-600 leading-[160px] opacity-40">
        Live To Race
      </h1>
      <h1 className="text-center text-[200px] font-[outfit] font-bold text-gray-600 leading-[160px] opacity-20">
        Live To Race
      </h1>
    </div>
  );
}

export default Hero;
