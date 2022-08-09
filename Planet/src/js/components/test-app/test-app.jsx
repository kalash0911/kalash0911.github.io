import React, { useState } from "react";
import testsJson from "../../json/tests.json";
import { ANSWERS_LIST } from "../../constants/rules.js";

export const TestApp = () => {
  const [questionList, setQuestionList] = useState(testsJson.tests);
  const [currentQuestionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState(ANSWERS_LIST);

  const questionLength = questionList.length;

  const isBtnNextDisabled =
    questionList[currentQuestionIdx].answer === undefined;

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
    setQuestionList(newQuestionList);
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < 200) {
      const nextQuestionInd = currentQuestionIdx + 1;
      const nextQuestionAnswer = questionList[nextQuestionInd].answer;
      const newAnswers = [...answers];
      newAnswers.forEach((answer) => {
        if (answer.value === nextQuestionAnswer) {
          answer.active = true;
          return;
        }
        answer.active = false;
      });
      setQuestionIdx(nextQuestionInd);
      setAnswers(newAnswers);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      const prevQuestionInd = currentQuestionIdx - 1;
      const prevQuestionAnswer = questionList[prevQuestionInd].answer;
      const newAnswers = [...answers];
      newAnswers.forEach((answer) => {
        if (answer.value === prevQuestionAnswer) {
          answer.active = true;
          return;
        }
        answer.active = false;
      });
      setQuestionIdx(prevQuestionInd);
      setAnswers(newAnswers);
    }
  };

  return (
    <div className="tests-wrap">
      <div className="question-wrap">
        <div className="progress-wrap">
          <div className="progress-heading">
            <span className="counter">
              {currentQuestionIdx + 1} / {questionLength} вопросов
            </span>
            <span className="test-name">Оксфордский тест</span>
          </div>
        </div>
        <h2 className="main-title">{questionList[currentQuestionIdx].text}</h2>
        <ul className="answer-list">
          {answers.map(({ value, label, active }, answerInd) => (
            <li
              onClick={() => setAnswerToQuestion(value, answerInd)}
              className={`answer-option ${active ? "active" : ""}`}
              key={answerInd}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="btns-wrap">
        <button
          className="btn"
          onClick={handlePrevQuestion}
          disabled={!currentQuestionIdx}
        >
          Предыдущий
        </button>
        <button
          className="btn"
          onClick={handleNextQuestion}
          disabled={isBtnNextDisabled}
        >
          Следующий
        </button>
      </div>
    </div>
  );
};
