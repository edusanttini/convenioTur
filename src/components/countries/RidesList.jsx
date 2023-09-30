'use client';

import { motion } from 'framer-motion';
import styles from '../../stylesCountries';
import { BlobShape1, BlobShape2, TitleText, TypingTextGeneric } from '../../components';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const RidesList = ({index, ride}) => {
    const isInView = true;
    const parentContainerStyle = {
        overflowX: 'hidden',
        overflowY: 'hidden'
    };

    return (
        <>
            <div className=' w-full'>
                <section className={`${styles.paddings} relative z-10 pt-32 `}
                    style={parentContainerStyle}>
                    <motion.div
                        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                    >
                        {index % 2 !== 0 && (
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                variants={planetVariants('left')}
                                className={`flex-1 ${styles.flexCenter}`}
                            >
                                <BlobShape2
                                img={ride.icon}
                                />
                            </motion.div>
                        )}
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className="flex-[0.75] flex justify-center flex-col"
                        >
                            <TypingTextGeneric title="| Argentina"/>
                            <TitleText title={<>{ride.title}</>} />
                            <div className='w-full'>
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Click for details</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {ride.points.map((point, index) => (
                                                <li key={`ride-point-${index}`}
                                                className='text-black'>
                                                    {point}
                                                </li>
                                            ))}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </motion.div>
                        {index % 2 === 0 && (
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                variants={planetVariants('right')}
                                className={`flex-1 ${styles.flexCenter}`}
                            >
                                <BlobShape1
                                    img={ride.icon}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </section>
            </div>
        </>
    )
};

export default RidesList;
