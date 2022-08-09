import React from "react";
import { RULES } from "../../constants/rules";

export const TestRules = ({ setStartTest }) => {
  return (
    <div className="rules-wrap">
      <h2 className="main-title">Введите Ваши персональные данные:</h2>
      <ol className="rules-list">
        {RULES.map((rule, ind) => {
          return <li key={ind}>{rule}</li>;
        })}
      </ol>
      <button className="btn-test" onClick={() => setStartTest(true)}>
        Продолжить
      </button>
    </div>
  );
};
