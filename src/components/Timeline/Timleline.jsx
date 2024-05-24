import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { CanvasRevealEffect } from '../ui/reveal';
import { AnimatePresence, motion } from "framer-motion";
import { useStateContext } from '../../context';
import { div } from 'three/examples/jsm/nodes/Nodes.js';


export default function TimelineComp() {
    const {isLoading , achievementsData} = useStateContext()
    if(isLoading){
        <div>...Loading</div>

    }
    console.log(achievementsData)
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{color:'white' }}>
            <div className=''>
                <span className='text-white font-bold text-lg sm:text-2xl'>
                    Achievement <span className='text-red-700'>01</span>
                </span>
                {isLoading ? (<div>...Loading...</div>) : (
                    <Card title={achievementsData[0].description} icon={<AceternityIcon />} upText={achievementsData[0]?.title}>
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [255, 221, 222],
                        [255, 0, 0],
                      ]}
                      dotSize={2}
                    />
                    </Card>
                )}
                
            </div>
            </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{color:'white'}}>
        <div className=''>
                <span className='text-white font-bold text-lg sm:text-2xl'>
                    Achievement <span className='text-red-700'>02</span>
                </span>
                {isLoading ? (<div>...Loading...</div>) : (
                    <Card title={achievementsData[1].description} icon={<AceternityIcon />} upText={achievementsData[1]?.title}>
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [255, 221, 222],
                        [255, 0, 0],
                      ]}
                      dotSize={2}
                    />
                    </Card>
                )}
                
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{color:'white'}}>
        <div className=''>
                <span className='text-white font-bold text-lg sm:text-2xl'>
                    Achievement <span className='text-red-700'>03</span>
                </span>
                {isLoading ? (<div>...Loading...</div>) : (
                    <Card title={achievementsData[2].description} icon={<AceternityIcon />} upText={achievementsData[2]?.title}>
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [255, 221, 222],
                        [255, 0, 0],
                      ]}
                      dotSize={2}
                    />
                    </Card>
                )}
                
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{color:'white'}}>
        <div className=''>
                <span className='text-white font-bold text-lg sm:text-2xl'>
                    Achievement <span className='text-red-700 lg:text-lg text-xl'>04</span>
                </span>
                {isLoading ? (<div>...Loading...</div>) : (
                    <Card title={achievementsData[3].description} icon={<AceternityIcon />} upText={achievementsData[3]?.title}>
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [255, 221, 222],
                        [255, 0, 0],
                      ]}
                      dotSize={2}
                    />
                    </Card>
                )}
                
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
        </TimelineSeparator>
        <TimelineContent sx={{color:'white'}}>
        <div className=''>
                <span className='text-white font-bold text-lg sm:text-2xl'>
                    Achievement <span className='text-red-700'>05</span>
                </span>
                {isLoading ? (<div>...Loading...</div>) : (
                    <Card title={achievementsData[4].description} icon={<AceternityIcon />} upText={achievementsData[4]?.title}
                    >
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName="bg-black"
                      colors={[
                        [255, 221, 222],
                        [255, 0, 0],
                      ]}
                      dotSize={2}
                    />
                    </Card>
                )}
                
            </div>
        </TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}

const Card = ({
    title,
    icon,
    upText,
    children,
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white/[0.1] mt-11 shadow-custom-red hover:shadow-dark-red duration-300 ease-in-out group/canvas-card flex items-center justify-center dark:border-white/[0.1] max-w-20 sm:max-w-sm w-full mx-auto p-4 relative h-[25rem]"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
  
  
        <div className={`absolute z-20 p-4 transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
                <h2 className="text-white text-xl font-bold mt-4">{upText}</h2>
                </div>
  
  
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
  
        <div className="relative z-20">
          {/* <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div> */}
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    );
  };
  
  const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
  };
  
  export const Icon = ({ className, ...rest }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  