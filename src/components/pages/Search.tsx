import React, { useState } from "react";
import InputText from "../atoms/input/InputText";
import styled from "styled-components";

const Search = () => {
  console.log("search");
  const [inputText, setInputText] = useState<string>(""); 

  return (
    <>
    <div>
      Search
      <InputText
        type="text"
        inputText={inputText}
        setInputText={setInputText}
        placeholder="キーワード検索"
      />
    </div>
    </>
  );
};

const SContainer = styled.div`
    width: 400px;
`

export default Search;
