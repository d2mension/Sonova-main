import { useEffect, useState } from "react";
import progress from "../data/myInfo.json";
import clsx from "clsx";
import './style/myPageStyle.css'

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
    <div className="info-background-screen">
      <div className="user-greeting">안녕하세요, userId님</div>
      <div className="progress-box">
        <div className="progress-title">학습 진행도</div>
        <div className="date-grid">
          {weekDates.map((date, index) => (
            <div
              key={index}
              className={clsx(
                "date-cell",
                progress.progress[index].completed === 100
                  ? "date-completed"
                  : "date-incomplete"
              )}
            >
              {date.getMonth() + 1}/{date.getDate()}
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
