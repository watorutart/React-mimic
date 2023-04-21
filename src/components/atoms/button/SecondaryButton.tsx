import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const SecondaryButton: FC<Props> = (props: Props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #1da1f2;
  color: #ffffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #0c8de4;
  }
`;
