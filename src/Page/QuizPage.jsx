import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../Component/common";
import './style/quizStyle.css';
import micIcon from "../img/microphoneIcon.png";
import nextIcon from "../img/nextIcon.png";

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
      <div className="progress-bar">
        <div
          style={{ width: `${progress[idx]}%` }}
          className="progress-fill"
        ></div>
      </div>
      <div className="flashcard">

        <div className="flashcard-body">
          <p className="instruction">빈칸에 들어갈 단어를 발음하세요.</p>
          <div className="english-sentence">{createTest(test[idx].example, test[idx].word)}</div>
          <div className="sentence-meaning">{test[idx].exampleMeaning}</div>
        </div>

        <div className="button-row">
          <Button className="quiz-button" onClick={() => {}}>
            <img src={micIcon} alt="mic" className="btn-icon" />  
            <span className="btn-text">발음하기</span>
          </Button>
          <Button className="quiz-button" onClick={handleNextQuiz}>
            <img src={nextIcon} alt="next" className="btn-icon" />  
            <span className="btn-text">다음 문제</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
