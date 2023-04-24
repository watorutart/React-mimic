import React, { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { User } from "../type/api/user";
import axios from "axios";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [userLoading, setUserLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setUserLoading(true);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setUserLoading(false);
      });
  }, []);
  return { getUsers, userLoading, users, setUsers };
};
