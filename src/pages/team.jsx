import { useState } from "react";
import { PersonCard } from "../components";
import { Section } from "../components/Section";

function TeamPage() {
  const [activeYear, setActiveYear] = useState(2020);

  const handleChangeActiveYear = (activeYear) => () => {
    console.log(activeYear);
    setActiveYear(activeYear);
  };

  return (
    <div>
      <div className=" bg-red-700 py-10 pt-80 pr-10">
        <h1 className="text-right text-6xl font-[outfit] font-semibold">
          Who we are?
        </h1>
        <p className="text-right pt-2 text-white opacity-70 text-sm">
          We are lorem ipsum dolor ipsum dolor ipsum We are lorem ipsum dolor{" "}
          <br />
          ipsum dolor ipsum We are lorem ipsum dolor ipsum dolor ipsum
        </p>
      </div>
      <Section>
        <div className="flex">
          <div className="">
            <div className=""></div>
          </div>
        </div>
        <div className="flex items-end justify-end">
          {[2020, 2021, 2022, 2023].map((_) => (
            <Chip
              onClick={handleChangeActiveYear(_)}
              label={_}
              active={activeYear === _}
            />
          ))}
        </div>
        <div className="p-5" />
        <div className="flex justify-between">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </Section>
    </div>
  );
}

function Chip({ label, active, onClick }) {
  const activeStyles = `bg-red-700`;
  return (
    <button
      onClick={onClick}
      className={`inline-block px-4 py-2 font-bold fon-[outfit] rounded ${
        active && activeStyles
      }`}
    >
      <p className="text-sm">{label}</p>
    </button>
  );
}

function YearSelection() {
  return <div></div>;
}

export default TeamPage;
