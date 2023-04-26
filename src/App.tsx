import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Router from "./router/Router";
import { UserInfoProvider } from "./context/UserInfoStoreContext";
import { LoginUserInfoProvider } from "./context/LoginUserInfo";

function App() {
  return (
    <>
      <UserInfoProvider>
        <LoginUserInfoProvider>
          <p>App test</p>
          <Router />
        </LoginUserInfoProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
