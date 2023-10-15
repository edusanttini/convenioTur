import React, { useEffect, useState } from "react";
import { bgGrayGradientStyle } from "../../globalColorScheme";
import Navbar from "../Navbar";
import { motion } from 'framer-motion';
import { TitleText, TypingTextGeneric } from "../CustomTexts";
import { culturalTours, gastronomyTour } from "../../constants";
import FsLightbox from "fslightbox-react";

const BaseProduct = ({ id }) => {
    const gTours = gastronomyTour();
    const allProductArrays = [culturalTours, gTours];
    const selectedProduct = allProductArrays.reduce((foundProduct, pArray) => {
        if (!foundProduct) {
            return pArray.find(tour => tour.id === id)
        }
        return foundProduct;
    }, null );
    const isSingle = selectedProduct.images.length;
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
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='relative z-0 w-full' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar isMain={false}/>
            </div>
            <div className="pt-8 lg:pt-32 relative flex items-center ml-4 mr-4">
                <motion.div
                 className="h-96 flex pl-4">
                    <img src={selectedProduct.icon} />
                </motion.div>
                <motion.div className="lg:pt-32  mx-auto lg:pr-96">
                    <TypingTextGeneric title={selectedProduct.country} colorr="text-red-600"/>
                    <TitleText title={selectedProduct.title} />
                </motion.div>
            </div>
            <div className="lg:pt-32">
                {selectedProduct.points.map((point, index) => (
                    <div className="lg:text-[22px] ml-4 mr-4 text-center pb-8" key={index} >
                        - {point}
                    </div>
                ))}
            </div>
            <div className="justify-center pt-16 lg:pt-48 grid grid-cols-1 lg:grid-cols-3 gap-4 pl-4 pr-4 pb-16">
                {selectedProduct && selectedProduct.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                            className={selectedProduct.images.length === 1 ? 
                                "w-full lg:h-96 lg:rounded-3xl rounded-md lg:col-start-2" :
                                "w-full lg:h-96 lg:rounded-3xl rounded-md"}
                            style={{ cursor: 'pointer' }}
                        />
                ))}
                <FsLightbox 
                    sources={selectedProduct.images}
                    toggler={lightboxController.toggler}
                    sourceIndex={lightboxController.sourceIndex}
                />
            </div>
        </div>
    )
}

export default BaseProduct;