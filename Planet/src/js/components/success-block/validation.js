import * as yup from "yup";
import { PHONE_REGEX } from "../../constants/regex.js";
import {
  ERROR_FIELD_PHONE_MATCH,
  ERROR_FIELD_PHONE,
  ERROR_FIELD_SKYPE,
  ERROR_FIELD_ZOOM,
} from "../../constants/errors.js";

export const validationSchema = yup
  .object({
    phone: yup
      .string()
      .matches(PHONE_REGEX, {
        message: ERROR_FIELD_PHONE_MATCH,
      })
      .required(ERROR_FIELD_PHONE),
    skype: yup.string().min(1, ERROR_FIELD_SKYPE),
    zoom: yup.string().min(1, ERROR_FIELD_ZOOM),
  })
  .required();
