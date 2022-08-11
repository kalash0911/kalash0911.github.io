import React, { useState } from "react";
import { Form } from "./form/form.jsx";
import { TestRules } from "./test-rules/test-rules.jsx";
import { TestApp } from "./test-app/test-app.jsx";
import { SuccessBlock } from "./success-block/success-block.jsx";
import { setCookie } from "../utils/cookie.js";

export const App = () => {
  const [formValues, setFormValues] = useState(true);
  const [startTest, setStartTest] = useState(true);
  const [userAnswers, setUserAnswers] = useState(true);

  if (formValues) {
    document.querySelector(".heading-block").classList.add("d-none");
  }

  // setCookie('test_end', '1', 5);

  const questionId = userAnswers?.length - 1 || 0;

  const handleUserAnswer = (answers) => {
    setUserAnswers(answers);
    setStartTest(false);
  };

  const submitForm = (comunicationMethod) => {
    console.log("formValues: ", formValues);
    console.log("userAnswers: ", userAnswers);
    console.log("comunicationMethod: ", comunicationMethod);
  };

  const backToTest = () => {
    setStartTest(true);
  };

  return (
    <>
      {!formValues && <Form setFormValues={setFormValues} />}
      {!!formValues && !userAnswers && !startTest && (
        <TestRules setStartTest={setStartTest} />
      )}
      {startTest && (
        <TestApp setUserAnswers={handleUserAnswer} questionInd={questionId} />
      )}
      {userAnswers && !startTest && (
        <SuccessBlock
          submitForm={submitForm}
          backToTest={backToTest}
          phone={formValues?.phone}
        />
      )}
    </>
  );
};

export default App;
