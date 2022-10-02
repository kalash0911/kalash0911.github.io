export const maskPhoneNumber = (phoneNumber) => {
  const length = phoneNumber.length;

  if (length > 8) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
  }

  if (length > 6) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6)}`;
  }

  if (length > 3) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return phoneNumber;
};

export const setLangClasses = (newLang) => {
  document.body.classList.add(newLang);
  document.querySelector('html').setAttribute('lang', newLang);

  const langugeBtns = document.querySelectorAll('.language-button');
  if(langugeBtns) {
    langugeBtns.forEach((btn) => {
      const lang = btn.dataset.lang;
      if(lang !== newLang) {
        document.body.classList.remove(lang);
      }
    })
  }
}
