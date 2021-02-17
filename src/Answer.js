import React from "react";
import { useRef, useEffect } from "react";
import { useGlobalContext } from "./AppProvider.js";
function Answer({ answerOption }) {
  const refAnswer = useRef(null);
  const { questionsIndex, setIsCorrectAnswer } = useGlobalContext();
  const { answer, correct } = answerOption;

  useEffect(() => {
    refAnswer.current.checked = false;
    setIsCorrectAnswer(false);
  }, [questionsIndex]);

  return (
    <div className="answer">
      <label htmlFor={answer} className="answer">
        {answer}
      </label>
      <input
        className="answer-input"
        ref={refAnswer}
        id={answer}
        type="radio"
        name="answers"
        value={answer}
        onClick={() => setIsCorrectAnswer(correct)}
      ></input>
    </div>
  );
}

export default Answer;
