import "./App.css";
import { useState } from "react";
import Question from "./components/Question";
import Answer from "./components/Answer";

function App() {
  const QuestionBank = [
    {
      qid: 1,
      question: "What is the capital of Nepal?",
      answers: [
        {
          id: 1,
          answer: "Pokhara",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "Kathmandu",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "Janakpur",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "Lumbini",
          isCorrect: false,
        },
      ],
    },
    {
      qid: 2,
      question: "How many Province are there in Nepal?",
      answers: [
        {
          id: 1,
          answer: "3",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "7",
          isCorrect: true,
        },
        {
          id: 3,
          answer: "4",
          isCorrect: false,
        },
        {
          id: 4,
          answer: "8",
          isCorrect: false,
        },
      ],
    },
    {
      qid: 2,
      question: "How many Districts are there in Nepal?",
      answers: [
        {
          id: 1,
          answer: "23",
          isCorrect: false,
        },
        {
          id: 2,
          answer: "75",
          isCorrect: false,
        },
        {
          id: 3,
          answer: "77",
          isCorrect: true,
        },
        {
          id: 4,
          answer: "56",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);

  const handleAnswerClick = () => {
    const nextQuestion = currentQuestion + 1;
    setcurrentQuestion(nextQuestion);
  };

  return (
    <div className="App container">
      <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <div className="row mainbox">
          <div className="col-8 question-box border-end">
            <div className="row border-bottom">
              <p className="fs-2">Question {currentQuestion + 1}</p>
            </div>
            <Question
              questionOption={QuestionBank[currentQuestion].question}
              key={QuestionBank[currentQuestion].qid}
            ></Question>
          </div>
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            {QuestionBank[currentQuestion].answers.map((answerOption) => (
              <Answer
                handleAnswerClick={handleAnswerClick}
                answerOption={answerOption.answer}
                key={answerOption.id}
              ></Answer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
