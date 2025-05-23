import { Card } from "../Component/common";
import words from "../data/word.json";

// 나만의 단어장
export const MyWordPage = () => {
  return (
    <div>
      <Card words={words.words} type="word" />
    </div>
  );
};
