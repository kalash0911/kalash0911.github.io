import React from "react";
import { useForm } from "react-hook-form";
import { Field } from "../shared/field/field.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation.js";
import {maskPhoneNumber} from '../../utils/general.js';

export const Form = () => {
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

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  console.log('errors: ', errors);

  const onSubmit = (data) => console.log(data);

  const handlePhoneNumber = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const maskedPhoneNumber = maskPhoneNumber(value);
    setValue('phone', maskedPhoneNumber);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="main-title">Введите Ваши персональные данные:</h2>
        <h6>Дата рождения</h6>
        <div className="row 3-cols">
          <Field
            label="День*"
            registerLabel="day"
            register={register}
            errors={errors}
          />
          <Field
            label="Месяц*"
            registerLabel="month"
            register={register}
            errors={errors}
          />
          <Field
            label="Год*"
            registerLabel="year"
            register={register}
            errors={errors}
          />
        </div>
        <h6>Контактная информация</h6>
        <div className="row 3-cols">
          <Field
            label="Имя*"
            registerLabel="firstName"
            register={register}
            errors={errors}
          />
          <Field
            label="Фамилия*"
            registerLabel="lastName"
            register={register}
            errors={errors}
          />
          <Field
            label="Отчество"
            registerLabel="patronymic"
            register={register}
            errors={errors}
          />
        </div>
        <div className="row 2-cols">
          <Field
            label="Телефон*"
            registerLabel="phone"
            register={register}
            errors={errors}
            onChange={handlePhoneNumber}
          />
          <Field
            label="Электронная почта"
            registerLabel="email"
            register={register}
            errors={errors}
          />
        </div>
        <h6>Информация о Вас</h6>
        <div className="row 2-cols">
          <Field
            label="Пол*"
            registerLabel="sex"
            register={register}
            errors={errors}
          />
          <Field
            label="Город*"
            registerLabel="city"
            register={register}
            errors={errors}
          />
        </div>
        <h6>Откуда вы о нас узнали</h6>
        <div className="row">
          <Field
            label="Откуда вы о нас узнали"
            registerLabel="findUs"
            placeholder="Например: от знакомых, из рекламы"
            register={register}
          />
        </div>
        <input className="btn-test" type="submit" />
      </form>
    </div>
  );
};
