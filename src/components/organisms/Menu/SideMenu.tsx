import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import SideMenuButton from "../../atoms/button/SideMenuButton";

const menuItems = [
  { name: "ホーム", link: "/home" },
  { name: "検索", link: "/search" },
];

const SideMenu = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    console.log("ログアウト");
    navigate("/");
  };

  return (
    <>
      <div>SideMenu</div>
      <div>
        <SNav>
          <ul>
            {menuItems.map((item, index) => (
              <SideMenuButton key={index} url={item.link}>
                {item.name}
              </SideMenuButton>
            ))}
            <PrimaryButton onClick={onClickLogout}>ログアウト</PrimaryButton>
          </ul>
        </SNav>
      </div>
    </>
  );
};

/* サイドメニューの設定 */
const SNav = styled.nav`
  box-sizing: border-box;
  top: 50px;
  height: 100%;
  width: 200px;
  position: fixed;
  overflow: auto;
  background: #ade5f3;
  padding: 10px;
`;

/* グリッドレイアウト */
const SContainer = styled.div`
  display: flex; /* 要素の並列表示 */
  justify-content: center; /* 並列要素同士の位置 */
  flex-wrap: wrap; /* 並列要素の折り返し */
`;

const SA = styled.a`
  font-size: 20px;
  margin-bottom: 16px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default SideMenu;
