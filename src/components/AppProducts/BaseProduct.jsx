import React, { useEffect, useState } from "react";
import { bgGrayGradientStyle } from "../../globalColorScheme";
import Navbar from "../Navbar";
import { cataratas01 } from "../../assets";
import Contact from "../Contact";
import { motion } from 'framer-motion';
import BlobShape2 from "../blobs/BlobShape2";
import { TitleText, TypingTextGeneric } from "../CustomTexts";
import { culturalTours, natureTours } from "../../constants";
import FsLightbox from "fslightbox-react";

const BaseProduct = ({ id }) => {
    const allProductArrays = [culturalTours, natureTours];
    const selectedProduct = allProductArrays.reduce((foundProduct, pArray) => {
        if (!foundProduct) {
            //product.title
            return pArray.find(tour => tour.id === id)
        }
        return foundProduct;
    }, null );
    //const selectedProduct = culturalTours.find(tour => tour.title === 'The Jesuit Ruins of San Ignacio');
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
            <div className="pt-32 relative flex items-center">
                <motion.div
                 className="h-96 flex pl-4">
                    <img src={selectedProduct.icon} />
                </motion.div>
                <motion.div className="pt-32  mx-auto pr-96">
                    {/* product.country */}
                    <TypingTextGeneric title={selectedProduct.country} colorr="text-red-600"/>
                    {/* product.title */}
                    <TitleText title={selectedProduct.title} />
                </motion.div>
            </div>
            <div className="pt-32">
                {selectedProduct.points.map((point, index) => (
                    <div className="text-[22px] text-center pb-8" key={index} >
                        - {point}
                    </div>
                ))}
            </div>
            <div className="justify-center pt-48 grid grid-cols-3 gap-4 pl-4 pr-4 pb-16">
                {selectedProduct && selectedProduct.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                            className="w-full h-96 rounded-3xl"
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