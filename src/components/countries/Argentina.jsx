'use client';
import React, { useEffect } from "react";
import { motion } from 'framer-motion';

import styles from '../../stylesCountries';
import { argentinaRides, startingFeatures } from '../../constants';
import { Navbar, RidesList, TitleText, TypingTextGeneric } from '../../components';
import { staggerContainer, fadeIn, planetVariants, slideIn } from '../../utils/motion';
import { flagarg, flagbr } from '../../assets';
import { bgGrayGradientStyle } from '../../globalColorScheme';
import FlagShape from "./FlagShape";
import { FLAGTXT } from "../Util/base64Images";
import { useParams } from "react-router-dom";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-blue-600`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-slate-900 leading-[32.4px]">
      {text}
    </p>
  </div>
);


const Argentina = () => {
  const { rideIndex } = useParams();

  useEffect(() => {
    const rideElement = document.getElementById(rideIndex);
    if (rideElement) {
      rideElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [rideIndex]);
  
  return (
    <div className='relative z-0 w-full' style={bgGrayGradientStyle}>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar isMain={false}/>
      </div>
      <div className='pt-32'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <div className="relative">
            <img
              src={flagarg}
              alt="hero_cover"
              className="w-5/6 sm:h-[200px] h-[150px] object-cover rounded-tr-[240px] z-10 relative right-0 top-0"
            />
          </div>
        </motion.div>
      </div>
      <div className='pt-8'>
        <section className={`${styles.paddings} relative z-10 pt-32`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
          >
            <motion.div
              variants={planetVariants('left')}
              className={`flex-1 ${styles.flexCenter}`}
            >
              <FlagShape img={FLAGTXT}/>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              <TypingTextGeneric title="| Argentina"/>
              <TitleText title={<>Get to know Argentina's best attractions</>} />
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                {startingFeatures.map((feature, index) => (
                  <StartSteps
                    key={feature}
                    number={`${index < 10 ? '0' : ''} ${index + 1}`}
                    text={feature}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
        <div className={`${styles.paddings} relative z-10`}>
          {argentinaRides.map((ride, index) => (
            <div id={`ride-point-${index}`} key={`rides-point-${index}`}>
              <RidesList
                index={index}
                ride={ride}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )};

export default Argentina;
