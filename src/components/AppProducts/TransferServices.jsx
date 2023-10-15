import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Navbar } from "..";
import { styles } from "../../styles";
import { bgGrayGradientStyle } from "../../globalColorScheme";
import { yellowText } from "../../globalColorScheme";
import { comingSoon } from "../../assets";
import { useTranslation } from "react-i18next";

const TransferServices = () => {
    const { t } = useTranslation();
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
                        {t('service_card_Transfer')}
                        </h2>
                    </motion.div>
                </div>
                <div className="text-center pt-32 pl-32 pr-32 pl-sm-4 pr-sm-4 pt-sm-16">
                    <motion.div>
                        <p>{t('transfer_t1')}</p>
                        <p className="pt-8">{t('transfer_t2')}</p>
                        <p className="pt-8">{t('transfer_t3')}</p>
                        <p className="pt-8">{t('transfer_t4')}</p>
                    </motion.div>
                </div>
                <div className="text-center pt-32 lg:pl-32 lg:pr-32 pt-sm-16 pr-4 pl-4">
                    <motion.div>
                        <h2 className={`text-black font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] text-center pb-16`}>
                            {t('transfer_subtitle')}
                        </h2>
                        <p>{t('transfer_t5')}</p>
                        <p className="pt-8">{t('transfer_t6')}</p>
                        <p className="pt-8">{t('transfer_t7')}</p>
                        <p className="pt-8">{t('transfer_t8')}</p>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 gap-4 pt-16 pb-16 pr-4">
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