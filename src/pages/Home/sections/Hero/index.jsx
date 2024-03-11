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
import Header, { MenuItems } from "../../../../components/Header";
import Marquee from "react-fast-marquee";
import DividerSVG from "../../../../assets/divider.svg";
import StarSVG from "../../../../assets/star.svg";

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
    <section id="home" className="overflow-hidden relative bg-black">
      <div className="root">
        <div className="absolute top-0 left-0 -z-0">
          <FlowFieldCanvas />
        </div>
        <div className="trigger">
          <Container maxWidth="xl">
            <Box className={properties.wrapper}>
              <MainItem />
            </Box>
          </Container>
        </div>
      </div>
    </section>
  );
};

function MainItem() {
  return (
    <div className="heromain w-full p-0 md:p-16 relative">
      <div className="w-3/4 mx-auto relative z-10">
        <div className="appbar overflow-hidden">
          <MenuItems />
        </div>
        <div className="wrapper bg-red-600 py-16 relative my-10">
          <Marquee
            autoFill
            className="justify-center items-center gap-5"
            speed={20}
          >
            <h1 className="text-9xl font-[outfit] text-black font-bold">
              LIVE TO RACE
            </h1>
          </Marquee>
          <img
            src={StarSVG}
            className="star absolute -bottom-[115px] -right-[115px] -z-10 rotating"
          />
        </div>

        <div className="flex flex-row gap-10 links overflow-hidden">
          <h1 className="text-5xl font-[prompt]">Explore</h1>
          <h1 className="text-5xl font-[prompt]">Donate</h1>
          <h1 className="text-5xl font-[prompt]">Follow</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
