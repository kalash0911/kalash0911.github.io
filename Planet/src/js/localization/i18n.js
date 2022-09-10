import enKeys from "../json/localization/en.json";
import ruKeys from "../json/localization/ru.json";
import i18next from "i18next";
import { getCurrentLang } from "../utils/cookie";
import { initReactI18next } from "react-i18next";
import { changeLanguageOnWebsite } from "./language-select.js";

const initLocalization = () => {
  if (i18next.isInitialized) {
    return;
  }
  i18next.use(initReactI18next).init({
    lng: getCurrentLang(),
    resources: {
      en: {
        translation: {
          ...enKeys,
        },
      },
      ru: {
        translation: {
          ...ruKeys,
        },
      },
    },
  });
  changeLanguageOnWebsite();
};

initLocalization();