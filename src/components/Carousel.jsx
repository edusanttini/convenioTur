import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cataratas02, cataratas01 } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";

const Carousel = ({ride}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <motion.div className="custom-width pt-24"
        variants={fadeIn("down", "", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        >
        <Slider {...settings}>
            {ride.images.map((img, index) => (
              <div>
                <img src={img} className='rounded-lg'/>
              </div>
            ))}
        </Slider>
    </motion.div>
  );
};

export default Carousel;
