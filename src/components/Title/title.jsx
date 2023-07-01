import React from "react";
import { Box, Typography } from "@mui/material";

const Title = ({ subtitle, children }) => {
  return (
    <Box pb={7}>
      <Typography className="G_Subtitle" variant="subtitle" color="primary">
        {subtitle}
      </Typography>
      <Typography className="G_Title" variant="title">
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
