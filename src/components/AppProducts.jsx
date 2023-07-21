import React from "react";
import { Navbar} from ".";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { bgGrayGradientStyle } from "../globalColorScheme";

const AppProducts = ({urlPath}) => {
console.log("ff---", urlPath);
    return(
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
            </div>
            <urlPath/>
        </div>
    );

}

export default AppProducts;