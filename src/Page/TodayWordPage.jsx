import { Card } from "../Component/common";
import words from "../data/word.json";

//오늘의 단어장
export const TodayWordPage = () => {
  return (
    <div>
      <Card words={words.words} type="test" />
    </div>
  );
};
