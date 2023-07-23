import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Navbar } from "..";
import { styles } from "../../styles";
import { bgGrayGradientStyle, bgDarkGrayGradientStyle, yellowText } from "../../globalColorScheme";
import { gastronomyTour } from "../../constants";

const TourGastronomy = ({ experience }) => {
    return (
        <VerticalTimelineElement
          contentStyle={{
            ...bgDarkGrayGradientStyle
          }}
          contentArrowStyle={{ borderRight: "10px solid  #FCD34D" }}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src={experience.icon}
                className='w-[80%] h-[80%] object-contain'
              />
            </div>
          }
        >
          <div>
            <h3 
              className=' text-[24px] font-bold'
              style={yellowText}
              >
                {experience.title}
            </h3>
            <p
              className='text-secondary text-[16px] font-semibold'
              style={{ margin: 0 }}
            >
              {experience.country}
            </p>
          </div>
          <ul className='mt-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>
          <div className='mt-5 space-y-2'>
            {/* Render the images */}
            <div className='flex space-x-8 overflow-x-auto p-8'>
              {experience.images.map((imageUrl, index) => (
                <img
                  key={`experience-image-${index}`}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  className='max-w-[200px] h-auto'
                />
              ))}
            </div>
          </div>
          <p
              className='text-secondary text-[16px] italic'
              style={ yellowText }
            >
              {"Duration: "+experience.duration}
            </p>
        </VerticalTimelineElement>
      );
}


const Gastronomy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        
      return (
        <>
          <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
              <Navbar />
            </div>
            <div className="pt-32">
              <motion.div 
                variants={textVariant()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`} 
                >
                <p className={`${styles.sectionSubText} text-center`}>
                  dummy txt dummy txt dummy txt dummy txt
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}
                style={yellowText}>
                  Gastronomy and Entertainment
                </h2>
              </motion.div>
              <div className='mt-20 flex flex-col'>
                <VerticalTimeline 
                  layout="1-column-left"
                  lineColor="#FCD34D">
                  {gastronomyTour.map((tour, index) => (
                    <TourGastronomy
                      key={`tour-${index}`}
                      experience={tour}
                    />
                  ))}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </>
      );
}

export default Gastronomy;