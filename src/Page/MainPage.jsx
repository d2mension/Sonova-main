import "../App.css";
import { useNavigate } from "react-router-dom";
import "../style/cardStyle.css";
import { Button } from "../Component/common";
import "./style/MainPage.css";

export function MainPage() {

  const navigate = useNavigate();

  const todaywordPage = () => {
    navigate("/todayword")
  }

  return (
    <div className="main-container">
        <div className="header">
            <Button className="mypage-button">마이페이지</Button>
        </div>
        <div className="study-div" >
            <Button className="study-button" onClick={todaywordPage}>학습하기</Button>
        </div>
        <div className="wordsearch-div">
            <Button className="wordsearch-button">단어 검색</Button>
        </div>

        <div className="todayword">
          <div className="todayword-title">오늘의 단어</div>
          <div className="todayword-box">단어가 들어갈 자리입니다.</div>
        </div>

    </div>
    
  );
}
