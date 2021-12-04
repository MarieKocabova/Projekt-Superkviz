import React from "react";
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

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/kvizy" element={<QuizList />} />
      <Route path="/zebricek" element={<Topscore />} />
      {/* tohle pak smaž */}
      <Route path="/kviz1" element={<Question />} />
      <Route path="/result1" element={<Evaluation />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

render(<App />, document.querySelector("#app"));
