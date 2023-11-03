import React, { useEffect, useRef, useState } from "react";
import properties from "./team.module.css";
import "./styles.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide } from "@splidejs/react-splide";
import Member from "../../../../components/member/index";
import { Box, Typography } from "@mui/material";
import { ANIMATIONS, TEAM } from "../../../../assets/data";
import { Section } from "../../../../components/Section";
import { Title } from "../../../../components/Title";
import useGsap from "../../../../hooks/useGsap";
import gsap from "gsap";
import {useQuery} from "react-query";
import fetchTeam from "../../../../assets/data/team.js";

const Team = (props) => {
  const app = useRef();
    const {
        data: members,
        isLoading,
        isError,
        error,
        isSuccess
    } = useQuery('team', fetchTeam);
    useGsap(app, () => ANIMATIONS.heading(gsap, "#team"));

    console.log(members)




  return (
    <Box ref={app}>
      <Section id="team" pageHeight>
        <Box py={5}>
          <Title subtitle="Team">Players</Title>
          <div >
              {isSuccess && <Splide
                  options={{
                      height: "60vh",
                      autoplay: true,
                      interval: 2000,
                      arrows: false,
                      pagination: false,
                  }}
              >
                  {members.map((data, index) => {
                      return <Member data={data} key={index} info={data}/>;
                  })}
              </Splide>}
          </div>
        </Box>
      </Section>
    </Box>
  );
};

export default Team;
