import * as yup from "yup";
import {
  ERROR_FIELD_DAY,
  ERROR_FIELD_MONTH,
  ERROR_FIELD_YEAR,
  ERROR_FIELD_FIRST_NAME,
  ERROR_FIELD_LAST_NAME,
  ERROR_FIELD_PHONE,
  ERROR_FIELD_PHONE_MATCH,
  ERROR_FIELD_SEX,
  ERROR_FIELD_EMAIL,
  ERROR_FIELD_CITY,
} from "../../constants/errors.js";
import { PHONE_REGEX, EMAIL_REGEX } from '../../constants/regex.js'

export const validationSchema = yup
  .object({
    day: yup.string().required(ERROR_FIELD_DAY),
    month: yup.string().required(ERROR_FIELD_MONTH),
    year: yup.string().required(ERROR_FIELD_YEAR),
    firstName: yup.string().required(ERROR_FIELD_FIRST_NAME),
    lastName: yup.string().required(ERROR_FIELD_LAST_NAME),
    patronymic: yup.string(),
    // phone: yup.string().matches(PHONE_REGEX, {
    //     message: ERROR_FIELD_PHONE_MATCH
    // }).required(ERROR_FIELD_PHONE),
    email: yup.string().matches(EMAIL_REGEX, {
        message: ERROR_FIELD_EMAIL,
    }),
    sex: yup.string().required(ERROR_FIELD_SEX),
    city: yup.string().required(ERROR_FIELD_CITY),
    findus: yup.string(),
  })
  .required();
