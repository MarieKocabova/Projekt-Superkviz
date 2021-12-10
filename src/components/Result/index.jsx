import React from "react";

import "./style.css";

const Result = ({ chosenAnswers, questionItems }) => {
  return (
    <div className="evaluation">
      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      <div className="evaluation__content">
        <div className="results">
          {questionItems.map((q, idx) => (
            <div className="result" key={idx}>
              <img className="result__icon" src="../assets/images/incorrect.svg" alt="špatně"></img>

              <div className="result__content">
                <h3 className="result__title">{q.title}</h3>
                <p className="result__answer">Tvoje odpověď: {q.answers[chosenAnswers[idx]]}</p>
                <p className="result__answer result__answer--correct">{q.answers[q.correctAnswer]}</p>
              </div>
            </div>
          ))}

          <div className="results__count">Správně máš 2 ze 3 otázek.</div>
        </div>

        <div className="success-rate">100 %</div>
      </div>
    </div>
  );
};

export default Result;
