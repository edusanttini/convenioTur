'use client';

import { motion } from 'framer-motion';
import styles from '../../stylesCountries';
import { BlobShape1, BlobShape2, Carousel, TitleText, TypingTextGeneric } from '../../components';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

const RidesList = ({index, ride}) => {
    const { t } = useTranslation();
    const parentContainerStyle = {
        overflowX: 'hidden',
        overflowY: 'hidden'
    };

    return (
        <>
            <div className=' w-full'>
                <section className={`${styles.paddings} relative z-10 pt-32 `}
                    style={parentContainerStyle}>
                    <div
                        className={`${styles.innerWidth} mx-auto lg:flex-row flex-col gap-8`}
                    >
                        <div
                            className="flex-[0.75] flex justify-center flex-col"
                        >
                            <TypingTextGeneric title={`| ${ride.country}`} 
                                colorr={ ride.countryKey === 'br' ? 'text-green-600' :
                                         ride.countryKey === 'arg' ? 'text-blue-600':
                                         'text-red-600' } />
                            <TitleText title={<>{ride.title}</>} />
                            <div className={`pb-32 justify-center flex`}>
                                <Carousel ride={ride}/>
                            </div>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> {t('click_details')} </Typography>
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
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default RidesList;
