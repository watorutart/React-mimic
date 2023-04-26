import { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { UserInfo } from "../type/api/userinfo";
import useAllUserInfo from "../hooks/useAllUserInfo";

type AllUserValue = {
  allUserInfo: UserInfo[];
  setAllUserInfo: React.Dispatch<React.SetStateAction<UserInfo[]>>;
};

export const UserInfoStore = createContext<AllUserValue>({
  allUserInfo: [], 
  setAllUserInfo: () => {}
});

type Props = {
    children: ReactNode;
}

export const UserInfoProvider = (props: Props) => {
  const { children } = props;
  const { getUserInfo, userInfoLoading, userInfo, setUserInfo } = useAllUserInfo();
  useEffect(() => getUserInfo(), [getUserInfo]);
  // const [allUserInfo, setAllUserInfo] = useState<UserInfo[]>([...userInfo]);

  return (
    // <UserInfoStore.Provider value={{allUserInfo, setAllUserInfo}}>
    <UserInfoStore.Provider value={{allUserInfo: userInfo, setAllUserInfo: setUserInfo}}>
        {children}
    </UserInfoStore.Provider>
  );
};

export const useUserInfoStore = () => useContext(UserInfoStore)
