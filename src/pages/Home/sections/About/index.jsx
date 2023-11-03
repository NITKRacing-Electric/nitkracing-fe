import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import {Section} from "../../../../components/Section/index.js";
import RacingBg from '../../../../assets/background/racing.png'
import useGsap from "../../../../hooks/useGsap.js";
import gsap from 'gsap'
import Marquee from "../../../../components/Marquee/index.jsx";
const About = () => {
    useGsap('#about', ()=> {
        gsap.from('#about>div', {
            backgroundPosition: '-50% 100%',
            ease: 'none', // Linear movement for a smooth parallax effect
            scrollTrigger: {
                trigger: '#about>div',
                start: 'top bottom', // When the top of the section hits the bottom of the viewport
                end: 'bottom top', // When the bottom of the section leaves the top of the viewport
                scrub: true // Makes the animation smooth and tied to the scroll bar
            }
        });
    })
    return (
        <Box id='about'>
        <Section  pageHeight sx={{
            background: `url("${RacingBg}")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: '0%'
        }}>
            <Box position='absolute' width='100vw' bottom={'-25px'} left={0}>
                <Marquee>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>
                    <Typography fontFamily='Outfit' fontWeight={700} variant='h1'>
                        RACING
                    </Typography>

                </Marquee>
            </Box>


            <Box display='flex' justifyContent='right'>
                <Box>
                <Stack direction='row' alignItems='center' gap='10px'>
                    <Box width='300px' height='2px' bgcolor='red' />
                    <Typography  variant='h4'>NITK RACING</Typography>

                </Stack>
                    <Box py={2}/>
                    <Typography width='550px' variant='body2' color='textSecondary'>
                        NITK Racing is a premier collegiate motorsport team that embodies the spirit of innovation and the relentless pursuit of excellence. With a mission to design, build, and race high-performance vehicles, we seek to provide a practical learning platform for students passionate about automotive engineering and racing. We envision setting a benchmark in the world of collegiate racing, fostering an environment where team members can push the boundaries of technology and apply theoretical knowledge to real-world challenges.
                        <br/>
                        <br/>

                        Our vision extends beyond the racetrack, aiming to inspire future generations of engineers to think creatively and sustainably. We are committed to advancing the field of motorsports through continuous improvement, collaboration, and technological advancements. Our team is not just about competition; we prioritize knowledge transfer, ensuring that every member gains valuable experience and contributes to our legacy of success. As ambassadors of NITK, we uphold the highest standards of integrity and sportsmanship, driving forward with the conviction that our journey is as important as the destination. Through our endeavors, we aim to enhance the reputation of our institution and make an indelible mark on the global racing community.
                    </Typography>

                </Box>
            </Box>

        </Section>
        </Box>
    );
};

export default About;
