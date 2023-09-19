import { flagarg } from "../../assets";
import { FLAGTXT } from "../Util/base64Images";

const FlagShape = ({img}) => {
    console.log('hehhhe', img)
    return (
        <>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 300 300"
  shape-rendering="geometricPrecision"
  text-rendering="geometricPrecision"
>
  <path
    d="M41.343808,110.223373Q108.01345,78.29703,150,90.075681c41.98655,11.778651,56.719038,21.38755,103.359519,12.398579s-26.041872,121.908315,10.299304,115.521784-94.569027,31.020295-113.658823,9.579797-108.656192-9.123616-108.656192,4.561808s19.004641-141.644046,0-121.914276Z"
    fill="#3f5787"
    stroke="#3f5787"
    stroke-width="0.6"
  />

<image
    x="10"
    width="300"
    height="320"
    xlinkHref={"data:image/png;base64," + img}
    clip-path="url(#shape-clip)"
  />

  <defs>
    <clipPath id="shape-clip">
      <path
        d="M41.343808,110.223373Q108.01345,78.29703,150,90.075681c41.98655,11.778651,56.719038,21.38755,103.359519,12.398579s-26.041872,121.908315,10.299304,115.521784-94.569027,31.020295-113.658823,9.579797-108.656192-9.123616-108.656192,4.561808s19.004641-141.644046,0-121.914276Z"
      />
    </clipPath>
  </defs>

</svg>





        </>
    )
}

export default FlagShape;