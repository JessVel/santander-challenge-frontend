import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./enTranslation/en.json";
import esTranslation from "./esTranslation/es.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
