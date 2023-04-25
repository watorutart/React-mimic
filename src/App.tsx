import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Router from "./router/Router";
import { UserInfoProvider } from "./context/UserInfoStoreContext";

function App() {
  return (
    <>
      <UserInfoProvider>
        <p>App test</p>
        <Router />
      </UserInfoProvider>
    </>
  );
}

export default App;
