import React, { Fragment, useEffect, useState, useRef } from "react";
import "./styles.css";
import properties from "./about.module.css";
import Intro from "./sections/Intro/Index";
import Achivements from "./sections/Achivements/Index";
import Newsletter from "./sections/Newsletter/Index";



const About = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {};
  

  return (
    <div>
        {
            drawerOpen ? (<MobileView />) : null
        }
       {/* <Intro /> */}
       {/* <Achivements /> */}
       {/* <Newsletter/> */}
    </div>
  );
};

export default About;
