import React, {useEffect, useState} from 'react';
import './styles.css';
import properties from './Achivements.module.css';
import Achievement from '../../../../components/Achievement/Index';
import {ACHIEVEMENTS} from "../../../../assets/data";
import {Box, Typography} from "@mui/material";



const Achivements = (props) => {


    return (
        <section className={properties.root} id="achievement">
            <Box py={5}>
            <Typography variant='sectionHeading'>
                Achievements
            </Typography>
            <div className={properties.wrapper}>
              {ACHIEVEMENTS.map((_, index)=>{
               return <Achievement key={Math.random()} description={_.description} title={_.title} index={index}/>;
              })}
            </div>
            </Box>
        </section>
    );
};

export default Achivements;
