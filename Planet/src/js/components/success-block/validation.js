import * as yup from "yup";
import { PHONE_REGEX } from "../../constants/regex.js";
import {
  ERROR_FIELD_PHONE_MATCH_KEY,
  ERROR_FIELD_PHONE_KEY,
  ERROR_FIELD_SKYPE_KEY,
  ERROR_FIELD_ZOOM_KEY,
} from "../../constants/errors.js";

export const validationSchema = yup
  .object({
    phone: yup
      .string()
      .matches(PHONE_REGEX, {
        message: ERROR_FIELD_PHONE_MATCH_KEY,
      })
      .required(ERROR_FIELD_PHONE_KEY),
    skype: yup.string().min(1, ERROR_FIELD_SKYPE_KEY),
    zoom: yup.string().min(1, ERROR_FIELD_ZOOM_KEY),
  })
  .required();
