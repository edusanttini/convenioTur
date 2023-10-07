// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en.json';
import esTranslation from './es.json';
import deTranslation from './de.json';
import frTranslation from './fr.json';
import itTranslation from './it.json';
import ptTranslation from './pt.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
        translation: enTranslation
    },
    es: {
        translation: esTranslation
    },
    de: {
        translation: deTranslation
    },
    fr: {
        translation: frTranslation
    },
    it: {
        translation: itTranslation
    },
    pt: {
        translation: ptTranslation
    },
  },
  lng: 'it',  // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
