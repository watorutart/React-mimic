import React from "react";
import styled from "styled-components";

const Header = () => {
  return <SHeader>Header</SHeader>;
};

const SHeader = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export default Header;
