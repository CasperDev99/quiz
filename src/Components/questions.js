const questionsData = [
  {
    question: "Vad gillar marina att ha i maten?",
    options: ["Gräddelino", "Sallad", "Vad är mat?", "Kattsand"],
    answer: "Gräddelino",
  },
  {
    question: "Vad är detta som betyder det?",
    options: ["fågel", "Fisk", "Eller", "Mittemellan"],
    answer: "Fisk",
  },
  {
    question: "Hur många långhylsa krävs för att däcka Roger?",
    options: ["2", "8", "7", "1 kubik"],
    answer: "1 kubik",
  },
  {
    question: "5/7 + 3 - 34 ^ 3?",
    options: ["Vet ej", "89", "45", "365"],
    answer: "Vet ej",
  },
  {
    question: "Buller i buller i bock hur många fingrar håller jag upp?",
    options: ["4", "3", "7", "8"],
    answer: "4",
  },
];

export function getRandomQuestions(amount = 5) {
  const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}
