import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Navbar } from "..";
import { styles } from "../../styles";
import { bgGrayGradientStyle, bgDarkGrayGradientStyle, yellowText } from "../../globalColorScheme";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { natureTours } from "../../constants";
import FsLightbox from "fslightbox-react";

const TourContainer = ({tour}) => {
    const argFallsHalfDayTour = tour.points.slice(0,3);
    const argFallsFullDayTour = tour.points.slice(3,5);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        sourceIndex: 0
      });
      const handleImageClick = (index) => {
        setLightboxController({
          toggler: !lightboxController.toggler,
          sourceIndex: index
        });
      };

    return (
        <VerticalTimelineElement
            contentStyle={{
                ...bgDarkGrayGradientStyle,
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #FCD34D" }}
            iconStyle={{ background: tour.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={tour.icon}
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
                    {tour.title}
                </h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {tour.country}
                </p>
            </div>
            {tour.title === 'Argentine Falls with Devil’s Throat' && (
                <div>
                    <p className= 'text-[16px] ' style={yellowText}>
                        The argentinian side of the Falls offers rides with different durations:
                    </p>
                    <br/>
                    <h2 className= 'text-[16px] font-bold' style={yellowText}>
                        - Half Day
                    </h2>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        {argFallsHalfDayTour.map((point, index) => (
                            <li
                                key={`tour-point-${index}`}
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                    <p className=' text-[16px] italic' style={ yellowText }>
                        {"Duration: 4 hours"}
                    </p>
                    <br/>
                    <h2 className= 'text-[16px] font-bold' style={yellowText}>
                        - Full Day
                    </h2>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        {argFallsFullDayTour.map((point, index) => (
                            <li
                                key={`tour-point-${index}`}
                                className='text-white-100 text-[14px] pl-1 tracking-wider'
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                    <p className=' text-[16px] italic' style={ yellowText }>
                        {"Duration: 7 hours"}
                    </p>
                    <br/>
                    <h2 className= 'text-[16px] font-bold' style={yellowText}>
                        Optional
                    </h2>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                            Extension to San Martin’s Island it’s impressive though steep trails.
                        </li>
                    </ul>
                </div>
            )}
            {tour.title !== 'Argentine Falls with Devil’s Throat' && (
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {tour.points.map((point, index) => (
                        <li
                            key={`tour-point-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            )}
            {tour.title === 'Panoramic Helicopter Flight' && (
                <div>
                    <p className=' text-[16px] italic' style={ yellowText }>
                        {"Duration: 10 minutes"}
                    </p>
                    <ul className='mt-5 list-disc ml-5 space-y-2'>
                        <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                            Optional longer flight includes three borders, Cataratas and Itaipu Dam.
                        </li>
                    </ul>
                    <p className=' text-[16px] italic' style={ yellowText }>
                        {"Duration: 35 minutes"}
                    </p>
                </div>
            )}
            <div className='mt-5 space-y-2'>
                {/* Render images */}
                <div className='flex horizontal-scrolling p-8'>
                {tour.images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => handleImageClick(index)}
                        className="lg:w-1/2 rounded-lg max-h-32 lg:max-h-80"
                    />
                ))}
                {/* Expand images */}
                <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={tour.images}
                    sourceIndex={lightboxController.sourceIndex}
                />
                </div>
            </div>
            <br/>
            {tour.title !== 'Panoramic Helicopter Flight' && tour.title !== 'Argentine Falls with Devil’s Throat' ? (
                <p className='text-[16px] italic' style={yellowText}>
                    {"Duration: " + tour.duration}
                </p>
            ) : null}
        </VerticalTimelineElement>
      );
}


const NatureTours = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        
      return (
        <>
          <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
              <Navbar isMain={false}/>
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
                  Technologic & Cultural Tours
                </h2>
              </motion.div>
              <div className='mt-20 flex flex-col'>
                <VerticalTimeline 
                  layout="1-column-left"
                  lineColor="#FCD34D">
                  {natureTours.map((tour, index) => (
                    <TourContainer
                      key={`tour-${index}`}
                      tour={tour}
                    />
                  ))}
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </>
      );

}

export default NatureTours;