'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { yellowText } from '../globalColorScheme';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    style={yellowText}
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TypingTextGeneric = ({ title, colorr }) => (
  <motion.p
    style={colorr}
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white text-blue-600 ${colorr}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TypingTextGreen = ({ title, colorr }) => (
  <motion.p
    style={colorr}
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white text-blue-600 ${colorr}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
