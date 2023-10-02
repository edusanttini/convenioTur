import React, { useState } from "react";
import { Navbar} from ".";
import { bgGrayGradientStyle, yellowText, bgYellowGradientStyle, bgRedGradientStyle } from "../globalColorScheme";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { services } from "../constants";
import { useNavigate } from "react-router-dom";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ index, title, icon, url }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [toggle, setToggle] = useState(false);
    const navigateTo = useNavigate();

    return (
      <Tilt className='xs:w-[250px] w-full clickable-element'>
        <motion.div
          variants={fadeIn("right", "", index * 0.5, 0.5)}
          className='w-full p-[1px] rounded-[20px] shadow-card relative overflow-hidden'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={ () => {
            setToggle(!toggle)
            navigateTo('/'+ url);
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className='rounded-[20px]
            py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative
            overflow-hidden'
            style={bgRedGradientStyle}
            >
            <img
              src={icon}
              alt='web-development'
              className={`${
                isHovered ? 
                 'w-full h-full object-cover scale-100 absolute transition-all duration-300 transform'
                 : 'w-32 h-32 object-contain rounded-xl'
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

const AppProducts = () => {
  const { t } = useTranslation();
  const serv = services();
    return (
        <>
            <motion.div 
              variants={textVariant()}
              initial="hidden"
              whileInView="show">
                <p className="text-black font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[20px]"> { t('products_subtitle') } </p>
                <h2 className={styles.sectionHeadText} style={yellowText}> { t('products') } </h2>
            </motion.div>

            <motion.p
             variants={fadeIn("", "", 0.1, 1)}
             className='mt-4 text-black text-[17px] max-w-3xl leading-[30px]'
             initial="hidden"
             whileInView="show"
            >
                {t('products_first_p')}
                <br/><br/>
                {t('products_sec_p')}
                <br/><br/>
                {t('products_third_p')}
            </motion.p>

            <motion.div
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="pt-8"
            >
                <div className="flex justify-center">
                    <span
                     className="font-luxury text-6xl text-center"
                     style={yellowText}
                    >
                      {t('products_more_info')}
                    </span>
                </div>
            </motion.div>
            <div className='mt-20 flex flex-wrap gap-10'>
                {serv.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} url={service.url} />
                ))}
            </div>
        </>
    );
}

export default SectionWrapper(AppProducts, "products") ;