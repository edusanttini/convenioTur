import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { cataratas02, cataratas01 } from '../assets';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import FsLightbox from 'fslightbox-react';
import { isMobile } from 'react-device-detect';
import { useNavigate, useLocation } from 'react-router-dom';

const Carousel = ({ride}) => {
  const nav = useNavigate();
  const loc = useLocation();
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

  useEffect(() => {
    // Close the lightbox when the route changes
    console.log('closingshitttt')
    const unlisten = () => {
      setLightboxController({
        toggler: false,
        sourceIndex: 0
      });
    };

    return () => {
      unlisten();
      console.log('closingshitttt2')
    };
  }, [location]); // Listen for route changes

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={isMobile ? "w-72 container" : "custom-width"}>
      <Slider {...settings}>
          {ride.images.map((img, index) => (
            <div key={index}>
              <img
                src={img} 
                className={isMobile ? 'rounded-2xl object-contain h-80 mx-auto' : 'rounded-2xl h-100 object-contain cursor-pointer mx-auto'}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
      </Slider>
      <div className="z-auto">
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={ride.images}
          sourceIndex={lightboxController.sourceIndex}
          afterClose={() => navigate('/')} // Navigate to a route after closing the lightbox
        />
      </div>
    </div>    
  );
};

export default Carousel;
