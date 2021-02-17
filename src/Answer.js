import React from "react";
import { useRef, useEffect } from "react";

function Answer({ questionsIndex, answer, correct, setIsCorrectAnswer }) {
  const refAnswer = useRef(null);

  useEffect(() => {
    refAnswer.current.checked = false;
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
