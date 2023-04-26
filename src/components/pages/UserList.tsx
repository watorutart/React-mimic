import React from "react";
import styled from "styled-components";
import { useUserInfoStore } from "../../context/UserInfoStoreContext";
import UserCard from "../organisms/UserCard";

const UserList = () => {
  const userInfo = useUserInfoStore();
  return (
    <>
      <SUserList>
        {userInfo?.allUserInfo.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserList>
    </>
  );
};

const SUserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default UserList;
