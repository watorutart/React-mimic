import React from "react";
import { ChangeEvent, FC, memo } from "react";
import styled from "styled-components";

type Props = {
  type: string;
  placeholder: string;
  inputText: string;
  setInputText: (str: string) => void;
};

const InputText: FC<Props> = (props: Props) => {
  const { type, placeholder, inputText, setInputText } = props;

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <SInput
      type={type}
      value={inputText}
      onChange={onChangeText}
      placeholder={placeholder}
      required
    />
  );
};

const SInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 2px solid #cccccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f1f1f1;
`;

export default InputText;
