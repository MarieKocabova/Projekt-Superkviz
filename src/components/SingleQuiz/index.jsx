import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Question from "../Question";
import Result from "../Result";

const SingleQuiz = () => {
  const [loading, setLoading] = useState(true);
  const [questionItems, setquestionItems] = useState(null);
  const [actualId, setActualId] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState([]);

  const { id } = useParams();

  const fetchQuestion = () => {
    fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setquestionItems(data.questions);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const getChoice = (answer) => {
    setChosenAnswers([...chosenAnswers, answer]);
    setActualId(actualId + 1);
  };

  console.log(chosenAnswers);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (actualId === questionItems.length) {
    return <Result chosenAnswers={chosenAnswers} questionItems={questionItems} />;
  }

  return <Question questionItems={questionItems} actualId={actualId} getChoice={getChoice} />;
};

export default SingleQuiz;
