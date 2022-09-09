import i18next from "i18next";
import enKeys from "../json/localization/en.json";
import ruKeys from "../json/localization/ru.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "ru",
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

const localizationTags = document.querySelectorAll("[data-localization]");
const localizationPlaceholders = document.querySelectorAll(
  "[data-localization-placeholder]"
);

localizationTags.forEach((el) => {
  el.textContent = `${i18next.t(el.dataset.localization)}`;
});

localizationPlaceholders.forEach((el) => {
  el.placeholder = `${i18next.t(el.dataset.localizationPlaceholder)}`;
});
