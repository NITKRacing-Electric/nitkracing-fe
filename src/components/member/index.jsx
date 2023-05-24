import './styles.css'
import properties from "./member.module.css"
import {SplideSlide } from '@splidejs/react-splide';


import React from 'react';

const Member = (props) => {
   const name = props.data.memberName
    const bio = props.data.info
    const image = props.data.url
    const heading = props.data.heading


    console.log(props)

    return (
        <SplideSlide>
             <div className={properties.wrapper}>
                 <div className={properties.member}>
                     <img alt="member"
    width="350px"
    src={image}/>
                 </div>

                 <div className={properties.info}>
                     <div className={properties.info_wrapper}>
                         <p className={properties.sec_subheading}>{heading}</p>
                         <h2 className={properties.heading}>{name}</h2>
                         <p className={properties.body}>
                             {bio}
                         </p>
                         <div className={properties.social_icon}>
                         <i className="bi bi-linkedin"></i>
                         <i className="bi bi-instagram"></i>
                         <i className="bi bi-envelope-fill"></i>
                         </div>
                     </div>
                 </div>
             </div>
        </SplideSlide>
    );
};

export default Member;
