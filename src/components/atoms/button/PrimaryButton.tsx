import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = (props: Props) => {
  const { children, onClick  } = props;
  return <button onClick={onClick}>{children}</button>;
};
