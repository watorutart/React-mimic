import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

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
