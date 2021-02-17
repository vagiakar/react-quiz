import React from "react";
import { useGlobalContext } from "./AppProvider.js";

function Quizend() {
  const { restart, score, quiz } = useGlobalContext();
  return (
    <div className="card quiz-end">
      <p className="score">
        Score:
        <span>
          {score}/{quiz.length}
        </span>
      </p>
      <button className="btn btn-end" onClick={restart}>
        RESTART
      </button>
    </div>
  );
}

export default Quizend;
