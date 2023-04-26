import React from "react";
import styled from "styled-components";
import { UserInfo } from "../../type/api/userinfo";

type Props = {
    user: UserInfo;
}

const UserCard = (props: Props) => {
  const {user} = props;
  return (
    <>
      <SUserCard key={user.id}>
        <SUserCardHeader>
          <SUserCardImg
            src={`https://i.pravatar.cc/50?u=${user.id}`}
          ></SUserCardImg>
          <SUsername>{user.username}</SUsername>
        </SUserCardHeader>
        <SUserCardBody>
          <SUserCardBodyText>ID: {user.id}</SUserCardBodyText>
          <SUserCardBodyText>Tweets: {user.tweets.length}</SUserCardBodyText>
        </SUserCardBody>
      </SUserCard>
    </>
  );
};

const SUserCard = styled.div`
  width: 250px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: translateY(-10px);
  }
`;

const SUserCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #333;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const SUserCardImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const SUsername = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 18px;
`;

const SUserCardBody = styled.div`
  padding: 20px;
`;

const SUserCardBodyText = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

export default UserCard;
