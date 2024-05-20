import React, { useCallback, useEffect, useRef, useState } from "react";
import properties from "../../home.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anime from "animejs";
import helmetLeft from "../../../../images/hero/helmet_left.png";
import helmetFront from "../../../../images/hero/helmet_front.png";
import helmetRight from "../../../../images/hero/helmet_right.png";
import { Box, Container, Typography } from "@mui/material";
import whiteLogo from "../../../../images/logo/logo_white.png";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileView from "../../../../components/mobileview/MobileView";
import { useStateContext } from "../../../../context";
import { Link } from 'react-router-dom';
import { FiX } from "react-icons/fi";
import blur from '../../../../images/hero/blur.jpg'
import i1 from '../../../../images/hero/DSC03192.JPG'
import i2 from '../../../../images/hero/DSC03276.JPG'
import i3 from '../../../../images/hero/DSC03309.JPG'
import i4 from '../../../../images/hero/DSC03314.JPG'
import i5 from '../../../../images/hero/DSC03321.JPG'
import i6 from '../../../../images/hero/DSC03347.JPG'
import i7 from '../../../../images/hero/DSC03422.JPG'
import i8 from '../../../../images/hero/DSC03426.JPG'
import i9 from '../../../../images/hero/DSC03427.JPG'
import i10 from '../../../../images/hero/DSC03433.JPG'
import i11 from '../../../../images/hero/DSC03440.JPG'
import i12 from '../../../../images/hero/DSC04277.JPG'
import i13 from '../../../../images/hero/DSC04280.JPG'

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
import { getHomeData } from "../../../../services/HomeDataAPI"; //sponsors from CMS
import { div } from "three/examples/jsm/nodes/Nodes.js";

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
        <div>
          <div>
            <MainItem />
          </div>
        </div>
      </div>
    </section>
  );
};

function MainItem() {
  
  //taking the screen size
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { drawerOpen, handleOpenAndClose } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize((prevSize) => {
        const newSize = window.innerWidth;
        // Perform additional actions if needed
        // console.log(newSize);
        return newSize;
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="heromain p-0 md:p-7 relative h-screen  w-full pl-32 pr-32">
      <div className="w-full mx-auto relative z-10">
        <div className="appbar overflow-hidden">
          {screenSize < "431" ? (
            <div className="flex justify-around items-center">
              <img
                className="logo z-40 w-[100px] block"
                src={whiteLogo}
                alt="nitk racing logo"
              />
              {!drawerOpen ? (
                <RxHamburgerMenu size={24} onClick={handleOpenAndClose} />
              ) : (
                <FiX size={24} onClick={handleOpenAndClose} />
              )}
            </div>
          ) : screenSize < "900" && screenSize > "430" ? (
            <div className="flex justify-around items-center">
              <img
                className="logo z-40 w-[100px] block"
                src={whiteLogo}
                alt="nitk racing logo"
              />
              {!drawerOpen ? (
                <RxHamburgerMenu size={24} onClick={handleOpenAndClose} />
              ) : (
                <FiX size={24} onClick={handleOpenAndClose} />
              )}
            </div>
          ) : (
            <div className="pl-36 pr-36"><MenuItems /></div>
            
           
          )}
        </div>

        {drawerOpen ? <MobileView /> : null}
        {/* new hero section  */}
        <div className="mt-11 2xl:mt-32 mx-auto flex justify-center items-center gap-32">
          {/* left section  */}
          <div className="flex flex-col gap-3 max-w-[500px]">
            <span className="text-red-500 font-semibold text-xl">Welcome to</span>
            <span className="text-8xl whitespace-nowrap font-bold">NITK Racing</span>
            <span className="text-red-500 font-semibold text-3xl">#Live To Race</span>
            <div className="mt-4">
            <Link to='/achievements'><button className="bg-red-700 text-white pl-4 pr-4 pt-2 pb-2 font-bold text-2xl hover:opacity-75 duration-300 ease-in-out">Achievements</button></Link>
            </div>
          </div>
          
          {/* right section  */}
          <div className="grid grid-cols-4 gap-2">
            <img src={i8} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px] "/>
            <img src={i7} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i7} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px] "/>
            <img src={i9} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i10} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i11} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i12} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i13} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i13} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i12} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i9} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>
            <img src={i8} alt="hero image" className="bg-center bg-no-repeat bg-cover w-[120px] h-[140px]"/>

          </div>
        </div>
        
        
      </div>
    </div>
  );
}

export default Hero;


{/* {screenSize < "431" ? (
          <div className="wrapper bg-red-600 py-2 relative my-10">
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
        ) : screenSize < "900" && screenSize > "430" ? (
          <div className="wrapper  bg-red-600 py-2 relative my-10">
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
        ) : (
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
        )} */}

        {/* <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-10 sm:links sm:overflow-hidden">
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Explore</h1>
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Donate</h1>
          <h1 className="sm:text-5xl text-6xl font-[prompt]">Follow</h1>
        </div> */}


