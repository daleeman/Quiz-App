const QuestionBank = [
  {
    question: "What is my fav color?",
    answers: [
      {
        answer: "blue",
        isCorrect: true,
      },
      {
        answer: "red",
        isCorrect: false,
      },
      {
        answer: "green",
        isCorrect: false,
      },
      {
        answer: "orange",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Where is my Home?",
    answers: [
      {
        answer: "Naxal",
        isCorrect: false,
      },
      {
        answer: "Gairidhara",
        isCorrect: true,
      },
      {
        answer: "Dallu",
        isCorrect: false,
      },
      {
        answer: "Balwatar",
        isCorrect: false,
      },
    ],
  },
];

export default (n = 5) =>
  Promise.resolve(QuestionBank.sort(() => 0.5 - Math.random()).slice(0, n));
