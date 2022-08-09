import React, { useState } from "react";
import testsJson from "../../json/tests.json";
import { ANSWERS_LIST } from "../../constants/rules.js";

export const TestApp = () => {
  const [questionList, setQuestionList] = useState(testsJson.tests);
  console.log('questionList: ', questionList);
  const [currentQuestionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState(ANSWERS_LIST)

  const questionLength = questionList.length;

  const isBtnNextDisabled = questionList[currentQuestionIdx].answer === undefined;

  const setAnswerValue = (value, answerInd) => {
    const newQuestionList = [...questionList];
    const newAnswers = answers.map((answer, ind) => {
        if(answerInd === ind) {
            return {
                ...answer,
                active: true,
            }
        }
        return {
            ...answer,
            active: false,
        }
    });

    newQuestionList[currentQuestionIdx].answer = value;
    setQuestionList(newQuestionList);
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    // TODO: add prev active class to <li>
    if (currentQuestionIdx < 200) {
      setQuestionIdx(currentQuestionIdx + 1);
      setAnswers(ANSWERS_LIST);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx) {
      setQuestionIdx(currentQuestionIdx - 1);
    }
  };

  return (
    <div>
      <div className="question-wrap">
        <div className="progress-wrap">
          <div className="progress-heading">
            <span className="counter">
              {currentQuestionIdx + 1} / {questionLength} вопросов
            </span>
            <span className="test-name">Оксфордский тест</span>
          </div>
        </div>
        <h2>{questionList[currentQuestionIdx].text}</h2>
        <ul className="answer-list">
          {answers.map(({ value, label, active }, answerInd) => (
            <li
              onClick={() => setAnswerValue(value, answerInd)}
              className={`answer-option ${active ? 'active' : ''}`}
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
