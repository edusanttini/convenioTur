import React, { useState, useRef } from 'react';
import MapSVG from './MapSVG';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { MapWrapper } from "../hoc";

const Map = () => {
  const svgRef = useRef(null);
  const [zoomFactor, setZoomFactor] = useState(1);
  const [zoomOriginX, setZoomOriginX] = useState(0);
  const [zoomOriginY, setZoomOriginY] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = (event) => {
    const svg = svgRef.current;
    const svgRect = svg.getBoundingClientRect();

    if (isZoomed) {
      setZoomFactor(1);
      setZoomOriginX(0);
      setZoomOriginY(0);
      setIsZoomed(false);
    } else {
      const zoomFactorValue = 10;
      const clickX = event.clientX - svgRect.left;
      const clickY = event.clientY - svgRect.top;

      const newOriginX = (clickX + zoomOriginX) / zoomFactorValue;
      const newOriginY = (clickY + zoomOriginY) / zoomFactorValue;

      svg.style.transformOrigin = `${newOriginX}px ${newOriginY}px`;

      const transformValue = `scale(${zoomFactorValue}) translate(${zoomOriginX}px, ${zoomOriginY}px)`;
      svg.setAttribute('transform', transformValue);

      setZoomFactor(zoomFactorValue);
      setZoomOriginX(clickX);
      setZoomOriginY(clickY);
      setIsZoomed(true);
    }
  };

  const svgStyle = {
    animation: isZoomed ? 'zoom-in 0.3s ease-in-out forwards' : 'zoom-out 0.3s ease-in-out forwards',
    willChange: 'transform',
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="map-container max-w-full object-none object-right"
      >
        <div className='flex object-center ml-64'>
          
          <svg
            onClick={handleClick}
            ref={svgRef}
            viewBox="0 0 3507 2480"
            version="1.2"
            width="1200"
            height="1200"
            baseProfile="tiny"
            //style={svgStyle}
          >
            <g
              fillRule="evenodd"
              strokeWidth="1"
              strokeLinecap="square"
              fill="none"
              stroke="black"
              strokeLinejoin="bevel"
              transform={`scale(${zoomFactor}) translate(${zoomOriginX}px, ${zoomOriginY}px)`}
            >
              <MapSVG />
            </g>
          </svg>
        </div>
      </motion.div>
    </>
  );
}

export default MapWrapper(Map, "map");
