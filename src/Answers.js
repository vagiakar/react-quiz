import React from "react";
import Answer from "./Answer.js";
import { useGlobalContext } from "./AppProvider.js";
function Answers() {
  const { quiz, questionsIndex } = useGlobalContext();
  return (
    <div className="answers">
      {quiz[questionsIndex].answers.map((answerOption, index) => {
        return <Answer key={index} answerOption={answerOption} />;
      })}
    </div>
  );
}

export default Answers;
