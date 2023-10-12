import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FsLightbox from 'fslightbox-react';
import { isMobile } from 'react-device-detect';

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
    <div className={isMobile ? "w-72 container" : "custom-width"}>
      <Slider {...settings}>
          {ride.images.map((img, index) => (
            <div key={index}>
              <img
                src={img} 
                className={isMobile ?
                  'rounded-2xl object-contain h-80 mx-auto' :
                  'rounded-2xl h-100 object-contain cursor-pointer mx-auto'
                }
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
      </Slider>
      <div className='z-50 absolute'>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={ride.images}
          sourceIndex={lightboxController.sourceIndex}
        />
      </div>
    </div>
  );
};

export default Carousel;
