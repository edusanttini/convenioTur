'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { exploreCountries } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { yellowText } from '../globalColorScheme';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const navigateTo = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);


  return (
    <section className={`${styles.paddings} pt-64`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center"/>
        <TitleText
          title={
            <>
              Choose the country you want
              <br className="md:block hidden" />
              to
                <span style={yellowText}> explore.</span>
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreCountries.map((country, index) => (
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
