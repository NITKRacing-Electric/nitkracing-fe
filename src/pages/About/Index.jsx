import React, { Fragment, useEffect, useState, useRef } from "react";
import "./styles.css";
import properties from "./about.module.css";
import Intro from "./sections/Intro/Index";
import Achivements from "./sections/Achivements/Index";
import Newsletter from "./sections/Newsletter/Index";
import {useStateContext} from "../../context/index"
import MobileView from "../../components/mobileview/MobileView";

const About = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {};
  const {drawerOpen} = useStateContext()

  return (
    <Fragment>
        {
            drawerOpen ? (<MobileView />) : null
          }
      <Intro />
      <Achivements />
      {/* <Newsletter/> */}
    </Fragment>
  );
};

export default About;
