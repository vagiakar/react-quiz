import React from "react";
import { useGlobalContext } from "./AppProvider.js";

function Intro() {
  const {
    handleSubmit,
    questionsNumber,
    setQuestionsNumber,
  } = useGlobalContext();
  return (
    <form className="intro-form" onSubmit={(e) => handleSubmit(e)} action="">
      <label htmlFor="questionsNumber">
        You can pick a number of questions from 10 to 50:
      </label>
      <input
        id="questionsNumber"
        type="number"
        min="10"
        max="50"
        value={questionsNumber}
        onChange={(e) => setQuestionsNumber(e.target.value)}
      />
      <button className="btn btn-intro">Start</button>
    </form>
  );
}

export default Intro;
