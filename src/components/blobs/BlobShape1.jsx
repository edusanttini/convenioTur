const BlobShape1 = ({img}) => {
    return (
        <>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
                        <stop id="stop2" stopColor="rgba(212.915, 12.096, 12.096, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <image xlinkHref={img} x="0" y="0" width="100%" height="100%" clipPath="url(#blob-shape)" preserveAspectRatio="xMidYMid slice" />
                <clipPath id="blob-shape">
                    <path fill="#8A3FFC" d="M50.6,-55C62.7,-50.1,67.7,-31.5,70.7,-12.8C73.6,5.9,74.4,24.7,65.3,35.1C56.2,45.6,37.2,47.7,20.2,52.5C3.3,57.4,-11.5,64.9,-28.3,64.6C-45.1,64.2,-63.9,56,-73.4,41.4C-82.8,26.9,-83,6.1,-78.8,-13.1C-74.5,-32.4,-65.7,-50.1,-51.8,-54.7C-38,-59.3,-19,-50.8,0.1,-51C19.2,-51.1,38.5,-59.9,50.6,-55Z" transform="translate(100 100)" />
                </clipPath>
            </svg>
        </>
    )
}

export default BlobShape1;