import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { cardEvents } from "../assets";
import EventsAndIncentives from "./AppProducts/EventsAndIncentives";
import { useNavigate } from "react-router-dom";
import { bgYellowGradientStyle } from "../globalColorScheme";

const ServiceCard = ({ index, title, icon, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigateTo = useNavigate();

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card relative overflow-hidden'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={ () => {
          setToggle(!toggle)
          navigateTo('/'+ url);
        }}
      >
        <div className='rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative
          overflow-hidden'
          style={bgYellowGradientStyle}
          >
          <img
            src={icon}
            alt='web-development'
            className={`${
              isHovered ? 
               'w-full h-full object-cover scale-100 absolute transition-all duration-300 transform'
               : 'w-32 h-32 object-contain'
            }`}
          />

          <h3 className='text-black text-[20px] italic text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
      >
        Convenio-Tur is a travel agent and tour operator which attends the international
        receptive tourism market in Iguassu Falls and the surrounding area. We are well
        equipped to correspond to the most sophisticated demands in this market.
        <br/><br/>
        Iguassu Falls is a destination with a lot to offer, with three different
        countries united by enormous rivers and attractions included in the lists
        of the Natural and Technological Wonders of the World.
        <br/><br/>
        Many have already heard of the Cataratas, of the Iguassu Jungle, of the Guarani
        Republic, but few know of the excellent infrastructure of hotels, restaurants and
        services with a level of quality to satisfy the most demanding visitor.
        <br/><br/>
        Convenio-Tur is here to guarantee that the traveler that arrives here can enjoy all
        of the fantastic attractions that this destination has to offer without any worries.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 cursor-pointer'
        >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} url={service.url} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
