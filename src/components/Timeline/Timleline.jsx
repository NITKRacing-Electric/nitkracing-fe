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

export default function TimelineComp() {
  const { isLoading, achievementsData } = useStateContext();

  if (isLoading) {
    return <div className="text-white text-center text-2xl">Loading achievements...</div>;
  }

  return (
    <Timeline position="alternate" className="max-w-4xl mx-auto">
      {achievementsData.map((achievement, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="error" />
            {index < achievementsData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className="mb-8">
              <span className="text-white font-bold text-lg sm:text-2xl mb-4 block">
                Achievement <span className="text-red-700">{String(index + 1).padStart(2, '0')}</span>
              </span>
              <Card
                title={achievement.description}
                upText={achievement.title}
                index={index}
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
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

const Card = ({ title, upText, children, index }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.1] shadow-custom-red hover:shadow-dark-red duration-300 ease-in-out group/canvas-card flex items-center justify-center dark:border-white/[0.1] w-full mx-auto p-6 relative h-[20rem] rounded-lg overflow-hidden"
    >
      <Icon className="absolute h-8 w-8 -top-4 -left-4 dark:text-white text-black" />
      <Icon className="absolute h-8 w-8 -bottom-4 -left-4 dark:text-white text-black" />
      <Icon className="absolute h-8 w-8 -top-4 -right-4 dark:text-white text-black" />
      <Icon className="absolute h-8 w-8 -bottom-4 -right-4 dark:text-white text-black" />

      <div className={`absolute z-20 p-4 transition-opacity duration-200 ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="text-white text-2xl font-bold">{upText}</h2>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </motion.div>
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
