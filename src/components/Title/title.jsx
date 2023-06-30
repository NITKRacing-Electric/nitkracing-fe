import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ subtitle, children }) => {
  return (
    <Box pb={7}>
      <Typography variant="subtitle" color="primary">
        {subtitle}
      </Typography>
      <Typography variant="title">{children}</Typography>
    </Box>
  );
};

export default Title;
