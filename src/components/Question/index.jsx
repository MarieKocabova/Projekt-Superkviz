import React, { useEffect } from "react";
import { useParams } from "react-router";

import "./style.css";

const Question = ({ getSingleQuizData, item, actualId, getCorrectId, getChoice }) => {
  const { id } = useParams();

  const fetchQuestion = () => {
    fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        getSingleQuizData(data.questions);
        getCorrectId(data.questions[actualId].correctAnswer);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, [actualId]);

  const handleClick = (choice) => {
    getChoice(choice.target.value);
  };

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
