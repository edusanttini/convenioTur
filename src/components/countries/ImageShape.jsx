import { flagarg } from "../../assets";

const ImageShape = ({img}) => {
    console.log('hehhhe', img)
    return (
        <>
            <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stop-color="rgba(0, 0, 0, 1)" offset="0%"></stop>
                        <stop id="stop2" stop-color="rgba(212.915, 12.096, 12.096, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="none" d="M23.4,-37.6C30.2,-36.5,35.5,-30,38.5,-22.9C41.5,-15.7,42.3,-7.9,40.6,-0.9C39,6,35,11.9,31.9,19C28.9,26.1,26.7,34.4,21.6,36.6C16.4,38.8,8.2,35,0.7,33.8C-6.9,32.7,-13.8,34.3,-18.9,32C-24,29.8,-27.2,23.7,-28.9,17.7C-30.6,11.7,-30.8,5.9,-31.4,-0.4C-32,-6.6,-33.2,-13.2,-32.1,-20.2C-31,-27.2,-27.6,-34.6,-21.9,-36.3C-16.2,-37.9,-8.1,-33.8,0.1,-34C8.3,-34.1,16.6,-38.6,23.4,-37.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="1" stroke="url(#sw-gradient)"></path>
                <image xlinkHref={img} x="0" y="0" width="100%" height="100%" clip-path="url(#blob-shape)" preserveAspectRatio="xMidYMid slice" />
                <clipPath id="blob-shape">
                    <path d="M23.4,-37.6C30.2,-36.5,35.5,-30,38.5,-22.9C41.5,-15.7,42.3,-7.9,40.6,-0.9C39,6,35,11.9,31.9,19C28.9,26.1,26.7,34.4,21.6,36.6C16.4,38.8,8.2,35,0.7,33.8C-6.9,32.7,-13.8,34.3,-18.9,32C-24,29.8,-27.2,23.7,-28.9,17.7C-30.6,11.7,-30.8,5.9,-31.4,-0.4C-32,-6.6,-33.2,-13.2,-32.1,-20.2C-31,-27.2,-27.6,-34.6,-21.9,-36.3C-16.2,-37.9,-8.1,-33.8,0.1,-34C8.3,-34.1,16.6,-38.6,23.4,-37.6Z" transform="translate(50 50)" />
                </clipPath>
            </svg>
        </>
    )
}

export default ImageShape;