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

const Index = (props) => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });

  return (
    <Box ref={scrollRef}>
      <Hero />
      <About />
      <Sponsors/>
    </Box>
  );
};

export default Index;
