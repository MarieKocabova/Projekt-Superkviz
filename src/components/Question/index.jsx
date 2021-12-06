import React, { useEffect, useState } from "react";

import "./style.css";

const Question = () => {
  const [item, setItem] = useState(null);
  const [actualId, setActualId] = useState(0);
  const [correctId, setCorrectId] = useState(null);
  const [chosenAns, setChosenAns] = useState(0);

  const fetchQuestion = () => {
    fetch("https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/1.json")
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);
  console.log(item);

  const handleClick = (a) => {
    setChosenAns(a);
  };
  console.log(chosenAns);

  return (
    <main className="main">
      <div className="question">
        {item !== null || undefined ? (
          <>
            <p className="question__number">
              Otázka {actualId + 1}/ {item.questions.length}
            </p>

            <h2 className="question__title">{item.questions[actualId].title}</h2>

            <div className="question__content">
              <img className="question__image" src={item.questions[actualId].image} alt={item.questions[actualId].title}></img>

              <div className="question__answers">
                {item.questions[actualId].answers.map((a, idx) => (
                  <button key={idx} className="question__answer" onClick={handleClick}>
                    {a}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          "loading"
        )}
      </div>
    </main>
  );
};

export default Question;
