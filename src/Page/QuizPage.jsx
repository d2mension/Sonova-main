import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../Component/common";
import './style/QuizPage.css';

export const QuizPage = () => {
  const [idx, setIdx] = useState(0);
  const progress = [10, 30, 50, 70, 90];
  const test = useLocation().state.quiz;

  const createTest = (text, word) => {
    const parts = text.split(new RegExp(`(${word})`, "gi"));
    return parts.map((part) =>
      part.toLowerCase() === word.toLowerCase() ? "_".repeat(part.length) : part
    );
  };

  const handleNextQuiz = () => {
    if (idx < 4) {
      setIdx(idx + 1);
    }
  };
  return (
    <div className="quiz-back-screen">
      <div className="w-full h-5 bg-gray-300 rounded-2xl">
        <div
          style={{ width: `${progress[idx]}%` }}
          className="h-full bg-orange-500"
        ></div>
      </div>
      <div className="flashcard">
        <p className="instruction">빈칸에 들어갈 단어를 발음하세요.</p>
        <div className="english-sentence">{createTest(test[idx].example, test[idx].word)}</div>
        <div className="sentence-meaning">{test[idx].exampleMeaning}</div>
        <div className="flex gap-2">
          <Button children={"발음하기"} onClick={() => {}} />
          <Button children={"다음문제"} onClick={handleNextQuiz} />
        </div>
      </div>
    </div>
  );
};
