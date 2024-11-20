import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"; // Your English translations
import es from "./locales/es.json"; // Your Spanish translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en, // English translations
    },
    es: {
      translation: es, // Spanish translations
    },
  },
  lng: "en", // Default language (English)
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
