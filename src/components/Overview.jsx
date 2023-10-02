import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { bgYellowGradientStyle, yellowText } from "../globalColorScheme";
import { cataratas01, cataratas02 } from "../assets";
import { useTranslation } from "react-i18next";

const Overview = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText} style={yellowText}>{ t('overview') }.</h2>
        <p className="text-black font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]"> { t('overview_subtitle') } </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
      >
        { t('overview_first_p') }
        <br/><br/>
        { t('overview_sec_p') }
        <br/><br/>
        { t('overview_third_p') }
        <br/><br/>
        { t('overview_four_p') }
        <br/><br/>
      </motion.p>
      <motion.div
        variants={ textVariant() }
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >
        <div className="flex justify-center">
          <span className="font-luxury text-6xl text-center" style={yellowText}> { t('overview_welcome') } </span>
        </div>
      </motion.div>
      <motion.div className="flex justify-center pt-8 ">
        <img src={cataratas02} className="rounded-md" />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Overview, "overview");
