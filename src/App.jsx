import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Overview, AboutUs, Contact, Hero, Navbar, StarsCanvas, Explore, Works, Feedbacks,Experience, AppProducts, Map } from "./components";
import { bgGrayGradientStyle } from "./globalColorScheme";
import { southAmerica } from "./assets";

const App = () => {
    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar isMain={true} />
                <Hero />
            </div>
            <Overview />
            <div className="flex items-center">
                <img className="absolute" class="map-size absolute" src={southAmerica}/>
                <Map />
            </div>
            
            <AppProducts />
            <Explore />
            <AboutUs />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}

export default App;
