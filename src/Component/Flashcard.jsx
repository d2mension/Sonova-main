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
        <span key={index} className="font-semibold text-orange-500">
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
      <div className="text-center bg-white flashcard-face">
        <div className="flex justify-end p-4">
          <Button children={"즐겨찾기"} onClick={handleButtonClick} />
        </div>

        <div className="flex flex-col items-center justify-center grow-[0.9] gap-3">
          <div className="word">{words.word}</div>
          <div className="phonetic">{"발음기호"}</div>
          <div className="meaning">{words.meaning}</div>
        </div>

        <div className="flex justify-around">
          <Button className="audio-button" onClick={handleButtonClick}>
            <img src={audioIcon} className="audio-icon" alt="speaker" />
            <span className="audio-text">발음 듣기</span>
          </Button>
        </div>
      </div>

      {/* 뒷면 */}
      <div className="transform [transform:rotateY(180deg)] bg-white whitespace-pre-line flashcard-face">
        <div className="flex justify-end p-4">
          <Button children={"즐겨찾기"} onClick={handleButtonClick} />
        </div>
        <div className="text-center flex flex-col items-center justify-center grow-[0.9] gap-3">
          <div className="back-word">{words.word}</div>
          <div className="w-4/5 whitespace-normal">
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
