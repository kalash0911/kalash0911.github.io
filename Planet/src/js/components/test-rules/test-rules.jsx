import React from "react";
import { RULES } from "../../constants/rules";
import { useTranslation } from "react-i18next";

export const TestRules = ({ setStartTest }) => {
  const { t } = useTranslation();

  return (
    <div className="rules-wrap">
      <h2 className="main-title">{t("instructionTitle")}</h2>
      <ol className="rules-list">
        {RULES.map((rule, ind) => {
          return <li key={ind}>{t(rule)}</li>;
        })}
      </ol>
      <button className="btn-test" onClick={() => setStartTest(true)}>
        {t("proceed")}
      </button>
    </div>
  );
};
