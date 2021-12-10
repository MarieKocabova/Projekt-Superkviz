import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./style.css";

import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QuizList from "./components/QuizList";
import SingleQuiz from "./components/SingleQuiz";
import Topscore from "./components/Topscore";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/kvizy" element={<QuizList />} />
          <Route path="/kviz/:id" element={<SingleQuiz />} />
          <Route path="/zebricek" element={<Topscore />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

render(<App />, document.querySelector("#app"));
