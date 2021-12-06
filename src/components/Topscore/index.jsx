import React, { useEffect, useState } from "react";

import "./style.css";

const Topscore = () => {
  const [score, setScore] = useState([]);

  const fetchScore = () => {
    fetch("https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json")
      .then((response) => response.json())
      .then((data) => {
        setScore(data);
      });
  };

  useEffect(() => {
    fetchScore();
    console.log(score);
  }, []);

  return (
    <main className="main">
      <div className="topscore">
        <h2 className="topscore__title">Žebříček nejlepších</h2>

        <ul className="topscore__list">
          {score.map((ele, idx) => (
            <li className="topscore__item" key={idx}>
              <span className="topscore__name">{ele.name}</span>
              <span className="topscore__score">{ele.score}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Topscore;
