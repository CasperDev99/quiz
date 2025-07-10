import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { getRandomQuestions } from "./questions";
import QuestionCard from "./QuestionCard";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(getRandomQuestions());
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  if (questions.length === 0)
    return <Typography sx={{ mt: 4 }}>Laddar...</Typography>;

  if (finished) {
    return (
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h4">Quiz klart!</Typography>
        <Typography variant="h6">
          Poäng: {score} / {questions.length}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            setQuestions(getRandomQuestions());
            setScore(0);
            setCurrent(0);
            setFinished(false);
          }}
          sx={{ mt: 3 }}
        >
          Spela igen
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mt: 3, textAlign: "center" }}>
        Fråga {current + 1} av {questions.length}
      </Typography>
      <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained" onClick={handleNext}>
          Nästa
        </Button>
        <Typography sx={{ mt: 1 }}>Poäng: {score}</Typography>
      </Box>
    </Box>
  );
}

export default QuizPage;
