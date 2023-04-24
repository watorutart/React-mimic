import { useCallback, useState } from "react";
import axios from "axios";
import { UserInfo } from "../type/api/userinfo";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const { showMessage } = useMessage();

//   const login = useCallback(
//     (username: string, password: string) => {
//     [ showMessage ]
//     }
//   );
  return { loading };
};