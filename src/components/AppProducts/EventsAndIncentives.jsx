import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { GenericModal, Navbar } from "../.";
import { styles } from "../../styles";
import { bgGrayGradientStyle, yellowText } from "../../globalColorScheme";
import { eventsAndIncentives, incentiveTravel, someOfTheEvents, thePrincipalVenues } from "../../assets";
import { useTranslation } from "react-i18next";

const EventsAndIncentives = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
        
    return (
        <>
            <div className='relative z-0 w-full' style={bgGrayGradientStyle}>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar isMain={false} />
                </div>
                <div className="pt-32">
                    <motion.div 
                      variants={textVariant()}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.25 }}
                      className={`mx-auto flex flex-col`} 
                      >
                        <h2 className={`${styles.sectionHeadText} text-center`}
                            style={yellowText}>
                            {t('service_card_events')}
                        </h2>
                    </motion.div>
                    <div>
                        <motion.div
                          variants={textVariant()}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}
                          className={`mx-auto flex flex-col`} 
                          >
                            <p className={`${styles.sectionSubTextGray} text-center pr-32 pl-32 pt-16 pl-sm-4 pr-sm-4 pt-sm-4`}>
                                <span>{ t('ev_and_incent_t1') }</span>
                                <span style={yellowText}>&nbsp;{t('service_card_events')} </span>
                                <span>{ t('ev_and_incent_t2') }</span>
                            </p>
                            <div className="mx-auto max-w-md">
                                <p className={`pt-8 pb-32`}>
                                    <img src={eventsAndIncentives} className='max-w-[200px] h-auto'/>
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                          variants={textVariant()}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}
                          className={`mx-auto flex flex-col`} 
                          >
                            <div className="pr-4">
                                <h2 className={`${styles.sectionHeadSubText} text-center pl-4`}
                                  style={yellowText}>
                                    { t('ev_and_incent_subtitle1') }
                                </h2>
                                <ul className={`${styles.sectionSubTextGray}pr-32 pl-32 pl-sm-4 pt-16 mx-auto`}  style={{listStyleType: 'disc'}}>
                                    <li className="pb-4">{ t('ev_and_incent_t4') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t5') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t6') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t7') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t8') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t9') }</li>
                                    <li className="pb-4">{ t('ev_and_incent_t10') }</li>
                                </ul>
                            </div>
                            <div className="mx-auto max-w-md">
                                <p className={`pt-8 pb-32`}>
                                    <img src={thePrincipalVenues} className='max-w-[200px] h-auto'/>
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                          variants={textVariant()}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}
                          className={`${styles.innerWidth} mx-auto flex flex-col lg:pt-16`} 
                        >
                            <h2 className={`${styles.sectionHeadSubText} text-center`}
                              style={yellowText}
                            >
                                { t('ev_and_incent_subtitle2') }
                            </h2>
                            <p className={`${styles.sectionSubText} text-center lg:pr-32 lg:pl-32 pl-8 pr-8 pl-sm-4 lg:pt-16 pt-8`}>
                                <span>{ t('ev_and_incent_t11') }</span>
                                <span> &nbsp;{ t('ev_and_incent_t12') } </span>
                            </p>
                            <div className="mx-auto max-w-md">
                                <p className={`pt-8 pb-32`}>
                                    <img src={incentiveTravel} className='max-w-[200px] h-auto'/>
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                          variants={textVariant()}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.25 }}
                          className={`${styles.innerWidth} mx-auto flex flex-col lg:pt-16`} 
                        >
                            <h2 className={`${styles.sectionHeadSubText} text-center`}
                              style={yellowText}>
                                { t('ev_and_incent_subtitle3') }
                            </h2>
                        </motion.div>
                        <div className={`${styles.innerWidth} mx-auto flex flex-col lg:pt-16`} >
                            <ul  style={{listStyleType: 'disc'}} className=" lg:pr-32 lg:pl-32 pr-8 pl-8 pl-sm-4 pt-16 mx-auto ">
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>{ t('ev_and_incent_t13') }</li>
                                    <li>{ t('ev_and_incent_t14') }</li>
                                    <li>{ t('ev_and_incent_t15') }</li>
                                    <li>{ t('ev_and_incent_t16') }</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>{ t('ev_and_incent_t17') }</li>
                                    <li>{ t('ev_and_incent_t18') }</li>
                                    <li>{ t('ev_and_incent_t19') }</li>
                                    <li>{ t('ev_and_incent_t20') }</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>{ t('ev_and_incent_t21') }</li>
                                    <li>{ t('ev_and_incent_t22') }</li>
                                    <li>{ t('ev_and_incent_t23') }</li>
                                    <li>{ t('ev_and_incent_t24') }</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>{ t('ev_and_incent_t25') }</li>
                                    <li>{ t('ev_and_incent_t26') }</li>
                                    <li>{ t('ev_and_incent_t27') }</li>
                                    <li>{ t('ev_and_incent_t28') }</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>{ t('ev_and_incent_t29') }</li>
                                    <li>{ t('ev_and_incent_t30') }</li>
                                    <li>{ t('ev_and_incent_t31') }</li>
                                </motion.div>
                            </ul>
                            <div className="mx-auto max-w-md">
                                <p className={`pt-8 pb-16`}>
                                    <img src={someOfTheEvents} className='max-w-[200px] h-auto'/>
                                </p>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </>
    );

}

export default EventsAndIncentives;