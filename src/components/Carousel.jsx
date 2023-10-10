import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cataratas02, cataratas01 } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import FsLightbox from 'fslightbox-react';

const Carousel = ({ride}) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    sourceIndex: 0
  });

  const handleImageClick = (index) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: index
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <motion.div className="custom-width pt-24"
        >
        <Slider {...settings}>
            {ride.images.map((img, index) => (
              <img
               src={img} 
               className='rounded-2xl h-100 object-contain cursor-pointer'
               key={index}
               onClick={() => handleImageClick(index)}
              />
            ))}
        </Slider>
        <FsLightbox
              toggler={lightboxController.toggler}
              sources={ride.images}
              sourceIndex={lightboxController.sourceIndex}
            />
    </motion.div>
  );
};

export default Carousel;
