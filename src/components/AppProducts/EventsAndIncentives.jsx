import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { Navbar } from "../.";
import { styles } from "../../styles";
import { Experience } from "../../components";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { bgGrayGradientStyle } from "../../globalColorScheme";

const EventsAndIncentives = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-cover bg-no-repeat bg-center '>
                <Navbar />
                <div className="pt-32">
                    
                    
                    
                </div>
                
            </div>
            {/*SectionWrapper(EventsWrapper, 'EventsWrapper')()*/}
        </div>
    );

}

export default EventsAndIncentives;