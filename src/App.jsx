import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Overview, AboutUs, Contact, Hero, Navbar, StarsCanvas,
    Explore, Works, Feedbacks,Experience, AppProducts, Map,
    LanguageSelectionPopup } from "./components";
import { bgGrayGradientStyle } from "./globalColorScheme";
import { southAmerica } from "./assets";
import i18n from './i18n/i18n';
import React, { useEffect, useState } from "react";

const App = () => {
    const [showLanguagePopup, setShowLanguagePopup] = useState(true);
    useEffect(() => {
        const languageSelected = localStorage.getItem("languageSelected");
        if (languageSelected) {
            setShowLanguagePopup(false);
        }
    }, []);

    const handleCloseLanguagePopup = () => {
        setShowLanguagePopup(false);
        localStorage.setItem("languageSelected", "true");
    };

      window.addEventListener("beforeunload", () => {
        localStorage.removeItem("languageSelected");
      });

    return (
        <div className='relative z-0' style={bgGrayGradientStyle}>
            {showLanguagePopup && <LanguageSelectionPopup onClose={handleCloseLanguagePopup} />}
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
                <Navbar isMain={true} />
                <Hero />
            </div>
            <Overview />
            <AppProducts />
            <Explore />
            <div className="items-center mobile-hide flex">
                <img className="absolute map-size" src={southAmerica}/>
                <Map />
            </div>
            <AboutUs />
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}

export default App;
