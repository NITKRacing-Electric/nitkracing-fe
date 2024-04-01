import React from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from "../../../../components/ui/aurora-bg";
import { CardStack } from "../../../../components/ui/card-stack";

const Intro = () => {
    const CARDS = [
      {
        id: 0,
        name: "Race Track",
        designation: "Circuit Design",
        content: (
            <img src="https://source.unsplash.com/featured/?racecar,track" alt="Race Track" height={10} className="object-cover w-full h-[200px] rounded-t-3xl rounded-b-3xl" />
        ),
      },
      {
        id: 1,
        name: "Speed Demon",
        designation: "Fastest Lap",
        content: (
            <img src="https://source.unsplash.com/featured/?racecar,speed" alt="Speed Demon" height={10} className="object-cover w-full  h-[200px] rounded-t-3xl rounded-b-3xl" />
        ),
      },
      {
        id: 2,
        name: "Pit Stop",
        designation: "Team Strategy",
        content: (
            <img src="https://source.unsplash.com/featured/?racecar,pitstop" alt="Pit Stop" height={10} className="object-cover w-full h-[200px] rounded-t-3xl rounded-b-3xl" />
        ),
      },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    return (
        <AuroraBackground>
            <motion.section id="intro"
                className="min-h-screen flex items-center justify-center p-4 overflow-hidden text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-full max-w-7xl mx-auto p-10">
                    <motion.div className="md:w-1/2"
                        variants={itemVariants}
                    >
                        <motion.h1 className="text-4xl md:text-5xl font-extrabold mb-6"
                            variants={itemVariants}
                        >
                            We are <span className="text-red-600">Racers</span>.
                        </motion.h1>
                        <motion.p className="text-md md:text-lg font-light leading-relaxed mb-6"
                            variants={itemVariants}
                        >
                            NITK Racing is a dynamic team formed in 2006, composed of talented students...
                        </motion.p>
                        {/* <motion.a href="https://google.com"
                            className="inline-block bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full text-md md:text-lg font-semibold py-3 px-6"
                            variants={itemVariants}
                        >
                            Learn More
                        </motion.a> */}
                    </motion.div>

                    <motion.div className="md:w-1/2 flex justify-center"
                        variants={itemVariants}
                    >
                        <CardStack items={CARDS} />
                    </motion.div>
                </div>
            </motion.section>
        </AuroraBackground>
    );
};

export default Intro;
