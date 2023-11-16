import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translation_en from './en/translation.json';
import translation_es from './es/translation.json';
import translation_ca from './ca/translation.json';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
            translation: translation_en
        },
        es: {
            translation: translation_es
        },
        ca: {
            translation: translation_ca
        }
    },
    fallbackLng: "en",
  });

  export default i18n;