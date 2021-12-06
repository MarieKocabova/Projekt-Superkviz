import React, { useEffect, useState } from "react";

import "./style.css";

const Question = () => {
  const [item, setItem] = useState(null);
  const [actualId, setActualId] = useState(0);
  const [correctId, setCorrectId] = useState("");
  const [chosenAns, setChosenAns] = useState("");

  const fetchQuestion = () => {
    fetch("https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/3.json")
      .then((response) => response.json())
      .then((data) => {
        setItem(data.questions);
        setCorrectId(data.questions[actualId].correctAnswer);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, [actualId]);

  const handleClick = (a) => {
    setChosenAns(a.target.value);
    setActualId(actualId + 1); // doplnit if, else na vyhodnocení..
  };
  console.log(chosenAns);
  console.log(correctId);

  return (
    <main className="main">
      <div className="question">
        {item !== null || undefined ? (
          <>
            <p className="question__number">
              Otázka {actualId + 1}/ {item.length}
            </p>

            <h2 className="question__title">{item[actualId].title}</h2>

            <div className="question__content">
              <img className="question__image" src={item[actualId].image} alt={item[actualId].title}></img>

              <div className="question__answers">
                {item[actualId].answers.map((a, idx) => (
                  <button className="question__answer" value={idx} key={idx} onClick={handleClick}>
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
