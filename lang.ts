import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./utilities/locales/locales";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
