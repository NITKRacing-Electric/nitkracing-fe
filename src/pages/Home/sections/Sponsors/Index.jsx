import React, { useEffect, useState } from 'react';
import './styles.css'
import properties from "./sponsors.module.css"
import SponsorsAPI from '../../../../services/SponsorsAPI';


const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])

  useEffect(()=>{
    SponsorsAPI.getSponsors()
    .then((res)=>setSponsors(res.data))
    .catch(res=>console.error(res))
  },[])

    return (
        <section id="sponsors">
         
            <div className={properties.sponsors}>

              {sponsors.map(sponsor=>
                 <div key={sponsor._id} className={properties.sponsor}>
                   <img alt="sponsor" className={properties.sponsor_logo} src={sponsor.picture}></img>
                 </div>
                )}

              
            </div>
            <h1 className={properties.heading}>
                <span>
                Sponsors

                    </span>
            </h1>
        </section>
    );
};

export default Sponsors;