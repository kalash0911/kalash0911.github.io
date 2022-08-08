import React from "react";
import { useForm } from "react-hook-form";
import { Field } from "../shared/field/field.jsx";

export const Form = () => {

    const defaultValues = {
        day: '',
        month: '',
        year: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        phone: '',
        mail: '',
        sex: '',
        city: '',
        findus: ''
    }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
        <h2 className="main-title">Введите Ваши персональные данные:</h2>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Field label='День*' registerLabel='day' register={register}/>
            <Field label='Месяц*' registerLabel='month' register={register}/>
            <Field label='Год*' registerLabel='year' register={register}/>
            <input className="btn-test" type="submit" />
        </form>
    </div>
  );
};
