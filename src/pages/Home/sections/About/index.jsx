import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Section } from "../../../../components/Section/index.js";
import RacingBg from "../../../../assets/background/racing.png";
import useGsap from "../../../../hooks/useGsap.js";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/TextPlugin";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  BlueGradient,
  Gradient,
  RedGradient,
  WhiteGradient,
} from "../../../../components/Gradient.jsx";
import Marquee from "react-fast-marquee";
import { useStateContext } from "../../../../context";

import { InfiniteMovingCards } from "../../../../components/ui/infinite-moving-cards";
import { urlFor } from "../../../sponsors.jsx";

const About = () => {
  gsap.registerPlugin(ScrambleTextPlugin);

  return (
    <div className="bg-black lg:px-20 relative " id="about">
      <Section>
        <BlueGradient />

        <h1 className="text-3xl sm:text-6xl text-blue-200 font-semibold font-[prompt] mb-4">
          Our Team
        </h1>
        <div className="relative flex gap-5 flex-col md:flex-row mt-5">
          <RedGradient />

          <div className="flex flex-grow flex-col gap-5">
            <div className="h-full">
              <TeamMembers />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

function TeamMembers() {
  const { isLoading, membersData } = useStateContext();

  if (isLoading) return <p>Loading...</p>;

  const testimonials = membersData.map((member) => ({
    imageUrl: urlFor(member.image),
    name: member.memberName,
    title: member.memberName,
  }));

  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

function Member({ title, description, date }) {
  return (
    <div className="mx-2 relative bg-red-500 flex-grow border-red-700 border-[1px] p-4 h-full bg-contain bg-[url('https://media.formula1.com/content/dam/fom-website/sutton/2022/Brazil/Saturday/1441003037.jpg.img.1536.high.jpg')] grayscale">
      <div className="absolute bottom-0 right-0 p-4">
        <p className="font-[outfit] text-sm">{title}</p>
      </div>
    </div>
  );
}

export default About;
