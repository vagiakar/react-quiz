import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function formatResults(results) {
  const newResults = results.map((result) => {
    const newResult = {};
    newResult.question = decodeBase64(result.question);
    const newAnswers = [];
    newAnswers.push({
      answer: decodeBase64(result.correct_answer),
      correct: true,
    });
    result.incorrect_answers.forEach((incorrectAnswer) => {
      newAnswers.push({
        answer: decodeBase64(incorrectAnswer),
        correct: false,
      });
    });
    newResult.answers = shuffleAnswers([...newAnswers]);
    return newResult;
  });
  return newResults;
}

function decodeBase64(string) {
  return atob(string);
}

function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const temp = answers[i];
    answers[i] = answers[newIndex];
    answers[newIndex] = temp;
  }
  return answers;
}

export function AppProvider({ children }) {
  const [questionsNumber, setQuestionsNumber] = useState("10");
  const [quiz, setQuiz] = useState([]);
  const [isRestart, setIsRestart] = useState(true);
  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [isQuizEnd, setIsQuizEnd] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${questionsNumber}&type=multiple&encode=base64`;
    const response = await fetch(url);
    const dataJSON = await response.json();
    const results = formatResults(dataJSON.results);
    console.log(results);
    setQuiz(results);
    setIsRestart(false);
  }
  function submitQuestion() {
    incrementQuestion();
    keepScore();
  }
  function incrementQuestion() {
    if (questionsIndex == quiz.length - 1) {
      setIsQuizEnd(true);
      return;
    }
    setQuestionsIndex(questionsIndex + 1);
  }

  function keepScore() {
    if (isCorrectAnswer) {
      console.log("correct");
      setScore(score + 1);
    } else {
      console.log("wrong");
    }
  }

  function restart() {
    setIsRestart(true);
    setQuestionsIndex(0);
    setScore(0);
    setIsQuizEnd(false);
  }
  return (
    <AppContext.Provider
      value={{
        questionsNumber,
        setQuestionsNumber,
        quiz,
        isRestart,
        questionsIndex,
        isQuizEnd,
        setIsCorrectAnswer,
        score,
        handleSubmit,
        submitQuestion,
        restart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
