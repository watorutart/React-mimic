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
        <Route
          path="/home"
          element={
            <HeaderLayout>
              <Home />
            </HeaderLayout>
          }
        />
        <Route
          path="/search"
          element={
            <HeaderLayout>
              <Search />
            </HeaderLayout>
          }
        />
        <Route
          path="/*"
          element={
            <HeaderLayout>
              <Page404 />
            </HeaderLayout>
          }
        />
      </Routes>
    </>
  );
});

export default Router;
