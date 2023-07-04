import React from "react";
import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import { BACKGROUNDS } from "../../assets/data";

const Section = ({
  id,
  bgcolor = "#000",
  pageHeight = false,
  children,
  ...props
}) => {
  const sectionHeight = pageHeight ? "100vh" : "auto";

  return (
    <Box height={sectionHeight} bgcolor={bgcolor} {...props}>
      <Container id={id}>{children}</Container>
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
