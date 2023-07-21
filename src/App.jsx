import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas, Explore, Works, Feedbacks,Experience } from "./components";
import { bgGrayGradientStyle } from "./globalColorScheme";

const App = () => {
    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Explore />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}

export default App;
