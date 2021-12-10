import React from "react";

import "./style.css";

const Result = ({ chosenAnswers, questionItems }) => {
  let correctCount = 0;

  questionItems.forEach((q, idx) => {
    if (q.answers[chosenAnswers[idx]] === q.answers[q.correctAnswer]) {
      correctCount++;
    }
  });

  return (
    <div className="evaluation">
      <h2 className="evaluation__title">Tvoje hodnocení</h2>

      <div className="evaluation__content">
        <div className="results">
          {questionItems.map((q, idx) => (
            <div className="result" key={idx}>
              <img className="result__icon" src={q.answers[chosenAnswers[idx]] === q.answers[q.correctAnswer] ? "../assets/images/correct.svg" : "../assets/images/incorrect.svg"} alt={q.answers[chosenAnswers[idx]] === q.answers[q.correctAnswer] ? "správně" : "špatně"}></img>

              <div className="result__content">
                <h3 className="result__title">{q.title}</h3>
                <p className="result__answer">Tvoje odpověď: {q.answers[chosenAnswers[idx]]}</p>
                {q.answers[chosenAnswers[idx]] !== q.answers[q.correctAnswer] ? <p className="result__answer result__answer--correct"> Správná odpověď: {q.answers[q.correctAnswer]}</p> : null}
              </div>
            </div>
          ))}

          <div className="results__count">
            Správně máš {correctCount} ze {questionItems.length} otázek.
          </div>
        </div>

        <div className="success-rate">{Math.round((correctCount / questionItems.length) * 100)}%</div>
      </div>
    </div>
  );
};

export default Result;
