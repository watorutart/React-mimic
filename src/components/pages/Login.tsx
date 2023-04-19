import { ChangeEvent, FC, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

const Login: FC = memo(() => {
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const onClickConfirm = () => {
    console.log(inputText);
    navigate("home");
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div>Login</div>
      <input type="text" value={inputText} onChange={onChangeText} />
      <PrimaryButton onClick={onClickConfirm}>決定</PrimaryButton>
    </>
  );
});

export default Login;
