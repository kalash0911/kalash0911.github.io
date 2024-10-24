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

  const languageBtns = document.querySelectorAll('.language-button');
  languageBtns.forEach((btn) => {
    if(btn.dataset.lang === selectedLang) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', (event) => {
      const newLang = btn.dataset.lang;
      selectedLanguageBtn.textContent = newLang;
      removeActiveClass(languageBtns);
      event.target.classList.add('active');

      if(i18next.language !== newLang) {
        setLanguage(newLang).then(() => {
          changeLanguageOnWebsite();
          // Trigger react app localization
          if(document.getElementById("test")) {
            btn.dispatchEvent(onChangeLanguage);
          }
        })
      }
    })
  })

  function removeActiveClass(elements) {
    elements.forEach((el) => {
      el.classList.remove('active');
    })
  }

  const preloader = document.querySelector('.preloader');

  if(preloader) {
    preloader.style.opacity = 0;
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.classList.add('d-none');
    }, 300)
  }
}

function changeLanguageOnWebsite() {

  const localizationTags = document.querySelectorAll("[data-localization]");
  const localizationPlaceholders = document.querySelectorAll(
    "[data-localization-placeholder]"
  );

  localizationTags.forEach((el) => {
    el.innerHTML = `${i18next.t(el.dataset.localization, {
      interpolation: {
        escapeValue: false,
      }
    })}`;
  });

  localizationPlaceholders.forEach((el) => {
    el.placeholder = `${i18next.t(el.dataset.localizationPlaceholder)}`;
  });
}


export {
  changeLanguageOnWebsite,
  initLanguageSelect,
}