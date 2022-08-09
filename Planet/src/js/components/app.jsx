import React, { useState } from "react";
import { Form } from "./form/form.jsx";
import { TestRules } from './test-rules/test-rules.jsx';

export const App = () => {
  const [formValues, setFormValues] = useState(null);
  
  console.log('formValues: ', formValues);
  if(formValues) {
    document.querySelector('.heading-block').classList.add('d-none');
  }

  return (
    <>
      {!formValues && <Form setFormValues={setFormValues} />}
      {!!formValues && <TestRules/>}
    </>
  );
};

export default App;
