import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Home: FC = memo(() => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    console.log("ログアウト");
    navigate("/");
  };
  return (
    <>
      <div>Home</div>
      <PrimaryButton onClick={onClickLogout}>ログアウトする</PrimaryButton>
    </>
  );
});

export default Home;
