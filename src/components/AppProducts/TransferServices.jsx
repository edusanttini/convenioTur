import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Navbar } from "..";
import { styles } from "../../styles";
import { bgGrayGradientStyle } from "../../globalColorScheme";
import { yellowText } from "../../globalColorScheme";
import { comingSoon } from "../../assets";

const TransferServices = () => {

    const fleetImgs = [ comingSoon ];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <>
            <div className='relative z-0 w-full' style={bgGrayGradientStyle}>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
                <div className="text-center pt-32 pl-32 pr-32 pl-sm-4 pr-sm-4 pt-sm-16">
                    <motion.div>
                        <h2 className={`text-black font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-center pb-16`}>
                            Our fleet
                        </h2>
                        <p>
                            We maintain a high international standard through actions such as the constant renewal
                            of the fleet of cars and buses, and the continuous improvement of drivers with the
                            highest degree of specialization and education in the market.
                        </p>
                        <p className="pt-8">
                            We are the only company in Foz do Iguaçu that has international insurance for the fleet
                            of cars and buses.
                        </p>
                        <p className="pt-8">
                            Convenio-Tur ensures the best transportation with safety and comfort that the region can offer.
                        </p>
                        <p className="pt-8">
                            All cars are equipped with air conditioning, and their appearance, cleanliness, and maintenance ensure an impeccable ride."
                        </p>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 gap-4 pt-16 pb-16">
                        {fleetImgs.map((image, index) => (
                            <img
                            className={fleetImgs.length === 1 ? 
                                "rounded-xl col-start-2" : 
                                "rounded-xl"}
                            src={image}
                            key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransferServices;