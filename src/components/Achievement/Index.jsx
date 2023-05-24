/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';
import properties from './Achievement.module.css';

const Achievement = (props) => {
    const isRight = (props.index)%2==0;

    return (
        <div className={properties.achieve}>
        <div style={{order: (isRight?0:1)}} className={properties.image}>
            <img alt="achievement" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRx2OhR_J3DHJkYJ0p1nzL23Zj07SeZrvOvQ&usqp=CAU"/>
        </div>
        <div style={{order: (isRight?1:0)}} className={properties.text}>
            <div className={properties.divider}>
            </div>
            <div className={properties.text_block}>
                <h3 className={properties.heading}>
                    FESV 1st place
                </h3>
                <p>The team represented India at the FSAE competition
                  held in Michigan in 2011 and in the following year
                  it was placed in the top 10 in 2 of 7 events at FS-Hungary.
                </p>
                </div>
            </div>
    </div>
    );
};

export default Achievement;
