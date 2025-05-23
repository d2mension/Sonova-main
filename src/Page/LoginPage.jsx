import { useState } from "react";
import { Button, Input } from "../Component/common";

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
    <div>
      <h1>로그인</h1>
      <Input
        value={id}
        onChange={handleChange}
        props={{
          name: "id",
          type: "text",
          placeholder: "아이디",
        }}
      />
      <Input
        value={password}
        onChange={handleChange}
        props={{
          name: "password",
          type: "password",
          placeholder: "비밀번호",
        }}
      />
      {id.length < 10 ? (
        <div>회원 정보가 없습니다. 다시 확인해주세요.</div>
      ) : (
        <div></div>
      )}
      <Button onClick={handleClick} children={"로그인"} />
    </div>
  );
};
