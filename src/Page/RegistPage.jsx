import { useState } from "react";
import { Button, Input } from "../Component/common";

export const RegistPage = () => {
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
      <h1>회원가입</h1>
      <Input
        value={id}
        onChange={handleChange}
        props={{
          name: "id",
          type: "text",
          maxLength: 15,
          placeholder: "아이디",
        }}
      />
      {id.length < 10 ? (
        <div>아이디는 10 ~ 15자로 입력해주세요.</div>
      ) : (
        <div></div>
      )}
      <Input
        value={password}
        onChange={handleChange}
        props={{
          name: "password",
          type: "password",
          placeholder: "비밀번호",
        }}
      />
      <Button onClick={handleClick} children={"회원가입"} />
    </div>
  );
};
