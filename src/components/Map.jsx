import React, { useState, useRef } from 'react';
import MapSVG from './MapSVG';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { MapWrapper } from "../hoc";
import { bgYellowGradientStyle, yellowText } from "../globalColorScheme";
import { styles } from "../styles";
import { southAmerica } from '../assets';
import { useTranslation } from 'react-i18next';

const Map = () => {
  const svgRef = useRef(null);
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={yellowText}> {t('map_title')} </h2>
        <p className="text-black font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]"> {t('map_subtitle')} </p>
      </motion.div>
      
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        
      >
        <div>
          <svg
            ref={svgRef}
            viewBox="10 0 3507 2680"
            version="1.2"
            width="1200"
            height="1200"
            baseProfile="tiny"
            //style={svgStyle}
          >
            <g
              fillRule="evenodd"
              strokeWidth="1"
              strokeLinecap="square"
              fill="none"
              stroke="black"
              strokeLinejoin="bevel"
            >
              <MapSVG />
              
            </g>
          </svg>
        </div>
        
      </motion.div>
    </>
  );
}

export default MapWrapper(Map, "map");
