import React, { FC, ReactNode } from "react";
import Header from "../components/organisms/layout/Header";

type Props = {
    children: ReactNode;
}

const HeaderLayout: FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <>
      <div>HeaderLayout</div>
      <Header />
      {children}
    </>
  );
};

export default HeaderLayout;
