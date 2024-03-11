import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { BACKGROUNDS } from "../../assets/data";
import Marquee from "../Marquee";
import * as PropTypes from "prop-types";

function Typography(props) {
  return null;
}

Typography.propTypes = { children: PropTypes.node };
const Section = ({
  id,
  bgcolor = "#000",
  pageHeight = false,
  children,
  overlay = false,
  ...props
}) => {
  const sectionHeight = pageHeight ? "100vh" : "auto";

  return (
    <Box
      position="relative"
      className="section z-20"
      py={10}
      height={sectionHeight}
      bgcolor={bgcolor}
      {...props}
    >
      {overlay && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          sx={{
            backgroundColor: "rgba(255,0,0,0.1)",
          }}
        ></Box>
      )}
      <Container maxWidth="xl" id={id}>
        {children}
      </Container>
    </Box>
  );
};

export const SectionWithHue = ({
  id,
  bgcolor = "#000",
  pageHeight = false,
  children,
  ...props
}) => {
  const sectionHeight = pageHeight ? "100vh" : "auto";

  return (
    <Box
      height={sectionHeight}
      overflow="hidden"
      bgcolor={bgcolor}
      id={id}
      {...props}
      position="relative"
    >
      <Hue />
      <Container id={id}>{children}</Container>
    </Box>
  );
};

const Hue = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <img
      className="appearStagger"
      style={{
        position: "absolute",
        display: "block",
        width: "1000px",
        bottom: isMobile ? "150px" : "-200px",
        right: "-200px",
        transform: "rotateZ(-30deg)",
        zIndex: "0",
      }}
      src={BACKGROUNDS.lines.src}
    />
  );
};

export default Section;
