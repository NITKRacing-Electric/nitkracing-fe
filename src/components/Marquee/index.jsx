import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FiArrowRight } from "react-icons/fi";
import gsap from "gsap";
import useGsap from "../../hooks/useGsap.js";
import { LuSparkle } from "react-icons/lu";
const Marquee = ({ children }) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  useGsap(".marquee", () => {
    gsap.to(".marquee__part", {
      xPercent: -100,
      repeat: -1,
      duration: 5,
      ease: "linear",
    });
  });
  return (
    <Box
      className="marquee"
      sx={{
        overflowX: "hidden",
      }}
    >
      <Box
        className="marquee__inner"
        sx={{
          display: "flex",
          width: "fit-content",
          flex: "auto",
          flexDirection: "row",
        }}
      >
        {children.map((_) => (
          <Box
            className="marquee__part"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              padding: "0 4px",
              height: "fit-content",
            }}
          >
            {_} <Box className="arrow"></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
