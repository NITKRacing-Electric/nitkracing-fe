import { HoverEffect } from "../components";
import { Section } from "../components/Section";
import WheatSVG from "../assets/wheat.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { useStateContext } from "../context";
import { drawer } from "@material-tailwind/react";
import MobileView from "../components/mobileview/MobileView"
import { Link } from 'react-router-dom';

const features = [
  {
    id: 0,
    title: "Feature",
    description: "",
  },
  {
    id: 1,
    title: "Feature",
    description: "",
  },
  {
    id: 2,
    title: "Feature",
    description: "",
  },
  {
    id: 3,
    title: "Feature",
    description: "",
  },
];

const tiers = [
  {
    title: "Gold",
    pledge: "235 USD",
    features: [0], // ids of the features
  },
];

function CrowdfundingPage() {
  const {drawerOpen} = useStateContext()
  return (
    
    <div>
      {
        drawerOpen ? (<MobileView />) : null
      }
      <Section>
        <div className="py-10"></div>

        <div className="flex flex-col gap-y-4 items-center justify-center sm:grid sm:grid-cols-2">
          <div>
            <img src="http://www.orion-racing.com/assets/img/Team%20Images/Crowdfunding%20checkpoint%20100k.png" />
          </div>
          <div className="">
            <h1 className="text-5xl leading-loose text-center sm:text-right">
              <HoverEffect>Crowdfunding</HoverEffect>
            </h1>

            <p className="text-md text-center sm:text-right text-gray-400">
              Orion Racing India is the official Formula SAE team of K. J.
              Somaiya College of Engineering, Mumbai. The team is formed by 60+
              undergraduate students from various engineering departments whose
              vision is to achieve something tangible at an undergraduate level.
            </p>
          </div>
        </div>
      </Section>
      <div className="bg-white text-black py-14">
        <div className="w-fit m-auto relative">
          {/* <img
            className="w-5 sm:w-10 rotate-45 -top-10 -right-10 sm:-top-20 sm:-right-20 absolute"
            src={WheatSVG}
          /> */}
          {/* <img
            className="w-5 sm:w-5 -rotate-45 bottom-0 right-[208px] sm:bottom-1 sm:-right-0 absolute"
            src={WheatSVG}
          /> */}
          <h1 className="text-3xl sm:text-5xl leading-loose text-center">
            <HoverEffect>Achievements</HoverEffect>
          </h1>
          
        </div>
        <div className="pt-20 grid grid-cols-2 pl-3 pr-3 gap-2 sm:flex sm:flex-row sm:gap-4 sm:justify-center">
          <Stat />
          <Stat />
          <Stat />
          <Stat />

          <Stat />
        </div>
        <div className="mt-16  text-2xl flex justify-center items-center bg-red-100 p-4  hover:cursor-pointer">
          <div>
            <Link to= '/achievements'>Want to know more about our Achievements➡️</Link>
          </div>
        </div>
      </div>
      <Section>
        <h1 className="text-5xl leading-loose text-center">
          <HoverEffect>Sponsorship</HoverEffect>
        </h1>
        <Table features={features}>
          <Tier
            idx={0}
            title={"Gold"}
            pledge={"210 USD"}
            checkedFeatures={[0, 2]}
          />
          <Tier
            idx={1}
            title={"Platinum"}
            pledge={"210 USD"}
            checkedFeatures={[0, 4]}
          />
          <Tier
            idx={2}
            title={"Silver"}
            pledge={"210 USD"}
            checkedFeatures={[1, 2]}
          />
        </Table>

        <div className="py-10">
          <h1 className="text-5xl leading-loose text-center">
            <HoverEffect>Supporters</HoverEffect>
          </h1>
          <Marquee speed={40}>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
            <p className="px-2 text-3xl mt-5">Dhruv yadav</p>
          </Marquee>
          <Marquee direction="right" speed={20}>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
            <p className="px-2 text-lg mt-3">Dhruv yadav</p>
          </Marquee>
        </div>
      </Section>
    </div>
  );
}

function Stat() {
  return (
    <div className="inline-block p-5 border-black border-2">
      <h1 className="font-[outfit] text-4xl sm:text-7xl font-bold whitespace-nowrap">120 K</h1>
      <p className="font-sm tracking-widest">Races won</p>
    </div>
  );
}

function Table({ children, features = [] }) {
  let numOfCols = children.length;
  if (numOfCols === undefined) {
    children = [children];
    numOfCols = 1;
  }

  return (
    <div className={`border-[1px] border-white grid grid-cols-4`}>
      <div className="features-column">
        <div className="h-[100px] bg-slate-800"></div>
        {features.map((feature, index) => (
          <div className={`py-4 bg-slate-${index % 2 !== 0 ? 800 : 900}`}>
            <p className="text-center">{feature.title}</p>
            <p className="text-sm text-center">Description</p>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

// TIER
// {
//   title,
//   pledge
// }

function Tier({ title, pledge, idx, checkedFeatures }) {
  const shades = [500, 700, 900];
  const bg = `bg-green-${shades[idx]}`;

  // Feature checkmarks
  const checkMarks = [];

  for (let i = 0; i < features.length; i++) {
    const feature = features[i];

    const isFeaturePresent = checkedFeatures.includes(feature.id);

    if (isFeaturePresent)
      checkMarks.push(
        <div className="flex-grow bg grid place-content-center">
          <IoCheckmarkCircle fontSize={32} />
        </div>
      );
    else
      checkMarks.push(
        <div className="flex-grow grid place-content-center">
          <IoCheckmarkCircle fontSize={0} />
        </div>
      );
  }

  return (
    <div
      className={`flex flex-col items-center ${bg} shadow-xl relative z-[${idx}] bg-green-700`}
    >
      <div className="p-4 h-[100px] w-full scrollbar-hidden">
        <h1 className="text-center text-xl font-normal sm:text-3xl sm:font-semibold tracking-wider font-[outfit] whitespace-nowrap">
          {title}
        </h1>
        <h1 className="text-center text-xl font-normal sm:text-3xl sm:font-semibold tracking-wider font-[outfit] whitespace-nowrap">
          {pledge}
        </h1>
      </div>

      {checkMarks}
    </div>
  );
}

export default CrowdfundingPage;