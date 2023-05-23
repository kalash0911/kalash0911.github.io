import React, { useState, useEffect } from "react";
import { Form } from "./form/form.jsx";
import { TestRules } from "./test-rules/test-rules.jsx";
import { TestApp } from "./test-app/test-app.jsx";
import { SuccessBlock } from "./success-block/success-block.jsx";
import { TestDone } from "./test-done/test-done.jsx";
import { setCookie, getCookie, saveToLocalStorage,getFromLocalStorage } from "../utils/cookie.js";
import { TEST_END } from "../constants/cookie.js";
import { PLANET_ENDPOINT } from "../constants/link.js";
import { Spinner } from "./shared/spinner/spinner.jsx";
import { ERROR_API_KEY } from "../constants/errors.js";
import { useTranslation } from "react-i18next";

export const App = () => {
  const testEndCookie = getCookie(TEST_END);
  const commonCache =  JSON.parse(getFromLocalStorage('commonCache'))

  const [formValues, setFormValues] = useState(commonCache?.formValues || null);
  const [startTest, setStartTest] = useState(commonCache?.startTest || false);
  const [userAnswers, setUserAnswers] = useState(commonCache?.userAnswers || null);
  const [testIsDone, setTestToDone] = useState(commonCache?.testIsDone || false);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [error, setError] = useState('');
  const { i18n, t } = useTranslation();
  let retries = 0;

  useEffect(() => {
    if(testIsDone || testEndCookie) {
      localStorage.clear();
      return
    }

    const commonCache = {
      formValues,
      startTest,
      userAnswers,
      testIsDone,
    }
    saveToLocalStorage('commonCache', commonCache);


  }, [formValues, startTest, userAnswers, testIsDone, loading, error])

  document.addEventListener('onChangeLanguage', (event) => {
    // Trigger react app localization from native js code
    if(event.target.dataset.lang) {
      i18n.changeLanguage(event.target.dataset.lang)
    }
  })

  const resetTest = () => {
    localStorage.clear();
    setCookie(TEST_END, '');
    setFormValues(null);
    setStartTest(false);
    setUserAnswers(null);
    setTestToDone(false);
  }

  if (formValues || testEndCookie) {
    document.querySelector(".heading-block").classList.add("d-none");
  }

  if (testEndCookie || testIsDone) {
    return <TestDone resetTest={resetTest}/>;
  }

  const questionId = userAnswers?.length - 1 || 0;

  const handleUserAnswer = (answers) => {
    setUserAnswers(answers);
    setStartTest(false);
  };

  const sendPostRequest = (payload) => {
    fetch(PLANET_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.ok) {
          setCookie(TEST_END, "true", 31);
          setTestToDone(true);
        } else {
          if (retries < 2) {
            retries++;
            console.log(`Retrying POST request, attempt ${retries}...`);
            sendPostRequest(payload);
          } else {
            console.log('POST request failed after maximum retries.');
            setError(ERROR_API_KEY);
          }
        }
      })
      .catch((error) => {
        console.log("error: ", error);
        if (retries < 2) {
          retries++;
          console.log(`Retrying POST request, attempt ${retries}...`);
          sendPostRequest(payload);
        } else {
          console.log('POST request failed after maximum retries.');
          setError(ERROR_API_KEY);
        }
      })
      .finally(() => {
        setLoading(false);
        setLoadingText('');
      });
  }

  const submitForm = (comunicationMethod) => {
    setLoading(true);
    setLoadingText(t('loadingText'));
    setError("");

    const onlyAnswers = userAnswers?.map(({ id, answer }) => ({
      id,
      answer,
    }));

    // Note: Can test app with random answers:
    // const fakeAnswers = new Array(200).fill(0).map((el, ind) => ({
    //   id: ind + 1,
    //   answer: Math.floor(Math.random() * 3) + "",
    // }));

    const request = {
      userInfo: {
        firstName: formValues.firstName || "",
        lastName: formValues.lastName || "",
        patronymic: formValues.patronymic || "",
        sex: formValues.sex || "",
        birthday: {
          day: formValues.day || "",
          month: formValues.month || "",
          year: formValues.year || "",
        },
        contacts: {
          phone: formValues.phone || "",
          email: formValues.email || "",
        },
        findUs: formValues.findUs || "",
        language: i18n.language,
        city: formValues.city || "",
      },
      comunicationContacts: { ...comunicationMethod },
      userAnswers: onlyAnswers,
    };
    sendPostRequest(request)
  };

  const backToTest = () => {
    setStartTest(true);
  };

  return (
    <>
      {loading && <Spinner loadingText={loadingText}/>}
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
          apiError={error}
        />
      )}
    </>
  );
};

export default App;
