import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

function QuestionCard({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);

  // 🔁 Återställ varje gång ny fråga visas
  useEffect(() => {
    setSelected(null);
    setFeedback(null);
  }, [question]);

  const handleClick = (option) => {
    if (selected !== null) return;
    setSelected(option);
    const correct = option === question.answer;
    setFeedback(correct ? "Rätt!" : "Fel!");
    onAnswer(correct);
  };

  return (
    <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: 2, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        {question.question}
      </Typography>
      {question.options.map((opt) => (
        <Button
          key={opt}
          fullWidth
          variant={selected === opt ? "contained" : "outlined"}
          color={
            selected
              ? opt === question.answer
                ? "success"
                : opt === selected
                ? "error"
                : "inherit"
              : "primary"
          }
          onClick={() => handleClick(opt)}
          disabled={selected !== null}
          sx={{ mb: 1 }}
        >
          {opt}
        </Button>
      ))}
      {feedback && <Typography sx={{ mt: 2 }}>{feedback}</Typography>}
    </Box>
  );
}

export default QuestionCard;
