import {
  useState,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { UserInfo } from "../type/api/userinfo";

type LoginUserValue = {
  loginUserInfo: UserInfo;
  setLoginUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
};

export const LoginUserInfo = createContext<LoginUserValue>({
  loginUserInfo: { id: 0, name: "", username: "", password: "", img: "", tweets: [] },
  setLoginUserInfo: () => {},
});

type Props = {
  children: ReactNode;
};

export const LoginUserInfoProvider = (props: Props) => {
  const { children } = props;
  const loginUser: UserInfo = {
    id: 99,
    name: "Guest",
    username: "Guest",
    password: "guest99",
    img: `https://i.pravatar.cc/50?u=99`,
    tweets: [],
  };
  const [loginUserInfo, setLoginUserInfo] = useState<UserInfo>(loginUser);

  return (
    <LoginUserInfo.Provider value={{ loginUserInfo, setLoginUserInfo }}>
      {children}
    </LoginUserInfo.Provider>
  );
};

export const useLoginUserInfo = () => useContext(LoginUserInfo);
