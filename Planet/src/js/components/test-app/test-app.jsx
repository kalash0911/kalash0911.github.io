import React, { useState, useEffect } from "react";
import testsJson from "../../json/tests.json";
import { ANSWERS_LIST } from "../../constants/rules.js";
import { ProgressBar } from "../shared/progress-bar/progress-bar.jsx";

export const TestApp = () => {
  const [questionList, setQuestionList] = useState(testsJson.tests);
  const [currentQuestionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState(ANSWERS_LIST);

  const questionLength = questionList.length;

  const isBtnNextDisabled =
    questionList[currentQuestionIdx].answer === undefined;

  useEffect(() => {
    const root = document.getElementById('test');
    root.classList.add('test-started');

    return (() => {
      root.classList.remove('test-started');
    })
  }, [])

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
    setQuestionList(newQuestionList);
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < questionLength) {
      setQuestionIdx(currentQuestionIdx + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIdx > 0) {
      setQuestionIdx(currentQuestionIdx - 1);
    }
  };

  const answerItems = answers.map(({ value, label, active }, answerInd) => (
    <li
      onClick={() => setAnswerToQuestion(value, answerInd)}
      className={`answer-option ${active ? "active" : ""}`}
      key={answerInd}
    >
      {label}
    </li>
  ));

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
    <div className="tests-wrap">
      <div className="questions-block">
        <div className="question-wrap">
          <ProgressBar
            label="Оксфордский тест"
            current={currentQuestionIdx + 1}
            length={questionLength}
            lengthLabel="вопросов"
          />
          <h2 className="main-title">
            {questionList[currentQuestionIdx].text}
          </h2>
          <ul className="answer-list">{answerItems}</ul>
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
      <div className="pagination-block">
        <h5 className="form-title">Список вопросов</h5>
        <ul className="pagination">{paginationItems}</ul>
      </div>
    </div>
  );
};
