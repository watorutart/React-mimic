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
//   console.log(users);
//   console.log(posts);

  const [userInfoLoading, setUserInfoLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);

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
        img: `https://i.pravatar.cc/50?u=${user.id}`,
        tweets: postsByUser,
      };
    });

    console.log("newUserInfo", newUserInfo);
    setUserInfo(newUserInfo);
    if (userInfo !== undefined && userInfo.length !== 0) {
        setUserInfoLoading(false);
    }
  }, [users, posts]);

  return { getUserInfo, userInfoLoading, userInfo, setUserInfo };
};

export default useAllUserInfo;
