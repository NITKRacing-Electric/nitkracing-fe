import React, { useEffect, useState } from 'react';
import properties from './team.module.css'
import "./styles.css"
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Splide } from '@splidejs/react-splide';
import Member from '../../../../components/member/index';
import Members from "../../../../services/Members"
import {Box, Typography} from "@mui/material";
import {TEAM} from "../../../../assets/data";



const Team = (props) => {
  const [members,setMembers] = useState(TEAM)

  // useEffect(()=>{
  //   Members.getMembers()
  //   .then((res)=>setMembers(res.data))
  //   .catch(res=>console.error(res))
  // },[])

  // if(members.length === 0)
  //   return <p>Loading</p>


    return (
        <section id="team">
            <Box py={5}>


            <Typography variant='sectionHeading'>
                The Team
            </Typography>

            <div className={properties.container}>
            <Splide
         options={ {
             height:"60vh",
             autoplay:true,
             interval:2000,
             arrows:false,
          } }
            className={properties.slider}>


               {members.map((data , index)=>{
                return <Member data={data} key={index} info={data}/>
               })}

            </Splide>
            </div>
            </Box>
        </section>
    );
};

export default Team;
