import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fi from "../locales/fi.json";

const resources = {
  lng: "fi",
  fi: {
    translation: fi,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

i18n.changeLanguage("fi");

export default i18n;
