import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Section } from "../components/Section/index";
import background from "../assets/data/background";
import { SPONSORS } from "../assets/data";
import { useEffect, useState } from "react";
import client from "../config/sanity";
import MobileView from "../components/mobileview/MobileView";
import { useStateContext } from "../context";
import MediaCard from "../components/utils/Card";
import {PinContainer} from "../components/ui/3d-pin"

import imageUrlBuilder from "@sanity/image-url";

//function for the card
export function AnimatedPinDemo(sponsor) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center ">
      <PinContainer
        title={sponsor.name}
        href="https://google.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {sponsor.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Thanking {sponsor.name} for trusting us
            </span>
          </div>
          <div className="flex flex-1 max-w-full rounded-lg mt-4 " >
          {/* {urlFor(sponsor.picture)} */}
            <img src={urlFor(sponsor.picture)} alt="" className="w-full h-auto"/>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

import { getSponsors } from "../services/SponsorsAPI"; //sponsors from CMS
import { RedGradient, WhiteGradient } from "../components/Gradient";
import { div } from "three/examples/jsm/nodes/Nodes.js";

function SponsorsPage() {
  return (
    <div className="lg:px-20 relative">
      <Section>
        <Sponsor />
      </Section>
    </div>
  );
}

function Sponsor() {
  const { drawerOpen } = useStateContext();

  const [sponsors, updateSponsors] = useState([]);
  const [tierType , setTierType] = useState()

  useEffect(() => {
    getSponsors().then((data) => {
      updateSponsors(data);
      console.log(sponsors)
      sponsors.map((sponsor)=>{
        console.log(urlFor(sponsor.picture))
      })
    });
  }, []);

  if (!sponsors) return <p>Loading...</p>;
  const silverTier = sponsors?.filter((sponsor)=>(
    sponsor.tier == 'silver'
  ))

  const goldTier = sponsors?.filter((sponsor)=>(
    sponsor.tier == 'gold'
  ))

  const platinumTier = sponsors?.filter((sponsor)=>(
    sponsor.tier == 'platinum'
  ))

  console.log('gold' , goldTier)
  console.log('silver' , silverTier)
  console.log('platinum' , platinumTier)

  const tier_list = ["Silver", "Gold", "Platinum"];
  const tierColorClass = {
    gold: "text-yellow-400",
    silver: "text-gray-400",
    platinum: "text-blue-400",
  };

  return (
    <section>
      {drawerOpen ? <MobileView /> : null}
      <div class="relative items-center w-full py-12">
        <div className=" w-full gap-6 ">
          {tier_list.map((tier) => (
            
              <div className="">
              <h1
                className={`mx-auto mb-8 lg:text-7xl lg:text-start text-5xl text-center font-semibold leading-none tracking-tighter m-5 ${
                  tierColorClass[tier.toLowerCase()] || "text-neutral-600"
                } `}
              >
                {tier} Tier
              </h1>

              <div className="grid grid-col md:grid-cols-2 xl:grid-cols-3 grid-cols-1 items-center gap-4 mx-auto">
                {
                  tier === "Silver" ? silverTier.map((sponsor)=>(
                    AnimatedPinDemo(sponsor)
                  )) : (tier === 'Gold' ? goldTier.map((sponsor)=>(
                    AnimatedPinDemo(sponsor)
                  )) : platinumTier.map((sponsor)=>(
                    AnimatedPinDemo(sponsor)
                  )))
                }



                  
              </div>
            </div>
            
))}
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;


// { tierType == 'Silver' && silverTier.map((sponsor)=>(
//   AnimatedPinDemo(sponsor)
// ))}

// { tierType == 'Gold' && goldTier.map((sponsor)=>(
//   AnimatedPinDemo(sponsor)
// ))}

// { tierType == 'Platinum' && platinumTier.map((sponsor)=>(
//   AnimatedPinDemo(sponsor)
// ))}