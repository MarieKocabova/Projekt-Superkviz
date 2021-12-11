import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__column">
        <h2 className="intro__title">Vítejte v superkvízu</h2>

        <p>Boží apce s božími kvízy.</p>
        <p>Vyrobena v rámci školního cvičení ke kurzu React od Czechitas. Zadání, html, css připraveno od nejlepšího lektora Luďka Rolečka. Funkční část vybojovala Marie Kocábová, testy vytvořily děti Bára (8) a Terezka(6) Kocábová a jeden jsme opsaly z internetu. Obrázky jsme ukradly, kde se dalo. </p>
        <Link to={`/kvizy`} className="quiz-item__link">
          Ukaž mi kvízy
        </Link>
      </div>

      <div className="intro__column">
        <img className="intro__logo" src="../assets/images/question-mark-logo.svg" alt="logo"></img>
      </div>
    </div>
  );
};

export default Intro;
