import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import properties from "./sponsors.module.css";
import SponsorsAPI from "../../../../services/SponsorsAPI";
import { ANIMATIONS, BACKGROUNDS, SPONSORS } from "../../../../assets/data";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Title } from "../../../../components/Title";
import { Section, SectionWithHue } from "../../../../components/Section";
import useGsap from "../../../../hooks/useGsap";
import gsap from "gsap";

const Sponsors = () => {
  const app = useRef();
  const [sponsors, setSponsors] = useState(SPONSORS);
  useGsap(app, () => ANIMATIONS.heading(gsap, "#sponsors"));
  return (
    <Box ref={app}>
      <SectionWithHue id="sponsors" pt={10} pageHeight>
        <Title subtitle="Season">Sponsors</Title>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <TierSponsors />
          </Grid>
          <Grid item xs={5}>
            <TitleSponsor />
          </Grid>
        </Grid>
      </SectionWithHue>
    </Box>
  );
};

const TitleSponsor = () => {
  return (
    <Stack
      direction="row"
      zIndex="100"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Typography
        zIndex="200"
        variant="bgText"
        position="absolute"
        left="0px"
        bottom="0px"
      >
        Title <br /> Sponsor
      </Typography>
      <Stack justifyContent="center" alignItems="center">
        <Box bgcolor="black" zIndex="300" border="1px solid red">
          <img src={SPONSORS[3].picture} width={"150px"} />
        </Box>
        <Typography variant="body1" py={1}>
          Tesla Motors
        </Typography>
      </Stack>
    </Stack>
  );
};

const TierSponsors = () => {
  return (
    <Box position="relative">
      <Grid container>
        {SPONSORS.slice(0, 8).map((_, index) => (
          <Grid item xs={6} alignSelf="center">
            <img width="50%" src={_.picture} />
          </Grid>
        ))}
      </Grid>
      <Box
        position="absolute"
        right="0"
        top="0"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(90deg)",
        }}
      >
        <Typography variant="subtitle" color="primary">
          Gold
        </Typography>
        <Typography lineHeight="10px" variant="body2">
          Tier
        </Typography>
      </Box>
    </Box>
  );
};

export default Sponsors;
