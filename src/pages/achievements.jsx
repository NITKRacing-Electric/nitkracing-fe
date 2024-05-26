import React, { useEffect, useState } from "react";
import teamImage from '../images/achievements/team image.jpg'

import { Section } from "../components/Section";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/ui/reveal";
import { FiUpload } from "react-icons/fi";
import { useStateContext } from "../context";
import MobileView from "../components/mobileview/MobileView";
import TimelineComp from "../components/Timeline/Timleline";
import { drawer } from "@material-tailwind/react";
import { div } from "three/examples/jsm/nodes/Nodes.js";


function AchievementPage() {
  const {drawerOpen} = useStateContext()

  return (
    <div>
      {
        drawerOpen ? (<MobileView />) : null
      }


      <div className="bg-black">
        <img src={teamImage} alt="team image" className="bg-no-repeat bg-cover bg-center opacity-30  "/>


      <div className="absolute w-full h-full top-[-180px] ml:top-[-250px] sm:top-[-200px] lg:top-[-300px] xl:top-0 flex flex-col justify-center items-center text-white gap-6"> <h1 className="md:text-left text-center lg:text-5xl text-4xl xl:text-7xl font-[outfit] font-semibold ">
          Our Achievements
        </h1>
        <p className="md:text-left text-center text-sm pt-2 text-white opacity-70 sm:text-xl whitespace-normal">
          We are lorem ipsum dolor ipsum dolor ipsum We are lorem ipsum dolor{" "}
          <br />
          ipsum dolor ipsum We are lorem ipsum dolor ipsum dolor ipsum
        </p></div>
        



      </div>

      <div className="mt-24">
        {/* here goes the timeline */}
        <div className="text-red-700 font-bold text-5xl sm:text-7xl text-center mb-11">Timeline</div>
        <TimelineComp />
        
      </div>


      <Section>

      {/* <CanvasRevealEffectDemo/> */}
      </Section>
    </div>
  );
}

export default AchievementPage;

// function CanvasRevealEffectDemo() {
//   const {achievementsData , isLoading} = useStateContext()

//     if(isLoading){
//       return (
//         <div>
//           ...Loading...
//         </div>
//       )
//     }
    

//     const achievements = [
//       {
//         title:achievementsData[0].title,
//         upText:'To be filled'
//       },
//       {
//         title:achievementsData[1].title,
//         upText:'To be filled'
//       },
//       {
//         title:achievementsData[2].title,
//         upText:'To be filled'
//       },
//       {
//         title:achievementsData[3].title,
//         upText:'To be filled'
//       },
//       {
//         title:achievementsData[4].title,
//         upText:'To be filled'
//       },
//       {
//         title:achievementsData[5].title,
//         upText:'To be filled'
//       },
//     ]


//   return (
//     <>
//       <div className="py-20 flex flex-col lg:grid lg:grid-cols-3 items-center justify-center w-full gap-4 mx-auto px-8">
      

//       {
          
//           achievements.map((achievement) =>

//               <Card title={achievement.upText} icon={<AceternityIcon />} upText={achievement.title}>
//               <CanvasRevealEffect
//                 animationSpeed={3}
//                 containerClassName="bg-black"
//                 colors={[
//                   [255, 221, 222],
//                   [255, 0, 0],
//                 ]}
//                 dotSize={2}
//               />
//               </Card>
//           )
          
//       }

//       </div>
//     </>
//   );
// }

// const Card = ({
//   title,
//   icon,
//   upText,
//   children,
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
//     >
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />


//       <div className={`absolute z-20 p-4 transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
//               <h2 className="text-white text-xl font-bold mt-4">{upText}</h2>
//               </div>


//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20">
//         {/* <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
//           {icon}
//         </div> */}
//         <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );
// };

// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

// export const Icon = ({ className, ...rest }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };





// {
//   title: "In Baja'23",
//   upText: "Won 1st Prize"
// },
// {
//   title: "In 2023",
//   upText: "Best Car Award"
// },
// {
// title: "hi there dave here",
// upText: "hustling hard"
// },
// {
// title: "hi there dave here",
// upText: "hustling hard"
// },
// {
// title: "hi there dave here",
// upText: "hustling hard"
// },
// {
// title: "hi there dave here",
// upText: "hustling hard"
// },