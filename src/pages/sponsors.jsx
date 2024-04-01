import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Section } from "../components/Section/index";
import background from "../assets/data/background";
import { SPONSORS } from "../assets/data";
import { useEffect, useState } from "react";
import client from "../config/sanity";
import MobileView from "../components/mobileview/MobileView";
import { useStateContext } from "../context";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

import { getSponsors } from "../services/SponsorsAPI"; //sponsors from CMS
import { RedGradient, WhiteGradient } from "../components/Gradient";

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

  useEffect(() => {
    getSponsors().then((data) => {
      updateSponsors(data);
    });
  }, []);

  if (!sponsors) return <p>Loading...</p>;

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

              <div className="grid grid-col lg:grid-cols-4 grid-cols-1 items-center gap-4 mx-auto">
                {sponsors &&
                  sponsors.map((sponsor) => (
                    <div className="w-[200px] h-[200px] rounded-md flex justify-center bg-gray-600  overflow-hidden items-center mx-auto p-2">
                      <img width="100%" src={urlFor(sponsor.picture)} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;
