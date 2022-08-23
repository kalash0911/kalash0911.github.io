export const PLANET_HOST = window.DEVELOPMENT_MODE
  ? window.location.origin
  : "https://planetaemailsender.azurewebsites.net";

export const PLANET_ENDPOINT = `${PLANET_HOST}/result`;
