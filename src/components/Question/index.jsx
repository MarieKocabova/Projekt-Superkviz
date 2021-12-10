import React from "react";

import "./style.css";

const Question = ({ questionItems, actualId, getChoice }) => {
  const handleClick = (choice) => {
    getChoice(choice.target.value);
  };

  return (
    <div className="question">
      <p className="question__number">
        Otázka {actualId + 1}/ {questionItems.length}
      </p>
      <h2 className="question__title">{questionItems[actualId].title}</h2>
      <div className="question__content">
        <img className="question__image" src={questionItems[actualId].image} alt={questionItems[actualId].title}></img>

        <div className="question__answers">
          {questionItems[actualId].answers.map((a, idx) => (
            <button className="question__answer" value={idx} key={idx} onClick={handleClick}>
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
