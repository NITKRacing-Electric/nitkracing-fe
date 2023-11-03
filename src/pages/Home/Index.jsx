import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import "./styles.css";
import properties from "./home.module.css";
import helmetFront from "../../images/hero/helmet_front.png";
import helmetRight from "../../images/hero/helmet_right.png";
import helmetLeft from "../../images/hero/helmet_left.png";
import ThreeD from "./sections/ThreeD/index";

import "./anime.css";
import Team from "./sections/Team/index";
import Sponsors from "./sections/Sponsors/Index";
import useScrollSnap from "react-use-scroll-snap";
import Hero from "./sections/Hero";
import { Box } from "@mui/material";
import About from "./sections/About/index.jsx";
import Statistics from "./sections/Statistics/index.jsx";

const Index = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });

  return (
    <Box ref={scrollRef}>
      <Hero />

        <About/>

        <Statistics/>
      <ThreeD />

      <Team />

      <Sponsors />
    </Box>
  );
};

export default Index;
