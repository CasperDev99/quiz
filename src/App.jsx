import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import QuizPage from "./Components/QuizPage";
import HighScorePage from "./Components/HighScorePage";

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/highscore" element={<HighScorePage />} />
      </Routes>
    </>
  );
}
