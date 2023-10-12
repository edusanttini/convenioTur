import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { GenericModal, Navbar } from "../.";
import { styles } from "../../styles";
import { bgGrayGradientStyle, yellowText } from "../../globalColorScheme";
import { eventsAndIncentives, incentiveTravel, someOfTheEvents, thePrincipalVenues } from "../../assets";

const EventsAndIncentives = () => {
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
                            Events and Incentives
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
                                <span>
                                    Ever since it’s founding, Convenio-Tur has specialized not only
                                    in receptive tourism but also in the organization of 
                                </span>
                                <span style={yellowText}>events and incentive </span>
                                <span>
                                    tours. Many years ago, the destination of Iguassu Falls depended
                                    entirely on seasonal tourism to sustain the local agencies.
                                    Both the private sector and the government have invested heavily
                                    to transform Iguassu Falls into a major international center for
                                    congresses and other events. Today, thanks to these investments in
                                    infrastructure, the region has an excellent flux of travelers the
                                    year round.
                                </span>
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
                                    The principal venues for realizing events in Iguassu are the following
                                </h2>
                                <ul className={`${styles.sectionSubTextGray}pr-32 pl-32 pl-sm-4 pt-16 mx-auto`}  style={{listStyleType: 'disc'}}>
                                    <li className="pb-4">The Iguassu Falls Convention Center with 18,192m2 of exposition space for events for up to 40,000 participants and an auditorium that seats 5,000.</li>
                                    <li className="pb-4">The Hotel Bourbon Cataratas Resort and Convention Center with a capacity for realizing simultaneously events for up to 5,000 participants.</li>
                                    <li className="pb-4">The Grand Mercure International Foz Hotel with installations for realizing events for 3,000 participants.</li>
                                    <li className="pb-4">The Recanto Park Hotel can organize banquets for up to 400 guests and events for up to 1,350 participants.</li>
                                    <li className="pb-4">The Rafain Hotel and Convention Center has 18,015 m2 for events of up to 12,000 participants and has a capacity for banquets for up to 3,000 guests.</li>
                                    <li className="pb-4">The Carimã Hotel has an area of 6,000m2 for events for up to 5,000 participants and a banquet hall which seats 1,000 people.</li>
                                    <li className="pb-4">The Mabu Thermas & Resort with an area dedicated to events of 10,000m2 which can attend a public of up to 5,000.</li>
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
                              style={yellowText}>
                                Incentive Travel
                            </h2>
                            <p className={`${styles.sectionSubText} text-center lg:pr-32 lg:pl-32 pl-8 pr-8 pl-sm-4 lg:pt-16 pt-8`}>
                                <span>
                                    Incentive trips are organized as a way to reward employees, representatives or
                                    clients for their performance or sales volume. They are an important tool to
                                    increase productivity and promotion of companies or products.
                                </span>
                                <span>
                                    When a company offers a trip as a gift, the services provided must reflect the
                                    image of the company in a positive light. All of the most minute details of the services
                                    realized by the operator, restaurants, hotels and other suppliers must be well planned and
                                    executed. Convenio-Tur takes these responsibilities very seriously and its team of
                                    experienced professionals work full-time so that your Incentive Trip will be perfect
                                    in all details.
                                </span>
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
                                Some of the events realized with Convenio-Tur in Iguassu
                            </h2>
                        </motion.div>
                        <div className={`${styles.innerWidth} mx-auto flex flex-col lg:pt-16`} >
                            <ul  style={{listStyleType: 'disc'}} className=" lg:pr-32 lg:pl-32 pr-8 pl-8 pl-sm-4 pt-16 mx-auto ">
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>XXI International Congress of Entomology - 4.000 participants</li>
                                    <li>29º Congresso Brasileiro de Urologia - 3.500 participants</li>
                                    <li>IV Semana do Aparelho Digestivo - 3.000 participants</li>
                                    <li>ICOH 27th International Congress on Occupational Health - 3.000 participants</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>Copa América - Delegações Oficiais e Patrocinadores - 2.000 participants</li>
                                    <li>XXII Congresso Brasileiro de Ciências das Plantas Daninhas - 1.500 participants</li>
                                    <li>II Congresso Brasileiro de Soja - 1.500 participants</li>
                                    <li>III Congresso Brasileiro de Soja - 1.500 participants</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>Reunião Integração de Morfologia Pan-americana - 1.400 participants</li>
                                    <li>Convenção Nacional O Boticário - 1.400 participants</li>
                                    <li>Skull Base Congress 1.000 participants</li>
                                    <li>2º Congresso Mundial sobre Agricultura Conservacionista - 900 participants</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>30º Congresso Pan-americano de Otorrinolaringologia e Cirurgia de Cabeça e Garganta - 850 participants</li>
                                    <li>9º Congresso Brasileiro de Obesidade - 800 participants</li>
                                    <li>IV Diálogo Interamericano de Gerenciamento de Águas - 800 participants</li>
                                    <li>Congresso Brasileiro de Medicina Tropical - 800 participants</li>
                                </motion.div>
                                <motion.div
                                  variants={textVariant()}
                                  initial="hidden"
                                  whileInView="show"
                                  viewport={{ once: false, amount: 0.25 }}>
                                    <li>XXXV Assembléia Geral CMSB - 800 participants</li>
                                    <li>9º Congresso Brasileiro e 4º Congresso Latino-Americano de Alergia Imunológica em Pediatria - 800 participants</li>
                                    <li>10º Congresso Brasileiro de Adolescência - 500 participants</li>
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