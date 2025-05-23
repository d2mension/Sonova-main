import { useEffect, useState } from "react";
import progress from "../data/myInfo.json";
import clsx from "clsx";

// 마이페이지
export const MyPage = ({ data }) => {
  const [weekDates, setWeekDates] = useState([]);

  // 현재 날짜를 기준으로 주간 달력 계산하는 함수
  const getStartOfWeek = (date) => {
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day; // Sunday (0) -> -6, Monday (1) -> 1
    date.setDate(date.getDate() + diff);
    return date;
  };

  const generateWeekDates = (startOfWeek) => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      weekDates.push(date);
    }
    return weekDates;
  };

  useEffect(() => {
    const currentDate = new Date();
    const startOfWeekDate = getStartOfWeek(currentDate);
    const dates = generateWeekDates(startOfWeekDate);
    setWeekDates(dates);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-3xl font-bold">안녕하세요, userId님</div>
      <div className="flex flex-col items-center gap-5 p-5 bg-yellow-200 border-2 border-orange-500 rounded-xl">
        <div className="text-3xl font-bold">학습 진행도</div>
        <div className=" w-[300px] flex justify-center gap-5  flex-wrap">
          {weekDates.map((date, index) => (
            <div
              key={index}
              className={clsx(
                "flex justify-center items-center p-2 rounded-lg h-[50px]",
                progress.progress[index].completed === 100
                  ? "bg-orange-300"
                  : "bg-white"
              )}
            >
              <div className="font-semibold">
                {date.getMonth() + 1}/{date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
