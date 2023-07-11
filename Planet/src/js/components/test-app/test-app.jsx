import React, { useState, useEffect } from "react";
import testsJson from "../../json/tests.json";
import { ANSWERS_LIST } from "../../constants/rules.js";
import { ProgressBar } from "../shared/progress-bar/progress-bar.jsx";
import { useTranslation } from "react-i18next";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/cookie";

export const TestApp = ({ setUserAnswers, questionInd }) => {
  const cahcedQuestions = JSON.parse(getFromLocalStorage('questions'))
  const { t, i18n } = useTranslation();
  const [questionList, setQuestionList] = useState(cahcedQuestions?.questions || [...testsJson.tests]);
  const [currentQuestionIdx, setQuestionIdx] = useState(cahcedQuestions?.currentQuestionIdx || questionInd);
  const [answers, setAnswers] = useState(ANSWERS_LIST);

  const questionLength = questionList.length;

  const isBtnNextDisabled =
    questionList[currentQuestionIdx].answer === undefined;

  const isLastQuestion = questionList[currentQuestionIdx].id === questionLength;

  useEffect(() => {
    const root = document.getElementById("test");
    root.classList.add("test-started");

    return () => {
      root.classList.remove("test-started");
    };
  }, []);

  useEffect(() => {
    generateAnswers(questionList[currentQuestionIdx].answer);
  }, [currentQuestionIdx]);

  const generateAnswers = (questionAnswer) => {
    const newAnswers = [...answers];
    newAnswers.forEach((answer) => {
      if (answer.value === questionAnswer) {
        answer.active = true;
        return;
      }
      answer.active = false;
    });
    setAnswers(newAnswers);
  };

  const setAnswerToQuestion = (value, answerInd) => {
    const newQuestionList = [...questionList];
    const newAnswers = [...answers];
    newAnswers.forEach((answer, ind) => {
      if (answerInd === ind) {
        answer.active = true;
        return;
      }
      answer.active = false;
    });
    newQuestionList[currentQuestionIdx].answer = value;
    saveToLocalStorage('questions', {questions: newQuestionList, currentQuestionIdx })
    setQuestionList(newQuestionList);
    setAnswers(newAnswers);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setUserAnswers(questionList);
      return;
    }
    setQuestionIdx(currentQuestionIdx + 1);
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setQuestionIdx(currentQuestionIdx - 1);
    }
  };

  const handleStartOver = () => {
    setQuestionList(testsJson.tests.map(({id, text}) => ({id, text})));
    setQuestionIdx(0)
    saveToLocalStorage('questions', {});
  }

  const answerItems = answers.map(
    ({ value, label, active, localizationKey }, answerInd) => (
      <li
        onClick={() => setAnswerToQuestion(value, answerInd)}
        className={`answer-option ${active ? "active" : ""}`}
        key={answerInd}
      >
        {t(localizationKey) || label}
      </li>
    )
  );

  const paginationItems = questionList.map(({ id, answer }, ind) => {
    return (
      <li className="pagination-item" key={id}>
        <button
          className={`pagination-btn ${
            currentQuestionIdx === ind ? "current" : ""
          }`}
          onClick={() => setQuestionIdx(ind)}
          key={id}
          disabled={answer === undefined}
        >
          {id < 10 ? `0${id}` : id}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="tests-wrap">
        <div className="questions-block">
          <div className="question-wrap">
            <ProgressBar
              label={t("oxfTest")}
              current={currentQuestionIdx + 1}
              length={questionLength}
              lengthLabel={t("questions")}
            />
            <h2 className="main-title">
              {questionList[currentQuestionIdx].text[i18n.language || 'ru']}
            </h2>
            <ul className="answer-list">{answerItems}</ul>
          </div>
          <div className="btns-wrap">
            <button
              className="btn"
              onClick={handlePrevQuestion}
              disabled={!currentQuestionIdx}
            >
              {t("prev")}
            </button>
            <button
              className="btn"
              onClick={handleNextQuestion}
              disabled={isBtnNextDisabled}
            >
              {!isLastQuestion ? t("next") : t("proceed")}
            </button>
          </div>
        </div>
        <div className="pagination-block">
          <div className="pagination-title">
            <h3 className="form-title">{t("questionsList")}</h3>
            <button className="refresh-btn" onClick={handleStartOver}>
              <img src="../../../images/rotate-right.svg"/>
            </button>
          </div>
          <ul className="pagination">{paginationItems}</ul>
        </div>
      </div>
    </>
  );
};
