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

import {InfiniteMovingCards} from '../../../../components/ui/infinite-moving-cards'

const About = () => {
  gsap.registerPlugin(ScrambleTextPlugin);

  return (
    <div className="bg-black lg:px-20 relative " id="about">
      <Section>
        <BlueGradient />

        <h1 className="mx-auto mb-8 lg:text-7xl lg:text-start text-5xl text-center font-semibold leading-none tracking-tighter m-5 text-neutral-600">Our Team</h1>
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

function Stat({ label, data }) {
  return (
    <div>
      <h1 className="md:text-6xl text-4xl font-black font-[outfit] text-white z-20 relative">
        <span className="relative font-[outfit]">
          <span className="tracking-[5px] text-sm font-normal block text-left">
            {label}
          </span>
          {data}
        </span>
      </h1>
    </div>
  );
}

function TeamMembers() {

    const testimonials = [
      {
        imageUrl: "https://cdn.pixabay.com/photo/2014/01/17/14/53/cat-246933__480.jpg",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
      },
      {
        imageUrl:"https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg",
        name: "William Shakespeare",
        title: "Hamlet",
      },
      {
        imageUrl: "https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
      },
      {
        imageUrl: "https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg",
        name: "Jane Austen",
        title: "Pride and Prejudice",
      },
      {
        imageUrl: "https://cdn.pixabay.com/photo/2015/04/16/15/21/cat-725793__480.jpg",
        name: "Dhruv Yadav",
        title: "Captain '23",
      },
    ];

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
