import React, { useEffect, useState } from "react";

import { Section } from "../components/Section";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/reveal";
import { FiUpload } from "react-icons/fi";
import { TypewriterEffectSmooth } from "../components/ui/typewriter";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d";
import car from '../assets/background/nkr_car_render.png'
import { Tabs } from '../components/ui/tabs';
import { useStateContext } from "../context";
import MobileView from "../components/mobileview/MobileView";


function FormulaBharatPage() {
  const {drawerOpen} = useStateContext()
    const words = [
      {
        text: "Formula",
        className: "md:text-center text-center text-9xl font-[outfit] font-semibold justify-center text-white",
      },
      {
        text: "Student",
        className: "md:text-center text-center text-9xl font-[outfit] font-semibold justify-center text-white",
      },
    ];
  return (
    <div>
      {
            drawerOpen ? (<MobileView />) : null
      }

      <div className="bg-[#0a1621] py-10 pt-40 pl-4 md:pl-10 lg:px-20 xl:px-32">
      <div className="text-center text-xl md:text-6xl lg:text-8xl font-[outfit] font-semibold text-white flex justify-center items-center">
        <div className="hidden lg:block">
          <TypewriterEffectSmooth words={words}/>
        </div>
        <h1 className="text-4xl lg:hidden p-2">Formula Student</h1>
      </div>
        <div className="flex flex-col items-center justify-center px-4 md:px-10">
        <p className="text-left pt-2 text-white opacity-70 text-sm md:text-md lg:text-lg xl:text-xl max-w-2xl">
          Formula SAE (Society of Automotive Engineers) is a series of international competitions in which university teams across the globe compete to design and manufacture the best performing race cars.
          <br />
          <br />
          Students build a single seat formula race car. The competition is not won solely by the team with the fastest car, but rather by the team with the best overall package of construction, performance, cost and sales planning. This competition challenges the team members to put their knowledge to the test by incorporating it into building and manufacturing a durable and agile vehicle and considering the economic and business aspects of the racecar side by side.
          <br />
          <br />
          During these events students must present their knowledge of the car and engineering concepts to a panel of judges. At most events, there are multiple rounds of questioning, with increasingly difficult questions and longer sessions. The primary round involves all the teams, and focuses on fundamental knowledge of vehicle.
        </p>

        <div className="flex flex-wrap justify-center items-center mt-10">
        <img
          // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={car}
          height="2000"
          width="1000"
          className="h-auto w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl group-hover:card:shadow-xl mx-2"
          alt="thumbnail"
        />
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src={car}
          height="2000"
          width="1000"
          className="h-auto w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl group-hover:card:shadow-xl mx-2"
          alt="thumbnail"
        />
        </div>
        </div>
      </div>


      <Section>
      <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
        <h1 className="text-2xl md:text-4xl text-center mb-2 font-semibold">About Formula Student</h1>
        <p className="text-sm md:text-base text-justify">
          Teams take on this project on the assumption that they are a manufacturer developing a prototype to be evaluated for production. The target audience is the non-professional weekend racer. The car should have good driving characteristics like acceleration, braking, and handling. It should be offered at a reasonable cost and be reliable and dependable. Additionally, the car’s market value increases through other factors such as aesthetics, comfort and the use of readily available, standard purchase components.

          <br/><br/>

          This isn’t solely an engineering-based event because there are other factors to consider, like the labour of the manufacturing processes, the business viability of the product i.e., the racecar, the finance that goes into the car's production and all management that goes with it, and finally the on-road performance of the car on the track which is via the driving skills of the driver, making it an overall development experience rather than just an academic experience.
        </p>
      </div>
      </Section>
    </div>
  );
}

export default FormulaBharatPage;
