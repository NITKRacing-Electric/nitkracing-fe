import { ReactP5Wrapper } from "@p5-wrapper/react";
import { Section } from "../components/Section/index";
import background from "../assets/data/background";
import { SPONSORS } from "../assets/data";
import { useEffect, useState } from "react";
import client from "../config/sanity";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

import { getSponsors } from "../services/SponsorsAPI"; //sponsors from CMS
import { RedGradient, WhiteGradient } from "../components/Gradient";

function SponsorsPage() {
  const [sponsors, updateSponsors] = useState([]);
  useEffect(() => {
    getSponsors().then((data) => {
      updateSponsors(data);
    });
  }, []);
  if (!sponsors) return <p>ANS</p>;
  return (
    <div className="px-20 relative">
      <Section>
        <Sponsor />

        <div className="flex flex-wrap gap-4">
          {sponsors &&
            sponsors.map((sponsor) => (
              <div className="w-[60px] h-[60px] rounded-full bg-neutral-900  overflow-hidden flex items-center relative">
                <img width="100%" src={urlFor(sponsor.picture)} />
              </div>
            ))}
        </div>
      </Section>
    </div>
  );
}

function Sponsor() {
  return (
    <section>
      <div class="relative items-center w-full py-12 mx-auto   ">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          <div class="p-6 border-4 border-blue-500  rounded-3xl">
            <img
              class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg"
              alt="blog"
            />

            <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  text-neutral-600 lg:text-3xl">
              Silver Tier
            </h1>
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              Free and Premium themes, UI Kit's, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
          </div>
          <div class="p-6">
            <img
              class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg"
              alt="blog"
            />

            <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Gold sponsor
            </h1>
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              Free and Premium themes, UI Kit's, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
          </div>
          <div class="p-6">
            <img
              class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
              src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2020/02/Usign-Gradients-Featured-Image.jpg"
              alt="blog"
            />

            <h1 class="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              Platinum Sponsor
            </h1>
            <p class="mx-auto text-base leading-relaxed text-gray-500">
              Free and Premium themes, UI Kit's, templates and landing pages
              built with Tailwind CSS, HTML &amp; Next.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;
