import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import properties from "./sponsors.module.css";
// import SponsorsAPI from "../../../../services/SponsorsAPI";
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
import Logo from "../../../../images/logo/logo_white.png";

const Sponsors = () => {
  return (
    <Section className="px-20 mb-20">
      <div className="flex justify-center items-center gap-5 mb-10">
        <img src={Logo} className="w-[80px]" />
        <div className="h-[40px] w-[1px] bg-white" />
        <p className="text-2xl font-light tracking-tighter">Our Partners</p>
      </div>

      <SponsorList items={SPONSORS} />
    </Section>
  );
};

function SponsorList({ items }) {
  return (
    <div className="block">
      <Marquee autoFill style={{}} direction="right" speed={30}>
        {" "}
        {items.map((_) => (
          <img src={_.picture} className="h-[60px] grayscale mx-4" />
        ))}
      </Marquee>
    </div>
  );
}

export default Sponsors;
