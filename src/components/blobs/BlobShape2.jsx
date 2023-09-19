const BlobShape2 = ({img}) => {
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
                    <path fill="#8A3FFC" d="M38.3,-47.4C47.7,-37.8,52.1,-23.9,59.1,-7C66.2,9.9,76,29.7,69.9,40.3C63.7,50.8,41.6,52.1,21.9,58.7C2.1,65.3,-15.2,77.3,-29.4,74.7C-43.6,72.1,-54.7,55,-63.1,37.7C-71.6,20.4,-77.4,2.9,-72.3,-10.4C-67.2,-23.8,-51.2,-32.9,-37.3,-41.7C-23.5,-50.5,-11.7,-59.1,1.4,-60.7C14.5,-62.3,28.9,-57,38.3,-47.4Z" transform="translate(100 100)" />
                </clipPath>
            </svg>
        </>
    )
}

export default BlobShape2;