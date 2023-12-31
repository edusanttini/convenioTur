import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, headerLogo, languageIcon } from "../assets";
import LanguageSelectionPopup from "./LanguageSelectionPopup";

const Navbar = ({ isMain }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = navLinks();
  const [toggleLang, setToggleLang ] = useState(false);

  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
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

    const handleOpenLanguagePopUp = () => {
      setShowLanguagePopup(true);
      localStorage.setItem("languageSelected", "false");
  };

      window.addEventListener("beforeunload", () => {
        localStorage.removeItem("languageSelected");
      });

  useEffect(() => {
    const sectionId = location.hash.replace('#', '');
    const element = document.getElementById(sectionId);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-bgStartingAt" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={headerLogo} alt='logo' className='w-48 h-12 object-contain rounded-lg clickable-element' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {links.map(link => (
            <div key={link.id}>
              <li
              className={`${
                active === link.title ? "text-secondary" : "text-red-500"
              } hover:text-secondary text-[18px] font-medium clickable-element`}
              onClick={() => setActive(link.title)}
              >

              { isMain ? 
                <a href={`#${link.id}`}>{link.title}</a> :
                <Link to={`/#${link.id}`}>{link.title}</Link> }

              </li>
            </div>
          ))}
          <li>
            <img 
              src={languageIcon}
              alt='lang'
              className='w-32 h-12 clickable-element absolute right-0'
              onClick={handleOpenLanguagePopUp}
            />
            <div >
              {showLanguagePopup && <LanguageSelectionPopup onClose={handleCloseLanguagePopup} />}
            </div>
          </li>
        </ul>

        {/*Mobile*/}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
        <div className="pr-8">
          <img 
            src={languageIcon}
            alt='lang'
            className='w-18 h-10 clickable-element'
            onClick={handleOpenLanguagePopUp}
          />
          <div >
              {showLanguagePopup && <LanguageSelectionPopup onClose={handleCloseLanguagePopup} />}
            </div>
        </div>
        
          <img
            src={toggle ? close : menu}
            alt='menu'
            className={`w-[28px] h-[28px] object-contain transition-transform ${
              toggle ? 'rotate-90' : 'rotate-0'
            }`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-slate-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {links.map(link => (
                isMobile && link.id === 'map' ? null : (
                  <div key={link.id}>
                    <li
                    className={`clickable-element ${
                      active === link.title ? "text-yellow-300" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    >
                    { isMain ? 
                      <a href={`#${link.id}`}>{link.title}</a> :
                      <Link to={`/#${link.id}`}>{link.title}</Link> }
                    </li>
                  </div>
                )
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
