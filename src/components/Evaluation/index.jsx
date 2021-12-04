import React from "react";

import "./style.css";

const Evaluation = () => {
  return (
    <main className="main">
      <div className="evaluation">
        <h2 className="evaluation__title">Tvoje hodnocení</h2>

        <div className="evaluation__content">
          <div className="results">
            <div className="result">
              <img className="result__icon" src="../assets/images/incorrect.svg" alt="špatně"></img>

              <div className="result__content">
                <h3 className="result__title">1. Co je ikonická hračka z 80. let?</h3>
                <p className="result__answer">Tvoje odpověď: Kočičák</p>
                <p className="result__answer result__answer--correct">Správná odpověď: Mončičák</p>
              </div>
            </div>

            <div className="result">
              <img className="result__icon" src="../assets/images/correct.svg" alt="správně"></img>

              <div className="result__content">
                <h3 className="result__title">2. Jaké je Luďkovo nejoblíbenější ovoce?</h3>
                <p className="result__answer">Tvoje odpověď: Jahůdka</p>
              </div>
            </div>

            <div className="result">
              <img className="result__icon" src="../assets/images/correct.svg" alt="správně"></img>

              <div className="result__content">
                <h3 className="result__title">3. Zrcadlo, kdo je na světě nejkrásnější?</h3>
                <p className="result__answer">Tvoje odpověď: Já, já jsem nejkrásnější!</p>
              </div>
            </div>

            <div className="results__count">Správně máš 2 ze 3 otázek.</div>
          </div>

          <div className="success-rate">100 %</div>
        </div>
      </div>
    </main>
  );
};

export default Evaluation;
