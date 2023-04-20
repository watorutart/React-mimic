import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../organisms/layout/Header";
import SideMenu from "../organisms/Menu/SideMenu";

type Props = {
    children: ReactNode;
}

const HeaderLayout: FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <>
      {/* <div>HeaderLayout</div> */}
      <Header />
      <SideMenu />
      <SContainer>
        {children}
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  margin: 20px;
  width: 70%;
  height: 100%;
  position: relative;
  top: 10px;
  left: 200px;
  background-color: #fff;
  border-radius: 5px;
`

export default HeaderLayout;
