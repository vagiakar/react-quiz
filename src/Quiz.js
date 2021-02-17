import React from "react";
import Question from "./Question.js";
import Answers from "./Answers.js";
import { useGlobalContext } from "./AppProvider.js";

function Quiz() {
  const { quiz, questionsIndex, submitQuestion } = useGlobalContext();
  return (
    <section className="card quiz">
      <Question />
      <Answers />
      <button className="btn btn-next" onClick={submitQuestion}>
        {questionsIndex === quiz.length - 1 ? "End Quiz" : "Next"}
      </button>
      <p className="question-number">{`${questionsIndex + 1}/${
        quiz.length
      }`}</p>
    </section>
  );
}

export default Quiz;
