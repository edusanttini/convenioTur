import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { About, AboutUs, Contact, Hero, Navbar, StarsCanvas, Explore, Works, Feedbacks,Experience, AppProducts } from "./components";
import { bgGrayGradientStyle } from "./globalColorScheme";

const App = () => {
    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
                <Hero />
            </div>
            <About />
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
