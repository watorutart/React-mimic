import { useState, useContext, createContext, ReactNode, useEffect } from "react";
import { UserInfo } from "../type/api/userinfo";
import useAllUserInfo from "../hooks/useAllUserInfo";

export const UserInfoStore = createContext<UserInfo[] | undefined>([]);
// export const UserInfoStoreContext = createContext(null);

type Props = {
    children: ReactNode;
}

export const UserInfoProvider = (props: Props) => {
  const { children } = props;
  const { getUserInfo, userInfoLoading, userInfo, setUserInfo } = useAllUserInfo();
  useEffect(() => getUserInfo(), [getUserInfo]);
  const [userInfoStore, setUserInfoStore] = useState(userInfo);

  return (
    <UserInfoStore.Provider value={userInfo}>
      {/* <UserInfoStoreContext.Provider value={setUserInfo}> */}
        {children}
      {/* </UserInfoStoreContext.Provider> */}
    </UserInfoStore.Provider>
  );
};

export const useUserInfoStore = () => useContext(UserInfoStore);

// export const useUpdateTheme = () => useContext(UserInfoStoreContext);
