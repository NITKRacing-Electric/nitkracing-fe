import React from "react";
import { Box, Container } from "@mui/material";

const Section = ({ id, bgcolor = "#000", children, ...props }) => {
  return (
    <Box bgcolor={bgcolor} {...props}>
      <Container id={id}>{children}</Container>
    </Box>
  );
};

export default Section;
