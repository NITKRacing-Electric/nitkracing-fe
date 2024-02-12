import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Section } from "../../../../components/Section/index.js";
import RacingBg from "../../../../assets/background/racing.png";
import useGsap from "../../../../hooks/useGsap.js";
import gsap from "gsap";
import Marquee from "../../../../components/Marquee/index.jsx";
import ScrambleTextPlugin from "gsap/TextPlugin";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const About = () => {
  gsap.registerPlugin(ScrambleTextPlugin);

  return (
    <div className="bg-black px-20" id="about">
      <div className="spacer my-20 text-center">Scroll</div>

      <Section>
        <div className="bg-white h-[60px]  py-4 text-red-700">
          <Marquee>
            <p>B'luru woman CEO tried to kill herself after son's murder</p>
            <p>B'luru woman CEO tried to kill herself after son's murder</p>
            <p>B'luru woman CEO tried to kill herself after son's murder</p>
          </Marquee>
        </div>
        <div className="relative flex gap-5 flex-col md:flex-row mt-5">
          <div className="h-[70vh] w-3/4 border-red-700 border-[1px] p-4 bg-center bg-cover bg-[url('https://media.formula1.com/content/dam/fom-website/sutton/2022/Brazil/Saturday/1441003037.jpg.img.1536.high.jpg')] grayscale">
            <div className="absolute bottom-0 right-0 p-4">
              <p className="font-[outfit] text-sm">Dhruv Yadav</p>
            </div>
          </div>
          <div className="flex flex-grow flex-col gap-5">
            {/* <div className="h-[100px] relative">
              <div className="flex justify-between">
                <Stat label="Races" data="230K" />
                <Stat label="Trophies" data="122L" />
                <Stat label="Alumnis" data="230W" />
              </div>
              <p className="racing z-0 font-black text-[98px] text-red-700 opacity-20 absolute left-1/2 -translate-x-1/2 w-full top-0">
                <span className="char inline-block font-[outfit]">#LIVE</span>
                <span className="char inline-block font-[outfit]">TO</span>
                <span className="char inline-block font-[outfit]">RACE</span>
              </p>
            </div> */}
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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden h-full" ref={emblaRef}>
      <div className="embla__container flex h-full">
        <div className="embla__slide flex-[0_0_100%] min-w-0 h-full">
          <Member title="Dhruv yadav" />
        </div>
        <div className="embla__slide flex-[0_0_80%] h-full">
          {" "}
          <Member title="Dhruv yadav" />
        </div>
        <div className="embla__slide flex-[0_0_100%] h-full">
          <Member title="Dhruv yadav" />
        </div>
      </div>
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
