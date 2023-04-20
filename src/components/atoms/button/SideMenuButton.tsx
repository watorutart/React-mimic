import React from 'react'
import { FC, ReactNode } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

type Props = {
  children: ReactNode;
  url: string;
};

const SideMenuButton: FC<Props> = (props: Props) => {
    const { children, url } = props;

    const navigate = useNavigate();

    const onClickLink = () => {
        navigate(url);
      }
    
    return <SButton onClick={onClickLink}>{children}</SButton>;
}

const SButton = styled.button`
  background-color: #ade5f3;
  color: #111111;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #5bceeb;
  }
  margin-right: 5px;
`;

export default SideMenuButton