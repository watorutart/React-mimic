import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import InputText from "../atoms/input/InputText";
import useAllUserInfo from "../../hooks/useAllUserInfo";
import { useUserInfoStore } from "../../context/UserInfoStoreContext";
import { useLoginUserInfo } from "../../context/LoginUserInfo";
import { request } from "http";
import { UserInfo } from "../../type/api/userinfo";

const Login: FC = memo(() => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  /* Contextの取得 */
  const userInfo = useUserInfoStore();
  // console.log("userInfo", userInfo);
  const loginUserInfoStore = useLoginUserInfo();
  // console.log("loginUserInfoStore", loginUserInfoStore);

  const onClickConfirm = () => {
    console.log(inputUserName, inputPassword);
    navigate("home");
  };

  const onClickSubmit = () => {
    console.log(inputUserName, inputPassword);
    const loginUserInfo = userInfo?.allUserInfo.find(
      (user) =>
        user.username === inputUserName && user.password === inputPassword
    );
    console.log(loginUserInfo);
    if (loginUserInfo !== undefined) {
      loginUserInfoStore.setLoginUserInfo(loginUserInfo);
      console.log("Login success loginUserInfoStore", loginUserInfoStore);
      navigate("home");
    } else {
      alert("ユーザーが見つかりません。");
    }
  };

  const onClickSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputUserName, inputPassword);
    const response = await fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: inputUserName, password: inputPassword})
    });
    if (response.ok) {
      // ログイン成功時
      const user: UserInfo = await response.json();
      console.log(response);
      console.log(user);
      navigate("home");
    } else {
      // ログイン失敗時
      alert("POSTの結果: ユーザーが見つかりません");
    }
  }

  return (
    <>
      <div>Login</div>
      <SContainer>
        <STitle>Login Form</STitle>
        {/* <form> */}
        <form onSubmit={onClickSubmitPost}>
          <label>Username</label>
          <InputText
            type="text"
            inputText={inputUserName}
            setInputText={setInputUserName}
            placeholder="Enter your username"
          />
          <label>Password</label>
          <InputText
            type="password"
            inputText={inputPassword}
            setInputText={setInputPassword}
            placeholder="Enter your password"
          />
          {/* <PrimaryButton onClick={onClickConfirm}>Login Btn</PrimaryButton> */}
          <SSubmit type="submit" value="Login" onClick={onClickSubmit} />
          <br />
          <br />
          <SSubmit type="submit" value="New Login" />
          <p>
            Don't have an account? <SAhref href="#">Sign up</SAhref>
          </p>
        </form>
      </SContainer>
    </>
  );
});

const SContainer = styled.div`
  width: 400px;
  margin: 120px auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  box-sizing: border-box;
`;

const STitle = styled.h2`
  text-align: center;
  color: #333333;
  margin-bottom: 40px;
`;

const SSubmit = styled.input`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`;

const SAhref = styled.a`
  color: #4caf50;
  text-decoration: none;
`;

export default Login;
