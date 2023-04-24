import React, { useCallback, useEffect, useState } from "react";
import { useAllUsers } from "./useAllUsers";
import { useAllPosts } from "./useAllPosts";
import { useMessage } from "./useMessage";
import { User } from "../type/api/user";
import { Post } from "../type/api/post";
import { UserInfo } from "../type/api/userinfo";

const useAllUserInfo = () => {
  const { showMessage } = useMessage();
  const { getUsers, userLoading, users, setUsers } = useAllUsers();
  const { getPosts, postLoading, posts, setPosts } = useAllPosts();
  useEffect(() => getUsers(), []);
  useEffect(() => getPosts(), []);

  const [userInfoLoading, setUserInfoLoading] = useState(
    userLoading && postLoading
  );
  const [userInfo, setUserInfo] = useState<UserInfo[]>();

  const getUserInfo = useCallback(() => {
    console.log("func: getUserInfo", userInfoLoading);
    setUserInfoLoading(true);
    const newUserInfo: UserInfo[] = users.map((user: User) => {
      const postsByUser = posts.filter((post: Post) => post.userId === user.id);
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        password: user.phone,
        tweets: postsByUser,
      };
    });

    console.log("newUserInfo");
    console.log(newUserInfo);
    setUserInfo(newUserInfo);
    setUserInfoLoading(false);
  }, []);

  return { getUserInfo, userInfoLoading, userInfo, setUserInfo };
};

export default useAllUserInfo;
