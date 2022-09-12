import i18next from "i18next";
import { getCurrentLang, setLanguage } from "../utils/cookie.js";
import './i18n';

function initLanguageSelect() {

  const onChangeLanguage = new Event("onChangeLanguage", {"bubbles":true, "cancelable":false});

  const selectedLang = getCurrentLang();

  const languageSelect = document.querySelector(".language-select");

  if (!languageSelect) {
    return;
  }

  const selectedLanguageBtn =
  languageSelect.querySelector(".selected-language");

  selectedLanguageBtn.textContent = selectedLang;

  selectedLanguageBtn.addEventListener("click", () => {
    languageSelect.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".language-select")) {
      closeLangugeSelect();
    }
    if(event.target.classList.contains("language-button")) {
      const newLang = event.target.dataset.lang;
      selectedLanguageBtn.textContent = newLang;
      closeLangugeSelect();

      if(i18next.language !== newLang) {
        setLanguage(newLang).then(() => {
          changeLanguageOnWebsite();
          // Trigger react app localization
          if(document.getElementById("test")) {
            event.target.dispatchEvent(onChangeLanguage);
          }
        })
      }
    }
  });

  function closeLangugeSelect() {
    languageSelect.classList.remove("active");
  }
}

function changeLanguageOnWebsite() {

  const localizationTags = document.querySelectorAll("[data-localization]");
  const localizationPlaceholders = document.querySelectorAll(
    "[data-localization-placeholder]"
  );

  localizationTags.forEach((el) => {
    el.innerHTML = `${i18next.t(el.dataset.localization, {interpolation: {
      escapeValue: false,
    }})}`;
  });

  localizationPlaceholders.forEach((el) => {
    el.placeholder = `${i18next.t(el.dataset.localizationPlaceholder)}`;
  });
}


export {
  changeLanguageOnWebsite,
  initLanguageSelect,
}