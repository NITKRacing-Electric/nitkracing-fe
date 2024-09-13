import { useEffect, useState } from "react";
import { PersonCard } from "../components";
import { Section } from "../components/Section";
import { getTeamLeads } from "../services/TeamLeadsAPI"; //Fetch team leads from the service
import { getTeamMembers } from "../services/TeamMembersAPI" //Fetch team members from the service
import { useStateContext } from "../context";
import MobileView from "../components/mobileview/MobileView";
import bgVideo from "../assets/background/background video .mp4"
import { urlFor } from "../pages/sponsors";


function TeamPage() {

  const { isLoading, membersData, drawerOpen } = useStateContext();
  const [activeYear, setActiveYear] = useState(2023);
  const [teamLeads, setTeamLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

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

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen bg-black text-white">Loading...</div>;
  }

  const testimonials = membersData.map((member) => ({
    imageUrl: urlFor(member.image),
    name: member.memberName,
    position: member?.heading
}));

  const handleChangeActiveYear = (year) => () => {
    setActiveYear(year);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {drawerOpen && <MobileView />}
      <div className="relative h-screen">
        <video src={bgVideo} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-[outfit] font-semibold mb-4">
            Who we are?
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base opacity-70">
            We are a passionate team dedicated to pushing the boundaries of automotive engineering and racing technology. Our diverse group of talented individuals works tirelessly to innovate, design, and compete at the highest levels of motorsport.
          </p>
        </div>
      </div>
      
      <Section className="py-16">
        <div className="flex justify-end mb-8">
          {[2020, 2021, 2022, 2023].map((year) => (
            <Chip
              key={year}
              onClick={handleChangeActiveYear(year)}
              label={year}
              active={activeYear === year}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {testimonials.map((item, index) => (
            <PersonCard key={index} image={item.imageUrl} name={item.name} position={item.position} />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-bold font-[outfit] rounded-full text-sm transition-colors duration-300 ${
        active ? 'bg-red-700 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );
}

export default TeamPage;
