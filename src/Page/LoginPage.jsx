import { useState } from "react";
import { Button, Input } from "../Component/common";
import "./style/loginStyle.css";

export const LoginPage = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputs;

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    console.log(inputs);
  };
  return (
    <div className="background-screen">
      <h1 className="login-logo">SONOVA</h1>
      <Input
        value={id}
        onChange={handleChange}
        props={{
          name: "id",
          type: "text",
          placeholder: "아이디",
        }}
        className="login-input"
      />
      <Input
        value={password}
        onChange={handleChange}
        props={{
          name: "password",
          type: "password",
          placeholder: "비밀번호",
        }}
        className="login-input"
      />
      {id.length < 10 ? (
        <div className="error-message">회원 정보가 없습니다. 다시 확인해주세요.</div>
      ) : (
        <div></div>
      )}
      <Button onClick={handleClick} children={"로그인"} className="login-button"/>
      <Button children={"회원가입"} className="signup-button" />
    </div>
      // onClick 추가해서 회원가입 링크로 이동
  );
};
