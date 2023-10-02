import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelectionPopup = ({ onClose }) => {
    const { t, i18n } = useTranslation();
    const isMobile = window.innerWidth <= 767;
    const handleLanguageSelect = (language) => {
        i18n.changeLanguage(language);
        onClose();
    };

  return (
    <div className="popup-overlay z-50">
      <div className="popup-content">
        <h2 className='mb-8 text-center'>{t('welcome')}</h2>
        <h3 className='mb-4'> {t('selectLanguage')} </h3>
        <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-3'}`}>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('en')}
            >
                {t('English')}
            </button>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('es')}
            >
                {t('Español')}
            </button>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('pt')}
            >
                {t('Português')}
            </button>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('fr')}
            >
                {t('Français')}
            </button>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('de')}
            >
                {t('Deutsch')}
            </button>
            <button type='submit'
                className='bg-neutral-900 py-3 px-8 rounded-xl outline-none
                text-white font-bold shadow-md shadow-primary' 
                onClick={() => handleLanguageSelect('it')}
            >
                {t('Italiano')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionPopup;
