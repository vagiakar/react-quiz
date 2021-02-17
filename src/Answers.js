import React from "react";
import Answer from "./Answer.js";

function Answers({ quiz, questionsIndex, setIsCorrectAnswer }) {
  return (
    <div className="answers">
      {quiz[questionsIndex].answers.map(({ answer, correct }, index) => {
        return (
          <Answer
            key={index}
            answer={answer}
            correct={correct}
            setIsCorrectAnswer={setIsCorrectAnswer}
            questionsIndex={questionsIndex}
          />
        );
      })}
    </div>
  );
}

export default Answers;
