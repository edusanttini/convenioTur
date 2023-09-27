import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Overview, AboutUs, Contact, Hero, Navbar, StarsCanvas, Explore, Works, Feedbacks,Experience, AppProducts, Map } from "./components";
import { bgGrayGradientStyle } from "./globalColorScheme";

const App = () => {
    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
                <Hero />
            </div>
            <Map className="object-center" />
            <Overview />
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
