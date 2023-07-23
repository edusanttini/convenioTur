import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { Contact, Navbar } from "..";
import { styles } from "../../styles";
import { bgGrayGradientStyle } from "../../globalColorScheme";
import { yellowText } from "../../globalColorScheme";


const TransferServices = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <>
            <div className='relative z-0 w-full' style={bgGrayGradientStyle}>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
                        <h2 className={`${styles.sectionHeadText} text-center`}
                        style={yellowText}>
                        Transfer & Receptives Services
                        </h2>
                    </motion.div>
                </div>
                <div className="text-center pt-32 pl-32 pr-32 pl-sm-4 pr-sm-4 pt-sm-16">
                    <motion.div>
                        <p>
                            Our agency is in constant contact with the major air carriers who operate in our region.
                        </p>
                        <p className="pt-8">
                            We are specialists in guaranteeing flight connections and in making sure that
                            all itineraries strictly maintained. All of our guides are officially registered
                            and undergo an extensive training program providing professional service at all
                            levels during our clients’ stay.
                        </p>
                        <p className="pt-8">
                            Contact us for quotes for special charters of helicopters and airplanes.
                        </p>
                        <p className="pt-8">
                            We are structured to operate special VIP committees and delegations.
                        </p>
                    </motion.div>
                </div>
                <Contact/>
            </div>
        </>
    );
}

export default TransferServices;