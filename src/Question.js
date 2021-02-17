import React from "react";

function Question({ quiz, questionsIndex }) {
  return <h1>{quiz[questionsIndex].question}</h1>;
}

export default Question;
