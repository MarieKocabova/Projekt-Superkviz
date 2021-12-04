import React from "react";

import "./style.css";

const QuizList = () => {
  return (
    <main className="main">
      <div className="quiz-list">
        <div className="quiz-item">
          <img className="quiz-item__image" src="../assets/images/moncicak.jpg" alt="Mončičák"></img>
          <div className="quiz-item__content">
            <h2 className="quiz-item__title">Ikonické hračky 80. let</h2>
            <p className="quiz-item__questions">5 otázek</p>
            <a className="quiz-item__link" href="#">
              Spustit kvíz
            </a>
          </div>
        </div>

        <div className="quiz-item">
          <img className="quiz-item__image" src="../assets/images/snehurka.jpg" alt="Sněhurka"></img>
          <div className="quiz-item__content">
            <h2 className="quiz-item__title">Pohádkové postavy</h2>
            <p className="quiz-item__questions">7 otázek</p>
            <a className="quiz-item__link" href="#">
              Spustit kvíz
            </a>
          </div>
        </div>

        <div className="quiz-item">
          <img className="quiz-item__image" src="../assets/images/pivo.jpg" alt="Pivo"></img>
          <div className="quiz-item__content">
            <h2 className="quiz-item__title">Oblíbené nápoje</h2>
            <p className="quiz-item__questions">13 otázek</p>
            <a className="quiz-item__link" href="#">
              Spustit kvíz
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizList;
