import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  img: string;
  name: string;
  body: string;
};

const TweetCard: FC<Props> = (props: Props) => {
  const { img, name, body } = props;
  return (
    <STweetCard>
      <SProfileInfo>
        <SProfileImg src={img} alt="Profile Picture" />
        <SProfileUsername>{name}</SProfileUsername>
      </SProfileInfo>
      <p>{body}</p>
      <STweetActs>
        <SActBtn>Like</SActBtn>
        <SActBtn>Retweet</SActBtn>
        <SActBtn>Reply</SActBtn>
      </STweetActs>
    </STweetCard>
  );
};

const STweetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`

const SProfileInfo = styled.div`
  display: flex;
  align-items: center;
`

const SProfileImg = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const SProfileUsername = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`

const STweetText = styled.p`
  font-size: 16px;
  margin-top: 10px;
`

const STweetActs = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
`

const SActBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #1da1f2;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`

export default TweetCard;
