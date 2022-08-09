import React, { useState } from "react";
import { Form } from "./form/form.jsx";
import { TestRules } from "./test-rules/test-rules.jsx";
import { TestApp } from "./test-app/test-app.jsx";

export const App = () => {
  const [formValues, setFormValues] = useState(true);
  const [startTest, setStartTest] = useState(true);

  console.log("formValues: ", formValues);
  if (formValues) {
    document.querySelector(".heading-block").classList.add("d-none");
  }

  return (
    <>
      {!formValues && <Form setFormValues={setFormValues} />}
      {!!formValues && !startTest && <TestRules setStartTest={setStartTest} />}
      {startTest && <TestApp />}
    </>
  );
};

export default App;
