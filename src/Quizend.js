import React from "react";

function Quizend({ restart, score, quizLength }) {
  return (
    <div className="card quiz-end">
      <p className="score">
        Score:
        <span>
          {score}/{quizLength}
        </span>
      </p>
      <button className="btn btn-end" onClick={restart}>
        RESTART
      </button>
    </div>
  );
}

export default Quizend;
