import React, { useEffect, useLayoutEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Field } from "../shared/field/field.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation.js";
import { maskPhoneNumber } from "../../utils/general.js";
import { Select } from "../shared/select/select.jsx";
import { MONTH_ARRAY, YEARS_ARRAY, DAYS_ARRAY } from "../../constants/form.js";
import { useTranslation } from "react-i18next";

export const Form = ({ setFormValues }) => {
  const defaultValues = {
    day: "",
    month: "",
    year: "",
    firstName: "",
    lastName: "",
    patronymic: "",
    phone: "",
    email: "",
    sex: "",
    city: "",
    findUs: "",
  };

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setFormValues(data);
  };

  const handlePhoneNumber = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const maskedPhoneNumber = maskPhoneNumber(value);
    setValue("phone", maskedPhoneNumber);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="main-title">{t('personalInfoTitle')}</h2>
        <h3 className="form-title">{t('dateOfBirthday')}</h3>
        <div className="row three-cols">
          <div className="col">
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label={t("dayWordRequired")}
                  items={DAYS_ARRAY}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              name="month"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label={t("monthWordRequired")}
                  items={MONTH_ARRAY}
                />
              )}
            />
          </div>
          <div className="col">
            <Controller
              name="year"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label={t("yearWordRequired")}
                  items={YEARS_ARRAY}
                />
              )}
            />
          </div>
        </div>
        <h3 className="form-title">{t("contactInfoTitle")}</h3>
        <div className="row three-cols">
          <div className="col">
            <Field
              label={t('formNameTitle')}
              registerLabel="firstName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="col">
            <Field
              label={t("formSubNameTitle")}
              registerLabel="lastName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="col">
            <Field
              label={t("patronymicWord")}
              registerLabel="patronymic"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="row two-cols">
          <div className="col">
            <Field
              label={t("formPhoneTitle")}
              registerLabel="phone"
              register={register}
              errors={errors}
              onChange={handlePhoneNumber}
            />
          </div>
          <div className="col">
            <Field
              label={t("formEmailTitle")}
              registerLabel="email"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <h3 className="form-title">{t("infoAboutYou")}</h3>
        <div className="row two-cols">
          <div className="col">
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label={t("sexWordRequired")}
                  items={[
                    {
                      displayValue: t("womenWord"),
                      value: "woman",
                    },
                    {
                      displayValue: t("manWord"),
                      value: "man",
                    },
                  ]}
                />
              )}
            />
          </div>
          <div className="col">
            <Field
              label={t("cityWordRequired")}
              registerLabel="city"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Field
              label={t("whereDidUKnowLabel")}
              registerLabel="findUs"
              placeholder={t("exampleWhereDidUKnow")}
              register={register}
            />
          </div>
        </div>
        <input className="btn-test" type="submit" value={t("startTestBtnText")} />
      </form>
    </div>
  );
};
