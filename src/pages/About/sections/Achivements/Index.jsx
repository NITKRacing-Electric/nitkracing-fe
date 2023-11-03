import React, {useEffect, useState} from 'react';
import './styles.css';
import properties from './Achivements.module.css';
import Achievement from '../../../../components/Achievement/Index';
import {ACHIEVEMENTS} from "../../../../assets/data";
import {Box, Typography} from "@mui/material";
import {useQuery} from "react-query";
import fetchAchievements from "../../../../assets/data/achievements.js";



const Achivements = (props) => {

    const {
        data: achievements,
        isLoading,
        isError,
        error,
    } = useQuery('achievements', fetchAchievements);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }



    return (
        <section className={properties.root} id="achievement">
            <Box py={5}>
            <Typography variant='sectionHeading'>
                Achievements
            </Typography>
            <div className={properties.wrapper}>
              {achievements.map((_, index)=>{
               return <Achievement key={Math.random()} description={_.description} title={_.title} index={index}/>;
              })}
            </div>
            </Box>
        </section>
    );
};

export default Achivements;
