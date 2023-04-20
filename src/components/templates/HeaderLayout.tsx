import React, { FC, ReactNode } from "react";
import Header from "../organisms/layout/Header";
import SideMenu from "../organisms/Menu/SideMenu";

type Props = {
    children: ReactNode;
}

const HeaderLayout: FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <>
      <div>HeaderLayout</div>
      <Header />
      <SideMenu />
      <div>
        {children}
      </div>
    </>
  );
};

export default HeaderLayout;
