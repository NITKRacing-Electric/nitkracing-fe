// ...

import React, { useState } from 'react';
import { Box } from "@mui/material";
import { Section } from "../../../../components/Section/index.js";
import styles from './statistics.module.css';
// BsChevronCompactLeft
// BsChevronCompactRight

import { BsChevronCompactLeft, BsChevronCompactRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Statistics = () => {
  const carouselData = [
    {
      country: "EUROPE",
      players: 500,
      racesFinished: 40,
      carsPurchased: 5
    },
    {
      country: "GERMANY",
      players: 1800,
      racesFinished: 50,
      carsPurchased: 2
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + carouselData.length) % carouselData.length);
  };

  const Carousel = ({ data }) => {
    return (
      <div className={styles.carousel}>
        
        <div className={styles.carouselArrows}>
          <span className={styles.carouselArrowsSize}  onClick={prevSlide}><BsChevronLeft/></span>


        <div className={styles.carouselText}>


          <p className={styles.carouselHeading}>{data.country}</p>


          <p className={styles.carouselInfoDiv}>
            <span className={styles.carouselInfo}>{data.players} THOUSAND <span>Players every day</span></span>
            <span className={styles.carouselInfo}>{data.racesFinished} MILLION <span>Races finished</span></span>
            <span className={styles.carouselInfo}>{data.carsPurchased} MLN <span>Cars purchased</span></span>
          </p>


        </div>
          <span onClick={nextSlide} className={styles.carouselArrowsSize}><BsChevronRight/></span>
        </div>
      </div>
    );
  };

  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        <section className={`${styles.statsSection} ${styles.flexContainer}`}>
          <div className={`${styles.hero} hero`}>
            <div className={`${styles.heroContent}`}>
              <p className={`${styles.hollowText} ${styles.hugeText}`}>WORLD'S</p>
              <p className={`${styles.hollowText} ${styles.hugeText} `}>BEST</p>
              <p className={styles.boldText}>AUDIENCE</p>
            </div>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.statsBar}>
              <p className={styles.statsText}>120M</p>
              <p className={styles.statsDetails}>Installations</p>
            </div>
            <div className={styles.statsBar}>
              <p className={styles.statsText}>1M </p>
              <p className={styles.statsDetails}>Players every day</p>
            </div>
          </div>

          <Carousel data={carouselData[currentSlide]} />
        </section>
      </main>
    </Box>
  );
};

export default Statistics;
