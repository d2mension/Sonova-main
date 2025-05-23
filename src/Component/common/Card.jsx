import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flashcard from "../Flashcard";
import { WordGuide } from "../word/WordGuide";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Flashcard.css';

export function Card({ words, type }) {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [word, setWord] = useState(words);
  const navigate = useNavigate();
  const handleStartTest = () => {
    const set = new Set();
    while (set.size < 5) {
      let n = Math.floor(Math.random() * 10);
      set.add(n);
    }
    let quiz = [];
    set.forEach((i) => quiz.push(word[i]));
    navigate("/test", { state: { quiz: quiz } });
  };

  return (
    <main className="flex justify-center mt-4">
      <div className="back-screen">
        <Slider {...settings}>
          {word.map((data) => (
            <Flashcard words={data} />
          ))}
          {type === "test" && <WordGuide handleStartTest={handleStartTest} />}
        </Slider>
      </div>
    </main>
  );
}
