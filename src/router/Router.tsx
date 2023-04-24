import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import HeaderLayout from "../components/templates/HeaderLayout";
import Search from "../components/pages/Search";

const Router: FC = memo(() => {
  console.log("Router");
  return (
    <>
      {/* <p>Router test</p> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.children} />
        ))}
      </Routes>
    </>
  );
});

export default Router;
