import React, { useState, useEffect } from "react";
import { Form } from "./form/form.jsx";
import { TestRules } from "./test-rules/test-rules.jsx";
import { TestApp } from "./test-app/test-app.jsx";
import { SuccessBlock } from "./success-block/success-block.jsx";
import { TestDone } from './test-done/test-done.jsx';
import { setCookie, getCookie } from "../utils/cookie.js";
import { TEST_END } from '../constants/cookie.js';

export const App = () => {
  const [formValues, setFormValues] = useState(null);
  const [startTest, setStartTest] = useState(false); 
  const [userAnswers, setUserAnswers] = useState(null);
  const [testIsDone, setTestToDone] = useState(false);

  const testEndCookie = getCookie(TEST_END);

  if(testEndCookie || testIsDone) {

    return <TestDone />;
  }

  if (formValues) {
    document.querySelector(".heading-block").classList.add("d-none");
  }

  const questionId = userAnswers?.length - 1 || 0;

  const handleUserAnswer = (answers) => {
    setUserAnswers(answers);
    setStartTest(false);
  };

  const submitForm = (comunicationMethod) => {
    const request = {
      userInfo: {
        firstName: formValues.name,
        lastName: formValues.lastName,
        patronymic: formValues.patronymic,
        sex: formValues.sex,
        birthday: {
          day: formValues.day,
          month: formValues.month,
          year: formValues.year,
        },
        contacts: {
          phone: formValues.phone,
          email: formValues.email,
        },
      },
      comunicationContacts: {...comunicationMethod},
      userAnswers: [...userAnswers]
    }

    console.log('request: ', request);
    console.log("formValues: ", formValues);
    console.log("userAnswers: ", userAnswers);
    console.log("comunicationMethod: ", comunicationMethod);
    setCookie(TEST_END, 'true', 31);
    setTestToDone(true);
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
