import { Button } from "../common";

export const WordGuide = ({ handleStartTest }) => {
  return (
    <div className="flex h-[450px] p-4 border border-blue-500">
      <div className="flex flex-col items-center justify-center w-full gap-20 bg-white grow-1">
        <div className="flex flex-col items-center mt-20 text-lg font-bold">
          <div>단어 학습을 마쳤습니다.</div>
          <div>퀴즈를 진행해볼까요?</div>
        </div>
        <div className="grow-[0.2]">
          <Button children={"퀴즈 진행"} onClick={handleStartTest} />
        </div>
      </div>
    </div>
  );
};
