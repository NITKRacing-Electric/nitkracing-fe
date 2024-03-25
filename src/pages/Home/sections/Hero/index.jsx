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

import { TypewriterEffectSmooth } from "../../../../components/ui/typewriter";

import {ContainerScroll} from "../../../../components/ui/container-scroll-animation"

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


    const users = [
      {
        name: "Manu Arora",
        designation: "Founder, Algochurn",
        image: "https://picsum.photos/id/10/300/300",
        badge: "Mentor",
      },
      {
        name: "Sarah Singh",
        designation: "Founder, Sarah's Kitchen",
        image: "https://picsum.photos/id/11/300/300",
        badge: "Mentor",
      },
      {
        name: "John Doe",
        designation: "Software Engineer, Tech Corp",
        image: "https://picsum.photos/id/12/300/300",
        badge: "Mentor",
      },
      {
        name: "Jane Smith",
        designation: "Product Manager, Innovate Inc",
        image: "https://picsum.photos/id/13/300/300",
        badge: "Mentor",
      },
      {
        name: "Robert Johnson",
        designation: "Data Scientist, DataWorks",
        image: "https://picsum.photos/id/14/300/300",
        badge: "Mentor",
      },
      {
        name: "Emily Davis",
        designation: "UX Designer, DesignHub",
        image: "https://picsum.photos/id/15/300/300",
        badge: "Mentor",
      },
      {
        name: "Michael Miller",
        designation: "CTO, FutureTech",
        image: "https://picsum.photos/id/16/300/300",
        badge: "Mentor",
      },
      {
        name: "Sarah Brown",
        designation: "CEO, StartUp",
        image: "https://picsum.photos/id/17/300/300",
      },
      {
        name: "James Wilson",
        designation: "DevOps Engineer, CloudNet",
        image: "https://picsum.photos/id/18/300/300",
        badge: "Something",
      },
      {
        name: "Patricia Moore",
        designation: "Marketing Manager, MarketGrowth",
        image: "https://picsum.photos/id/19/300/300",
        badge: "Mentor",
      },
      {
        name: "Richard Taylor",
        designation: "Frontend Developer, WebSolutions",
        image: "https://picsum.photos/id/20/300/300",
      },
      {
        name: "Linda Anderson",
        designation: "Backend Developer, ServerSecure",
        image: "https://picsum.photos/id/21/300/300",
      },
      {
        name: "William Thomas",
        designation: "Full Stack Developer, FullStack",
        image: "https://picsum.photos/id/22/300/300",
        badge: "Badger",
      },
      {
        name: "Elizabeth Jackson",
        designation: "Project Manager, ProManage",
        image: "https://picsum.photos/id/23/300/300",
        badge: "Mentor",
      },
      {
        name: "David White",
        designation: "Database Administrator, DataSafe",
        image: "https://picsum.photos/id/24/300/300",
        badge: "Advocate",
      },
      {
        name: "Jennifer Harris",
        designation: "Network Engineer, NetConnect",
        image: "https://picsum.photos/id/25/300/300",
      },
      {
        name: "Charles Clark",
        designation: "Security Analyst, SecureIT",
        image: "https://picsum.photos/id/26/300/300",
      },
      {
        name: "Susan Lewis",
        designation: "Systems Analyst, SysAnalyse",
        image: "https://picsum.photos/id/27/300/300",
      },
      {
        name: "Joseph Young",
        designation: "Mobile Developer, AppDev",
        image: "https://picsum.photos/id/28/300/300",
        badge: "Mentor",
      },
      {
        name: "Margaret Hall",
        designation: "Quality Assurance, BugFree",
        image: "https://picsum.photos/id/29/300/300",
        badge: "Developer",
      },
    ];

    // const words = [
    //     {
    //       text: "Live",
    //       className: "text-white dark:text-white",
    //     },
    //     {
    //       text: "to",
    //       className: "text-white dark:text-white",
    //     },
    //     {
    //       text: "Race",
    //       className: "text-red-500 dark:text-red-500",
    //     },
    //   ];


  return (
    <div className="heromain w-full p-0 md:p-16 lg:relative">

    <div className="w-3/4 mx-auto relative z-10 appbar overflow-hidden">
      <MenuItems />
    </div>

      <div className="flex flex-col overflow-hidden">

{/*
                <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Living <br />
              <span className="text-4xl md:text-[6rem] text-red-600 font-bold mt-1 leading-none">
                To Race
              </span>
            </h1>
          </>
        }
      /> */}









        {/* <div className="">
            <TypewriterEffectSmooth words={words} />
        </div> */}


        {/* <div className="flex lg:flex-row flex-col items-center gap-10 links overflow-hidden">
          <h1 className="lg:text-5xl font-[prompt] text-2xl">Explore</h1>
          <h1 className="lg:text-5xl font-[prompt] text-2xl">Donate</h1>
          <h1 className="lg:text-5xl font-[prompt] text-2xl">Follow</h1>
        </div> */}


      </div>
    </div>
  );
}

export default Hero;
