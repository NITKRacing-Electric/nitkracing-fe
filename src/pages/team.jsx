import { useEffect, useState } from "react";
import { PersonCard } from "../components";
import { Section } from "../components/Section";
import { getTeamLeads } from "../services/TeamLeadsAPI"; //Fetch team leads from the service
import {getTeamMembers} from "../services/TeamMembersAPI" //Fetch team members from the service
import { useStateContext } from "../context";
import MobileView from "../components/mobileview/MobileView";
import bgVideo from "../assets/background/background video .mp4"
import { urlFor } from "../pages/sponsors";


function TeamPage() {

  const {isLoading , membersData} = useStateContext()
  if(isLoading){
    return (<div>...Loading...</div>)

  }
  const testimonials = membersData.map((member) => ({
    imageUrl: urlFor(member.image),
    name: member.memberName,
    position: member?.heading
}));
  const {drawerOpen} = useStateContext()
  const [activeYear, setActiveYear] = useState(2020);
  const [teamLeads, setTeamLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const handleChangeActiveYear = (activeYear) => () => {
    console.log(activeYear);
    setActiveYear(activeYear);
  };

  useEffect(() => {
    // Fetch team leads and team members when the component mounts
    getTeamLeads()
      .then((result) => setTeamLeads(result))
      .catch((error) => console.error('Error:', error));

    // Fetch team members when the component mounts
    getTeamMembers()
      .then((result) => setTeamMembers(result))
      .catch((error) => console.error('Error:', error));

      console.log("Fetched Team Leads", teamLeads);
      console.log("Fetched Team Members", teamMembers);
  }, []);

  return (
    <div>
      {
            drawerOpen ? (<MobileView />) : null
      }
      <div className=" bg-red-700">
        <video src={bgVideo} autoPlay loop muted className="opacity-40"/>
        <div className="absolute w-full h-full top-[-200px] ml:top-[-300px] sm:top-[-300px] lg:top-[-300px] xl:top-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-lg lg:text-6xl font-[outfit] font-semibold">
            Who we are?
          </h1>
          <p className="md:text-center text-center pt-2 text-white opacity-70 text-sm">
            We are lorem ipsum dolor ipsum dolor ipsum We are lorem ipsum dolor{" "}
            <br />
            ipsum dolor ipsum We are lorem ipsum dolor ipsum dolor ipsum
          </p>
        </div>
        
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
        <div className="flex justify-between flex-col items-center gap-10 sm:grid-cols-3 sm:grid lg:grid-cols-5 ">
          {testimonials.map((item)=>(
            <PersonCard image={item.imageUrl} name={item.name} position={item.position}/>

          ))}
          
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
