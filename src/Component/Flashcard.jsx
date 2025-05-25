import { useState } from "react";
import "./Flashcard.css";
import { Button } from "./common";
import audioIcon from "../img/audioIcon.png";

// 카드
export default function Flashcard({ words }) {
  const [flipped, setFlipped] = useState(false);

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  const highlightWordInExample = (example, word) => {
    const parts = example.split(new RegExp(`(${word})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === word.toLowerCase() ? (
        <span key={index} className="example-highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* 앞면 */}
      <div className="flashcard-face front-face">
        <div className="flashcard-header">
          <Button children={"즐겨찾기"} onClick={handleButtonClick} />
        </div>

        <div className="flashcard-content">
          <div className="flashcard-word">{words.word}</div>
          <div className="flashcard-phonetic">{"발음기호"}</div>
          <div className="flashcard-meaning">{words.meaning}</div>
        </div>

        <div className="flashcard-footer">
          <Button className="audio-button" onClick={handleButtonClick}>
            <img src={audioIcon} className="audio-icon" alt="speaker" />
            <span className="audio-text">발음 듣기</span>
          </Button>
        </div>
      </div>

      {/* 뒷면 */}
      <div className="flashcard-face back-face">
        <div className="flashcard-header">
          <Button children={"즐겨찾기"} onClick={handleButtonClick} />
        </div>
        <div className="flashcard-content">
          <div className="back-word">{words.word}</div>
          <div className="example">
            <div className="sentence">
              {highlightWordInExample(words.example, words.word)}
            </div>
          </div>
          <div className="sentence-meaning">{words.exampleMeaning}</div>
        </div>
      </div>
    </div>
  );
}
