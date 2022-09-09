import React from "react";
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
        <h2 className="main-title">Введите Ваши персональные данные:</h2>
        <h3 className="form-title">Дата рождения</h3>
        <div className="row three-cols">
          <div className="col">
            <Controller
              name="day"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label="День*"
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
                  label="Месяц*"
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
                  label="Год*"
                  items={YEARS_ARRAY}
                />
              )}
            />
          </div>
        </div>
        <h3 className="form-title">Контактная информация</h3>
        <div className="row three-cols">
          <div className="col">
            <Field
              label={`${t('name')}*`}
              registerLabel="firstName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="col">
            <Field
              label="Фамилия*"
              registerLabel="lastName"
              register={register}
              errors={errors}
            />
          </div>
          <div className="col">
            <Field
              label="Отчество"
              registerLabel="patronymic"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="row two-cols">
          <div className="col">
            <Field
              label="Телефон*"
              registerLabel="phone"
              register={register}
              errors={errors}
              onChange={handlePhoneNumber}
            />
          </div>
          <div className="col">
            <Field
              label="Электронная почта"
              registerLabel="email"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <h3 className="form-title">Информация о Вас</h3>
        <div className="row two-cols">
          <div className="col">
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  errors={errors}
                  label="Пол*"
                  items={[
                    {
                      displayValue: "Женский",
                      value: "woman",
                    },
                    {
                      displayValue: "Мужской",
                      value: "man",
                    },
                  ]}
                />
              )}
            />
          </div>
          <div className="col">
            <Field
              label="Город*"
              registerLabel="city"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Field
              label="Откуда вы о нас узнали"
              registerLabel="findUs"
              placeholder="Например: от знакомых, из рекламы"
              register={register}
            />
          </div>
        </div>
        <input className="btn-test" type="submit" value="Начать тест" />
      </form>
    </div>
  );
};
