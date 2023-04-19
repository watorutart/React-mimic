import React from "react";

const menuItems: string[] = [
    "ホーム",
    "検索",
]

const SideMenu = () => {
  return (
    <>
      <div>SideMenu</div>
      {menuItems.map((item) => {
          return <p>{item}</p>;
      })}
    </>
  );
};

export default SideMenu;
