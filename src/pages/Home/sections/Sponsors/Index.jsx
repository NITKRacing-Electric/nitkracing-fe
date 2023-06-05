import React, { useEffect, useState } from 'react';
import './styles.css'
import properties from "./sponsors.module.css"
import SponsorsAPI from '../../../../services/SponsorsAPI';
import {SPONSORS} from "../../../../assets/data";
import {Box, Typography} from "@mui/material";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(SPONSORS)


    return (
        <section id="sponsors">
<Box py={4}>
            <Typography variant='sectionHeading'>
                Sponsors
            </Typography>

            <div className={properties.sponsors}>

              {sponsors.map(sponsor=>
                 <div key={sponsor._id} className={properties.sponsor}>
                   <img alt="sponsor" className={properties.sponsor_logo} src={sponsor.picture}></img>
                 </div>
                )}

            </div>
</Box>
        </section>
    );
};

export default Sponsors;
