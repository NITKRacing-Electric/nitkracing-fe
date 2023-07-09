import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import properties from "./sponsors.module.css";
import SponsorsAPI from "../../../../services/SponsorsAPI";
import { ANIMATIONS, BACKGROUNDS, SPONSORS } from "../../../../assets/data";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Title } from "../../../../components/Title";
import { Section, SectionWithHue } from "../../../../components/Section";
import useGsap from "../../../../hooks/useGsap";
import gsap from "gsap";
import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const app = useRef();
  const [sponsors, setSponsors] = useState(SPONSORS);
  const [tier, setTier] = useState("Gold");
  useGsap(app, () => {
    ANIMATIONS.heading(gsap, "#sponsors");
    ANIMATIONS.appearStagger(gsap, "#sponsors", ".appearStagger");
    ANIMATIONS.emerge(gsap, "#sponsors", ".emergeContainer");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: app.current,
        start: "top top",
        end: "+=2500",
        pin: app.current,
        pinSpacing: true,
        scrub: true,
        toggleActions: "play null play null",
        immediateRender: false,
      },
    });

    timeline.to(".spnsr1", {
      opacity: 0,
      y: "-100%",
      duration: 6,
      ease: "expo.in",
    });

    timeline.to(".Gold", {
      opacity: 0,
      y: "-100%",
      duration: 6,
    });

    timeline.fromTo(
      ".spnsr2",
      {
        opacity: 0,
      },
      {
        y: "-130%",
        duration: 6,
        opacity: 1,
        ease: "expo.out",
      },
      ">-5"
    );

    timeline.fromTo(
      ".Platinum",
      {
        opacity: 0,
      },
      {
        y: "-150%",
        duration: 6,
        opacity: 1,
        ease: "expo.in",
      },
      ">-6"
    );

    timeline.to(
      ".spnsr2",
      {
        opacity: 0,
        y: "-200%",
        duration: 6,
        ease: "expo.out",
      },
      ">+6"
    );

    timeline.to(
      ".Platinum",
      {
        opacity: 0,
        y: "-200%",
        duration: 6,
        ease: "expo.out",
      },
      ">+3"
    );

    timeline.to(
      ".spnsr3",
      {
        opacity: 1,
        y: "-240%",
        duration: 6,
        ease: "expo.out",
      },
      ">-14"
    );

    timeline.fromTo(
      ".Silver",
      {
        opacity: 0,
        ease: "expo.out",
      },
      {
        opacity: 1,
        y: "-250%",
        duration: 6,
        ease: "expo.out",
      },
      "<+8"
    );
  });
  return (
    <Box ref={app}>
      <SectionWithHue py={5} id="sponsors" pageHeight>
        <Title subtitle="Season">Sponsors</Title>
        <Grid
          container
          sx={{
            flexDirection: {
              md: "row",
              xs: "column-reverse",
            },
          }}
        >
          <Grid item md={7} xs={12}>
            <TierSponsors key={tier} tier={tier} />
          </Grid>
          <Grid item md={5} xs={12}>
            <TitleSponsor />
          </Grid>
        </Grid>
      </SectionWithHue>
      <Box
        className="emergeContainer"
        pt={1}
        position="absolute"
        bottom={0}
        width="100%"
        bgcolor="black"
      >
        <Marquee>
          {SPONSORS.map((_) => (
            <Box px={1}>
              <img height="25px" src={_.picture} />
            </Box>
          ))}
        </Marquee>
      </Box>
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
        className="appearStagger"
        sx={{
          fontSize: {
            md: "10rem",
            xs: "64px",
          },
          lineHeight: {
            md: "10rem",
            xs: "64px",
          },
          left: {
            xs: "0px",
          },
        }}
      >
        Title <br /> Sponsor
      </Typography>
      <Stack justifyContent="center" alignItems="center">
        <Box bgcolor="black" zIndex="300" border="1px solid red">
          <img
            className="appearStagger"
            src={SPONSORS[3].picture}
            width={"150px"}
          />
        </Box>
        <Typography className="appearStagger" variant="body1" py={1}>
          Tesla Motors
        </Typography>
      </Stack>
    </Stack>
  );
};

const TierSponsors = ({ tier }) => {
  return (
    <Box position="relative">
      <Grid container className="spnsr1" pb={1}>
        <SponsorsList sponsors={SPONSORS.slice(0, 6)} />
      </Grid>
      <Grid container className="spnsr2">
        <SponsorsList sponsors={SPONSORS.slice(6, 12)} />
      </Grid>
      <Grid container className="spnsr3">
        <SponsorsList sponsors={SPONSORS.slice(13, 19)} />
      </Grid>
      <Box
        position="absolute"
        sx={{
          right: {
            xs: "-90px",
            md: "0px",
          },
        }}
        top="0"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(90deg)",
        }}
      >
        <Typography className="Gold" variant="subtitle" color="primary">
          Gold
        </Typography>
        <Typography lineHeight="10px" variant="body2">
          Tier
        </Typography>
        <Typography className="Platinum" variant="subtitle" color="primary">
          Platinum
        </Typography>
        <Typography className="Silver" variant="subtitle" color="primary">
          Silver
        </Typography>
      </Box>
    </Box>
  );
};

const SponsorsList = ({ sponsors, className }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return sponsors.map((_, index) => (
    <Grid className={className} item xs={6} alignSelf="center">
      <img width={isMobile ? "70%" : "50%"} src={_.picture} />
    </Grid>
  ));
};

export default Sponsors;
