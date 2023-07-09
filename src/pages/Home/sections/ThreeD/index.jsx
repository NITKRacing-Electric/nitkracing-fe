import React from "react";
import properties from "./threed.module.css";
import "./styles.css";
import Model from "../../../../components/model/index";
import { Section, SectionWithHue } from "../../../../components/Section";
import { Grid, Typography } from "@mui/material";
import { Title } from "../../../../components/Title";

const ThreeD = (props) => {
  return (
    <Section pt={2} id="threeD" position="relative">
      <Title subtitle="models">Subsystem</Title>
      <Typography variant="title">
        Under <br /> Construction
      </Typography>
    </Section>
  );
};

// <Grid container>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
//     <Grid item md={4} xs={12}>
//         <Model />
//     </Grid>
// </Grid>
export default ThreeD;
