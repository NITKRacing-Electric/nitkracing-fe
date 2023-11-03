import React, { useCallback, useEffect, useRef, useState } from "react";
import properties from "../../home.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anime from "animejs";
import helmetLeft from "../../../../images/hero/helmet_left.png";
import helmetFront from "../../../../images/hero/helmet_front.png";
import helmetRight from "../../../../images/hero/helmet_right.png";
import {Box, Container, Typography} from "@mui/material";
import {FiArrowRight, FiFacebook, FiInstagram, FiLinkedin, FiMail} from "react-icons/fi";
import {BsArrowDown, BsArrowRight} from "react-icons/bs";

const DUMMY_DATA = [
  {
    id: 0,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Maximum Performance",
    image: helmetLeft,
  },
  {
    id: 1,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Overtaking Competetion",
    image: helmetFront,
  },
  {
    id: 2,
    primary_subheading: "PERFORMANCE",
    secondary_subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis orci  vitae fermentum molestie. Nulla at tellus condimentum, ultricies libero vitae, tempor velit. Donec laoreet orci nulla, eu sollic",
    heading: "Reliable & Aerodynamic",
    image: helmetRight,
  },
];

const Hero = ({ props }) => {
  const containerRef = useRef(null);

  return (
    <section id="home">
      <Container maxWidth='xl'>
      <Box className={properties.wrapper} >
        <LeftItem/>
        <MainItem />
        <RightItem/>
      </Box>
      </Container>
    </section>
  );
};

function LeftItem () {
  return (
      <Box position='relative' >
        <Box position='relative' sx={{gap: '30px', top: '70%',display: 'flex', flexDirection: 'column'}}>
          <FiInstagram/>
          <FiFacebook/>
          <FiLinkedin/>
          <FiMail/>
        </Box>
      </Box>
  )
}
function RightItem () {
  return (
      <Box position='relative'>
        <Box position='relative' sx={{top: '70%', gap: '10px',display: 'flex', alignItems: 'center',

          writingMode: 'vertical-rl',
          textOrientation: 'mixed'
        }}>
          <Typography variant='body2'>
            Scroll Down
          </Typography>
          <Box height='50px' width='1px' bgcolor='white'/>
          <BsArrowDown/>
        </Box>
      </Box>
  )
}

function MainItem () {
  const animationRef = React.useRef(null);
  const [slide, setSlide] = useState(0);
  React.useEffect(() => {
    const animation = (animationRef.current = anime.timeline().add({
      targets: ".letter",
      tra: [-90, 0],
      duration: 2000,
      opacity: [0, 1],
      easing: "easeOutQuad",
      delay: (el, i) => 200 * (i + 1),
    }));

    return () => {
      animation.restart();
    };
  }, [slide]);

  const leftSlideHandler = (event) => {
    if (slide === 0) return setSlide(DUMMY_DATA.length - 1);

    setSlide((prevSlide) => prevSlide - 1);
  };

  const rightSlideHandler = useCallback(
      (event) => {
        if (slide === DUMMY_DATA.length - 1) return setSlide(0);

        setSlide((prevSlide) => prevSlide + 1);
      },
      [slide]
  );


  useEffect(() => {
    const slideTimer = setInterval(() => {
      rightSlideHandler();
    }, 3000);

    return () => {
      if (slideTimer) clearInterval(slideTimer);
    };
  }, [ rightSlideHandler]);

  const wrapSpanAroundLetter = (word) => {
    const wordWithSpan = word.split("").map((letter, index) => {
      return (
          <span key={index} className="letter">
          {letter}
        </span>
      );
    });

    return wordWithSpan;
  };
  return (
      <Box>
        <h1 className={`${properties.big_heading} animation`}>
          {wrapSpanAroundLetter("NKR2K23")}
        </h1>
        <div className={properties.image_container}>
          <TransitionGroup className={properties.image_transition}>
            <CSSTransition
                key={slide}
                timeout={600}
                in={true}
                appear={true}
                classNames="anime_image"
            >
              <img
                  alt="helmet"
                  className={properties.helmet_image}
                  width="350px"
                  height="350px"
                  src={DUMMY_DATA[slide].image}
              ></img>
            </CSSTransition>
          </TransitionGroup>
        </div>

        {/*<div className={properties.text_container}>*/}
        {/*  <div className={properties.text_wrapper}>*/}
        {/*    <TransitionGroup className={properties.anime_primary_subheading}>*/}
        {/*      <CSSTransition*/}
        {/*          key={slide}*/}
        {/*          timeout={500}*/}
        {/*          in={true}*/}
        {/*          appear={true}*/}
        {/*          classNames="anime_primary_subheading"*/}
        {/*      >*/}
        {/*        <p className={properties.primary_subheading}>*/}
        {/*          {DUMMY_DATA[slide].primary_subheading}*/}
        {/*        </p>*/}
        {/*      </CSSTransition>*/}
        {/*    </TransitionGroup>*/}

        {/*    <TransitionGroup className={properties.heading_transition}>*/}
        {/*      <CSSTransition*/}
        {/*          key={slide}*/}
        {/*          timeout={600}*/}
        {/*          in={true}*/}
        {/*          appear={true}*/}
        {/*          classNames="anime_heading"*/}
        {/*      >*/}
        {/*        <h1 className={properties.heading}>*/}
        {/*          {DUMMY_DATA[slide].heading}*/}
        {/*        </h1>*/}
        {/*      </CSSTransition>*/}
        {/*    </TransitionGroup>*/}

        {/*    <TransitionGroup className={properties.anime_secondary_subheading}>*/}
        {/*      <CSSTransition*/}
        {/*          key={slide}*/}
        {/*          timeout={700}*/}
        {/*          in={true}*/}
        {/*          appear={true}*/}
        {/*          classNames="anime_secondary_subheading"*/}
        {/*      >*/}
        {/*        <p className={properties.secondary_subheading}>*/}
        {/*          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis*/}
        {/*          sagittis orci vitae fermentum molestie. Nulla at tellus*/}
        {/*          condimentum, ultricies libero vitae, tempor velit. Donec*/}
        {/*          laoreet orci nulla, eu sollic*/}
        {/*        </p>*/}
        {/*      </CSSTransition>*/}
        {/*    </TransitionGroup>*/}

        {/*    <div className={properties.button_group}>*/}
        {/*      <div className={"button"}>*/}
        {/*        Start Here*/}
        {/*        <i className="bi bi-arrow-right"></i>*/}
        {/*      </div>*/}
        {/*      <div className="button secondary">*/}
        {/*        Contact us*/}
        {/*        <i className="bi bi-arrow-right"></i>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Box>
  )
}

export default Hero;
