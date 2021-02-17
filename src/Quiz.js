import React from "react";
import Question from "./Question.js";
import Answers from "./Answers.js";

function Quiz({ quiz, submitQuestion, questionsIndex, setIsCorrectAnswer }) {
  return (
    <section className="card quiz">
      <Question quiz={quiz} questionsIndex={questionsIndex} />
      <Answers
        quiz={quiz}
        questionsIndex={questionsIndex}
        setIsCorrectAnswer={setIsCorrectAnswer}
      />
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
