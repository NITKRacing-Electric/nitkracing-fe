import React from "react";
import { Box, Container } from "@mui/material";
import { BACKGROUNDS } from "../../assets/data";

const Section = ({ id, bgcolor = "#000", children, ...props }) => {
  return (
    <Box bgcolor={bgcolor} {...props}>
      <Container id={id}>{children}</Container>
    </Box>
  );
};

export const SectionWithHue = ({
  id,
  bgcolor = "#000",
  children,
  ...props
}) => {
  return (
    <Box overflow="hidden" bgcolor={bgcolor} {...props} position="relative">
      <Hue />
      <Container id={id}>{children}</Container>
    </Box>
  );
};

const Hue = () => {
  return (
    <img
      style={{
        position: "absolute",
        display: "block",
        width: "1000px",
        bottom: "-200px",
        right: "-200px",
        transform: "rotateZ(-30deg)",
        zIndex: "0",
      }}
      src={BACKGROUNDS.lines.src}
    />
  );
};

export default Section;
