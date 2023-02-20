import i18next from "i18next";
import { LANG, LANGS_TYPES } from "../constants/cookie.js";
import { setLangClasses } from "./general.js";

export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const setLanguage = (newLang) => {
  setCookie(LANG, newLang);
  setLangClasses(newLang);
  return i18next.changeLanguage(newLang);
}

export const getCurrentLang = () => {
  let selectedLang = getCookie(LANG);

  if (!selectedLang) {
    setCookie(LANG, LANGS_TYPES.RU);
    selectedLang = LANGS_TYPES.RU;
  }

  setLangClasses(selectedLang);
  return selectedLang;
}

export const saveToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
}

export const getFromLocalStorage = (name) => {
  return localStorage.getItem(name)
}