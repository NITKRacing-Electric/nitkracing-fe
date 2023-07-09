import React, { useEffect, useRef, useState } from "react";
import properties from "./team.module.css";
import "./styles.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide } from "@splidejs/react-splide";
import Member from "../../../../components/member/index";
import Members from "../../../../services/Members";
import { Box, Typography } from "@mui/material";
import { ANIMATIONS, TEAM } from "../../../../assets/data";
import { Section } from "../../../../components/Section";
import { Title } from "../../../../components/Title";
import useGsap from "../../../../hooks/useGsap";
import gsap from "gsap";

const Team = (props) => {
  const app = useRef();
  const [members, setMembers] = useState(TEAM);
  useGsap(app, () => ANIMATIONS.heading(gsap, "#team"));

  return (
    <Box ref={app}>
      <Section id="team" pageHeight>
        <Box py={5}>
          <Title subtitle="Team">Players</Title>
          <div className={properties.container}>
            <Splide
              options={{
                height: "60vh",
                autoplay: true,
                interval: 2000,
                arrows: false,
                pagination: false,
              }}
              className={properties.slider}
            >
              {members.map((data, index) => {
                return <Member data={data} key={index} info={data} />;
              })}
            </Splide>
          </div>
        </Box>
      </Section>
    </Box>
  );
};

export default Team;
