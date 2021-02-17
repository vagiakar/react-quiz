import React from "react";
import { useGlobalContext } from "./AppProvider.js";
function Question() {
  const { quiz, questionsIndex } = useGlobalContext();
  return <h1>{quiz[questionsIndex].question}</h1>;
}

export default Question;
