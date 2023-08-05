import React from 'react';
import MapSVG from './MapSVG';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.svgRef = React.createRef();
  }

  state = {
    zoomFactor: 1,
    zoomOriginX: 0,
    zoomOriginY: 0,
    isZoomed: false,
  };
  handleClick = (event) => {
    const svg = this.svgRef.current;
    const svgRect = svg.getBoundingClientRect();
  
    if (this.state.isZoomed) {
      //svg.setAttribute('viewBox', `0 0 2969.26 2099.73`);
      //svg.setAttribute('transform', null); // Reset the transform attribute
      this.setState({
        zoomFactor: 1,
        zoomOriginX: 0,
        zoomOriginY: 0,
        isZoomed: false,
      });
    } else {
      const zoomFactor = 10; // Set the zoom factor to 10 (10 times more)
      const clickX = event.clientX - svgRect.left;
      const clickY = event.clientY - svgRect.top;
  
      // Calculate the new transformation origin based on the clicked position and the new zoom
      const newOriginX = (clickX + this.state.zoomOriginX) / zoomFactor;
      const newOriginY = (clickY + this.state.zoomOriginY) / zoomFactor;
  
      svg.style.transformOrigin = `${newOriginX}px ${newOriginY}px`; // Set the new transformation origin
  
      // Construct the transform string with both scale and translation
      const transformValue = `scale(${zoomFactor}) translate(${this.state.zoomOriginX}px, ${this.state.zoomOriginY}px)`;
      svg.setAttribute('transform', transformValue);
  
      this.setState({
        zoomFactor,
        zoomOriginX: clickX,
        zoomOriginY: clickY,
        isZoomed: true,
      });
    }
  };  
  
  
  render() {
    const { zoomFactor, zoomOriginX, zoomOriginY, isZoomed } = this.state;
    const viewBox = `0 0 ${2969.26 / zoomFactor} ${2099.73 / zoomFactor}`;

    const transformValue = `scale(${zoomFactor}) translate(${zoomOriginX}px, ${zoomOriginY}px)`;

    // Define a style object with animation for the zoom effect
    const svgStyle = {
      animation: isZoomed ? 'zoom-in 0.3s ease-in-out forwards' : 'zoom-out 0.3s ease-in-out forwards',
      willChange: 'transform', // Hint for better performance
    };

    return (
      <div className='flex'>
        <p>{isZoomed ? 'Zoomed' : 'Not Zoomed'}</p>
        <svg

          onClick={this.handleClick}
          ref={this.svgRef}
          viewBox="0 0 3507 2480"
          version="1.2"
          baseProfile="tiny"
          style={svgStyle} // Apply the style to the SVG element
          className='sm:leading-[1px] h-80 w-80'
        >
          <defs />
          
          <g
            fill-rule="evenodd"
            stroke-width="1"
            stroke-linecap="square"
            fill="none"
            stroke="black"
            stroke-linejoin="bevel"
            transform={transformValue}
          >
            <MapSVG />
          </g>
        </svg>
      </div>
    );
  }
}

export default Map;
