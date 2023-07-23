import { motion } from "framer-motion";

import { styles } from "../styles";
import { cataratas } from "../assets";
import { bgTxtYellowGradientStyle, yellowGradientStyle, bgYellow, yellowBorder } from "../globalColorScheme";

const Hero = () => {
  const dummy = {
    background: 'bg-tertiary',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'black',
    
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full' style={bgYellow} />
          <div className='w-1 sm:h-80 h-40 ' style={yellowGradientStyle} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>
            Convênio
            <span style={bgTxtYellowGradientStyle}>Tur</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Your travel agency <br className='sm:block hidden' />
            in Foz do Iguassu
          </p>
        </div>
        
      </div>
      <div className="xl:w-4/5 h-5/6 pt-96 xl:pl-96">
        {/*<img className="rounded-lg" src={cataratas} />*/}
      </div>
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#overview'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2 clickable-element'
            style={yellowBorder}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full mb-1'
              style={ bgYellow }
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
