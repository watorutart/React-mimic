import React from "react";
import styled from "styled-components";

const Header = () => {
  console.log("Header");
  return (
  <SHeader>
    <SHeaderImg src="https://source.unsplash.com/5KKglNl852A"/>
    <h3>Twitter mimic</h3>
  </SHeader>
  );
};

const SHeader = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const SHeaderImg = styled.img`
  /* border-radius: 50%; */
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export default Header;
