import * as yup from "yup";
import {
  ERROR_FIELD_DAY_KEY,
  ERROR_FIELD_MONTH_KEY,
  ERROR_FIELD_YEAR_KEY,
  ERROR_FIELD_FIRST_NAME_KEY,
  ERROR_FIELD_LAST_NAME_KEY,
  ERROR_FIELD_PHONE_KEY,
  ERROR_FIELD_PHONE_MATCH_KEY,
  ERROR_FIELD_SEX_KEY,
  ERROR_FIELD_EMAIL_KEY,
  ERROR_FIELD_CITY_KEY,
} from "../../constants/errors.js";
import { PHONE_REGEX, EMAIL_REGEX } from "../../constants/regex.js";

export const validationSchema = yup
  .object({
    day: yup.string().required(ERROR_FIELD_DAY_KEY),
    month: yup.string().required(ERROR_FIELD_MONTH_KEY),
    year: yup.string().required(ERROR_FIELD_YEAR_KEY),
    firstName: yup.string().required(ERROR_FIELD_FIRST_NAME_KEY),
    lastName: yup.string().required(ERROR_FIELD_LAST_NAME_KEY),
    patronymic: yup.string(),
    phone: yup
      .string()
      /* .matches(PHONE_REGEX, {
        message: ERROR_FIELD_PHONE_MATCH_KEY,
      }) */
      .required(ERROR_FIELD_PHONE_KEY),
    email: yup.string().matches(EMAIL_REGEX, {
      message: ERROR_FIELD_EMAIL_KEY,
    }),
    sex: yup.string().required(ERROR_FIELD_SEX_KEY),
    city: yup.string().required(ERROR_FIELD_CITY_KEY),
    findus: yup.string(),
  })
  .required();
