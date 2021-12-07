import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const QuizList = () => {
  const [quizes, setQuizes] = useState([]);

  const fetchQuizes = () => {
    fetch("https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quizes.json")
      .then((response) => response.json())
      .then((data) => {
        setQuizes(data);
      });
  };

  useEffect(() => {
    fetchQuizes();
  }, []);

  return (
    <main className="main">
      <div className="quiz-list">
        {quizes.map((q) => (
          <div className="quiz-item" key={q.id}>
            <img className="quiz-item__image" src={q.image} alt={q.title}></img>
            <div className="quiz-item__content">
              <h2 className="quiz-item__title">{q.title}</h2>
              <p className="quiz-item__questions">{q.questions} otázek</p>
              <Link to={`/kvizy/${q.id}`} className="quiz-item__link">
                Spustit kvíz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default QuizList;
