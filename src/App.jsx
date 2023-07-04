import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { About, Contact, Hero, Navbar, StarsCanvas, Explore } from "./components";

const App = () => {
    const bgGrayGradientStyle = {
        background: 'linear-gradient(to bottom, #D6D6D6, #171717)'
    };
    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Explore />
            {/*<Works />
            <Feedbacks />*/}
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}

export default App;
