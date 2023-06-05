/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';
import properties from './Achievement.module.css';

const Achievement = ({ title, description, index }) => {
    const isRight = (index)%2==0;

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
                    {title}
                </h3>
                <p>{description}
                </p>
                </div>
            </div>
    </div>
    );
};

export default Achievement;
