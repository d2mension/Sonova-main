import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Flashcard from "./Component/Flashcard";
import {
  RegistPage,
  LoginPage,
  MainPage,
  MyPage,
  MyWordPage,
  SearchList,
  TodayWordPage,
  QuizPage,
} from "./Page";
import "./style/cardStyle.css";
import { Button } from "./Component/common";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", "${vh}px");
  }
  useEffect(() => {
    setScreenSize();
  });

  const navigate = useNavigate();

  const todaywordPage = () => {
    navigate("/todayword")
  }

  return (
    <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/regist" element={<RegistPage />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/todayword" element={<TodayWordPage />} />
          <Route path="/myword" element={<MyWordPage />} />
          <Route path="/list" element={<SearchList />} />
          <Route path="/info" element={<MyPage />} />
          <Route path="/test" element={<QuizPage />} />
        </Routes>
    </>
  );
}

export default App;
