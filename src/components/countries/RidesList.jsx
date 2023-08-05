'use client';

import { motion } from 'framer-motion';
import { bgGrayGradientStyle } from '../../globalColorScheme';

import styles from '../../stylesCountries';
import { startingFeatures } from '../../constants';
import { ImageShape, Navbar, TitleText, TypingTextGeneric } from '../../components';
import { staggerContainer, fadeIn, planetVariants, slideIn } from '../../utils/motion';
import { flagarg } from '../../assets';

const RidesList = ({index, imgUrl}) => {
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
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
                    >

                        {index % 2 !== 0 && (
                            <motion.div
                                variants={planetVariants('left')}
                                className={`flex-1 ${styles.flexCenter}`}
                            >
                                <ImageShape
                                img={imgUrl}
                                />
                            </motion.div>
                        )}
                        
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 1)}
                            className="flex-[0.75] flex justify-center flex-col"
                        >
                            <TypingTextGeneric title="| Argentina"/>
                            <TitleText title={<>Get to know Argentina's best attractions</>} />
                            
                        </motion.div>

                        {index % 2 === 0 && (
                            <motion.div
                                variants={planetVariants('right')}
                                className={`flex-1 ${styles.flexCenter}`}
                            >
                                <ImageShape
                                img={imgUrl}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </section>
            </div>
        </>
    )};

export default RidesList;
