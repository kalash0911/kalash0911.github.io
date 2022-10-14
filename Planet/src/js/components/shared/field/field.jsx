import React from "react";
import { useTranslation } from "react-i18next";

export const Field = ({
  label,
  registerLabel,
  register,
  errors,
  placeholder,
  ...restProps
}) => {
  const errorCls = errors && errors[registerLabel] ? "error" : "";
  const { t } = useTranslation();
  return (
    <div className={`field ${errorCls}`}>
      <label>
        <span className="label">{label}</span> <br />
        <input
          type="text"
          placeholder={placeholder || label.replace("*", "")}
          {...register(registerLabel)}
          {...restProps}
        />
        <p className="error-text">
          {(errors && t(errors[registerLabel]?.message)) || <>&nbsp;</>}
        </p>
      </label>
    </div>
  );
};
