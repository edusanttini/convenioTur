'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { exploreCountries } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { yellowText } from '../globalColorScheme';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const navigateTo = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const { t } = useTranslation();
  const expCard = exploreCountries();


  return (
    <section className={`${styles.paddings} lg:pt-64 pt-16 pb-16 lg:pb-2`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t('explore_sub_title')} textStyles="text-center"/>
        <TitleText
          title={
            <>
              {t('explore_title')}
              <br className="md:block hidden" />
              {t('explore_to_title')}
                <span style={yellowText}> {t('explore_exp_title')}</span>
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {expCard.map((country, index) => (
            <ExploreCard
              key={country.id}
              {...country}
              index={index}
              active={active}
              handleClick={setActive}
              activeCardId={activeCardId}
              setActiveCardId={setActiveCardId}
              url={country.url}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
