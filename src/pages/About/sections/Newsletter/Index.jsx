import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import magazineImage1 from '../../../../images/magasie.jpeg';

// Example newsletter data - you can fetch this data from an API or your state management store
const newsletters = [
  {
    id: 1,
    title: "Pitstop",
    description:
      "Get unparalleled access to the thrilling world of NR Racing. Discover exclusive updates, thrilling race analyses, and in-depth team strategies with our NR Newsletter. Tailored for true NR aficionados.",
    image: magazineImage1,
    alt: "Exclusive F1 Insights",
  },
  {
    id: 2,
    title: "Pitstop",
    description:
      "Get unparalleled access to the thrilling world of NR Racing. Discover exclusive updates, thrilling race analyses, and in-depth team strategies with our NR Newsletter. Tailored for true NR aficionados.",
    image: magazineImage1,
    alt: "Exclusive F1 Insights",
  },
];

const NewsLetterPage = () => {
  return (
    <section id="newsletter" aria-label="Newsletter" className="bg-black text-gray-200 py-20">
    <h1 className="mx-auto mb-8 lg:text-7xl lg:text-start text-5xl text-center font-semibold leading-none tracking-tighter m-5 text-neutral-400 p-8">News Letter</h1>

      <div className="container mx-auto px-4">
        {newsletters.map((newsletter, index) => (
          <div key={newsletter.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-10 mb-20`}>
            <div className="w-full lg:w-2/5">
              <Splide
                options={{
                  type: "fade",
                  autoplay: true,
                  pauseOnHover: true,
                  resetProgress: true,
                  arrows: false,
                  pagination: true,
                  height: "50vh",
                }}
                className="shadow-xl rounded-xl overflow-hidden"
              >
                <SplideSlide>
                  <img className="w-full" src={newsletter.image} alt={newsletter.alt} />
                </SplideSlide>
                {/* Add more SplideSlides if each newsletter has multiple images */}
              </Splide>
            </div>
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-700 mb-6">
                {newsletter.title}
              </h1>
              <p className="mb-6">{newsletter.description}</p>
              <button className="transition duration-300 ease-in-out transform hover:-translate-y-1 bg-gradient-to-r from-red-500 to-blue-700 hover:from-red-700 hover:to-blue-900 text-white font-semibold py-2 px-6 rounded-md shadow-md">
                <i className="bi bi-download mr-2"></i>Download Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsLetterPage;
