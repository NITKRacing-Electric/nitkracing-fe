import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Grok = () => {
    const [animationComplete, setAnimationComplete] = useState(false);



    const svgVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 2,
            },
        },
        afterAnimation: {
            y: -80, 
            opacity: 1,
            transition: {
                duration: 2,
            },
        },
    };

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 4,
                ease: "easeInOut",
            },
        },
    };

    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((clientX - left) / width) * 100;
        const y = ((clientY - top) / height) * 100;
        setGradientPosition({ x, y });
    };

    return (
        <div 
            className='flex flex-col items-center justify-center h-screen text-center'
            onMouseMove={handleMouseMove}
        >
            <motion.svg 
                width="636" 
                height="290" 
                viewBox="0 0 636 290" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate={animationComplete ? "afterAnimation" : "visible"}
                onAnimationComplete={() => setAnimationComplete(true)}
                className={
                    'lg:w-full w-3/4 h-auto lg:mt-0 mt-10 lg:mb-0 mb-10'
                }
            >
                <defs>
                    <radialGradient id="gradient" cx={`${gradientPosition.x}%`} cy={`${gradientPosition.y}%`} r="70%">
                        <stop offset="0%" stopColor="#ff0000" /> 
                        <stop offset="20%" stopColor="#ff7f7f" /> 
                        <stop offset="40%" stopColor="#ffffff" /> 
                        <stop offset="60%" stopColor="#ff7f7f" /> 
                        <stop offset="80%" stopColor="#ff0000" /> 
                    </radialGradient>

                    {/* <linearGradient id="gradient" x1={`${gradientPosition.x}%`} y1={`${gradientPosition.y}%`} x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff0000" /> 
                        <stop offset="20%" stopColor="#ff7f7f" /> 
                        <stop offset="40%" stopColor="#ffffff" /> 
                        <stop offset="60%" stopColor="#ff7f7f" /> 
                        <stop offset="80%" stopColor="#ff0000" /> 
                    </linearGradient> */}

                    <mask id="mask">
                        <rect width="100%" height="100%" fill="url(#gradient)" />
                    </mask>
                </defs>
                <motion.path 
                    d="M52.7734 88.9794L237.458 281.829L52.7734 88.9794ZM52.7734 88.9794V285V285.5H52.2734H1.49219H0.992188V285V26.6016C0.992188 21.2953 2.45335 16.5085 5.37704 12.2558L5.37885 12.2532L5.37886 12.2532C8.42237 7.88642 12.2669 4.63626 16.9093 2.51403L16.9192 2.5095L16.9293 2.5054C21.8363 0.516111 26.8824 0.050601 32.0554 1.11054C37.2362 2.04169 41.6906 4.43682 45.4066 8.28554L45.4078 8.28682L230.094 200.943V4.9219V4.4219H230.594H281.375H281.875V4.9219V263.32C281.875 267.03 281.146 270.484 279.685 273.676C278.359 276.857 276.5 279.644 274.111 282.033C271.848 284.297 269.123 286.09 265.942 287.415C262.754 288.743 259.368 289.406 255.789 289.406C252.6 289.406 249.353 288.808 246.049 287.619L246.043 287.617C242.843 286.416 239.981 284.484 237.459 281.83L52.7734 88.9794Z" 
                    stroke="white" 
                    strokeOpacity="0.5"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    // style={{ mask: `url(#mask)` }}
                    // whileHover={{ stroke: "url(#gradient)", strokeWidth: 2, strokeDasharray: '5,5', strokeDashoffset: 0 }}
                />
                <motion.path 
                    d="M632.874 284.622L527.824 193.888C533.72 193.794 539.951 193.077 546.514 191.74C553.713 190.3 560.78 188.009 567.714 184.87L567.718 184.868C574.785 181.596 581.523 177.475 587.931 172.504C594.353 167.525 599.986 161.564 604.831 154.624C609.811 147.546 613.739 139.425 616.618 130.267C619.5 121.095 620.938 110.691 620.938 99.0625V66.6406C620.938 60.3331 619.821 53.5789 617.596 46.3806C615.494 39.1547 611.947 32.4577 606.962 26.2912C602.096 19.98 595.724 14.794 587.857 10.7292C579.956 6.5156 570.301 4.42188 558.914 4.42188H366.141C362.434 4.42188 358.983 5.08409 355.792 6.41346C352.608 7.74011 349.819 9.59927 347.428 11.9902L347.423 11.9952L347.418 12.0004C345.161 14.3904 343.37 17.1765 342.046 20.3546C340.718 23.5428 340.055 26.9288 340.055 30.5078V285V285.5H340.555H391.336H391.836V285V56.2031H558.914C559.935 56.2031 561.023 56.2669 562.179 56.3954L562.185 56.396C563.396 56.5171 564.482 56.9394 565.45 57.6656L565.477 57.6861L565.507 57.7027C566.557 58.2861 567.404 59.2918 568.023 60.7782L568.033 60.8024L568.045 60.8254C568.767 62.1478 569.156 64.1958 569.156 67.0312V99.0625C569.156 105.65 568.123 111.509 566.068 116.647C564.011 121.66 561.058 125.961 557.206 129.556L557.2 129.562C553.474 133.16 548.971 136.056 543.686 138.248C538.537 140.307 532.8 141.599 526.472 142.117H411.648H411.148V142.617V193.398V193.898H411.648H447.986L553.704 285.378L553.845 285.5H554.031H632.547H633.891L632.874 284.622Z" 
                    stroke="red" 
                    strokeOpacity="0.5"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    // style={{ mask: `url(#mask)` }}
                    // whileHover={{ stroke: "url(#gradient)", strokeWidth: 2, strokeDasharray: '5,5', strokeDashoffset: 0 }}
                />
            </motion.svg>
        </div>
    );
};
