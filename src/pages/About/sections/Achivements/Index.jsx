import React, {useEffect, useState} from 'react';
import './styles.css';
import properties from './Achivements.module.css';
import Achievement from '../../../../components/Achievement/Index';

const DUMMY_DATA = [{}, {}, {}, {}];


const Achivements = (props) => {


    return (
        <section className={properties.root} id="achievement">

             <h1 className={properties.heading}>
                
                 Achievements
              </h1>
            <div className={properties.wrapper}>
              {DUMMY_DATA.map((item, index)=>{
               return <Achievement key={Math.random()} index={index}/>;
              })}
            </div>
        </section>
    );
};

export default Achivements;
