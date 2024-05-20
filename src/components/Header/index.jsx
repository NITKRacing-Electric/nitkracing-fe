import React, { useRef , useState, useEffect} from "react";
import "./styles.css";
import properties from "./header.module.css";
import whiteLogo from "../../images/logo/logo_white.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { BsGrid3X3Gap } from "react-icons/bs";
import { GiShare } from "react-icons/gi";
import { StyledLink, ToggleButton } from "..";
import { useStateContext } from "../../context";
import useGsap from "../../hooks/useGsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Header = ({ ...props }) => {
  const { handleDrawerOpen } = useStateContext();
  const appbarRef = useRef();
  useGsap(appbarRef.current, () => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        start: "+=500",
        end: "+=470",
        scrub: true,
      },
      ease: "power4.out",
    });
    timeline.to(appbarRef.current, {
      position: "fixed",
      top: 0,
      padding: "5px 0px",
      opacity: 1,
    });
    timeline.to(".link", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
    });
    timeline.to(".logo", {
      backgroundColor: "rgba(255,0,0,0.2)",
      padding: 10,
      borderRadius: 10,
    });
  });

  return (
    <div>
      <div
        position="absolute"
        color="transparent"
        className="appbar absolute w-full z-50"
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="hidden md:block"></div>

          <MenuItems />

          <ToggleButton handleClick={handleDrawerOpen} />
        </Toolbar>
      </div>
      <div
        position="absolute"
        color="transparent"
        className="hiddenappbar absolute w-full z-50 opacity-0 -top-40"
        ref={appbarRef}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="hidden md:block"></div>

          <MenuItems />

          <ToggleButton handleClick={handleDrawerOpen} />
        </Toolbar>
      </div>
    </div>
  );
};

export const StaticHeader = ({ ...props }) => {
  const appbarRef = useRef();
  const [screenSize , setScreenSize] = useState(window.innerWidth)
  const {drawerOpen , handleOpenAndClose} = useStateContext()

  useEffect(() => {
      const handleResize = () => {
        setScreenSize(prevSize => {
          const newSize = window.innerWidth;
          // Perform additional actions if needed
          // console.log(newSize);
          return newSize;
        });
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  //every time keeping the record of the screen size
  console.log(screenSize)

  return (
    <div>

    {/* for laptop */}
      <div
        position="static"
        color="transparent"
        className="appbar absolute w-full z-50 "
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="hidden md:block"></div>

          <MenuItems />

          <ToggleButton handleClick={handleOpenAndClose} />
        </Toolbar>


      </div>

      {/* for mobile */}
      <div
        position="absolute"
        color="transparent"
        className="hiddenappbar hidden absolute w-full z-50 opacity-0 -top-40"
        ref={appbarRef}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="hidden md:block"></div>

          <MenuItems />

          <ToggleButton handleClick={handleOpenAndClose} />
        </Toolbar>
      </div>


    </div>
  );
};




export function MenuItems() {
  return (
    <div className="flex flex-row items-center gap-10 justify-between max-w-[1500px] mx-auto">
      <StyledLink to="/"  label="Home"/>
      <StyledLink to="/gallery" label="Gallery" />
      <StyledLink to="/sponsors" label="Sponsors" />
      <a href="/" className="">
        <img
          className="logo z-40 w-[100px]"
          src={whiteLogo}
          alt="nitk racing logo"
        />
      </a>
      <StyledLink to="/fbharat" label="Formula Student" />
      <StyledLink to="/achievements" label="Achievements" />
      <StyledLink to="/about" label="About" />
      {/* <StyledLink to="/crowdfunding" label="Crowdfunding" /> */}
    </div>
  );
}

export default Header;
