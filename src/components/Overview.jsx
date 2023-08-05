import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { bgYellowGradientStyle, yellowText } from "../globalColorScheme";
import { cataratas01, cataratas02 } from "../assets";

const Overview = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={yellowText}>Overview.</h2>
        <p className="text-black font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]">Never has so much beauty been seen in one place</p>
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
        <br/><br/>
      </motion.p>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >
        <div className="flex justify-center">
          <span className="font-luxury text-6xl text-center" style={yellowText}>Welcome to Paradise!</span>
        </div>
      </motion.div>
      <motion.div className="flex justify-center pt-8 ">
        <img src={cataratas02} className="max-w-2xl rounded-md" />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Overview, "overview");
