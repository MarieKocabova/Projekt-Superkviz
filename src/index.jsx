import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./style.css";

import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Menu from "./components/Header";
import QuizList from "./components/QuizList";
import Topscore from "./components/Topscore";
import Question from "./components/Question";
import Evaluation from "./components/Evaluation";

const App = () => {
  const [item, setItem] = useState(null);
  const [actualId, setActualId] = useState(0);
  const [correctId, setCorrectId] = useState("");
  const [chosenAns, setChosenAns] = useState("");

  const getChoice = (idx) => {
    setChosenAns(idx);
    {
      actualId <= item.length ? setActualId(actualId + 1) : <Evaluation />;
    }
    console.log(item.length); // doplnit if, else na vyhodnocení..
  };
  console.log(chosenAns);
  console.log(correctId);

  const getSingleQuizData = (data) => {
    setItem(data);
  };

  const getCorrectId = (corrId) => {
    setCorrectId(corrId);
  };

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/kvizy" element={<QuizList />} />
        <Route path="/zebricek" element={<Topscore />} />
        <Route path="/kvizy/:id" element={<Question getSingleQuizData={getSingleQuizData} getCorrectId={getCorrectId} item={item} actualId={actualId} correctId={correctId} getChoice={getChoice} />} />
        <Route path="/result" element={<Evaluation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
