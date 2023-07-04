import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { Navbar } from "../.";
import { styles } from "../../styles";

const EventsWrapper = () => {
    return (
        <div>
            <div className="relative w-full h-screen max-w-7x1 mx-auto">
                <motion.div variants={textVariant()}>
                    <h2 className={styles.sectionHeadText}> Events And Incentives</h2>
                </motion.div>
            </div>
        </div>
    );
}


const EventsAndIncentives = () => {
    const bgGrayGradientStyle = {
        background: 'linear-gradient(to bottom, #D6D6D6, #171717)'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return(
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
            </div>
            {SectionWrapper(EventsWrapper, 'EventsWrapper')()}
        </div>
    );

}

export default EventsAndIncentives;