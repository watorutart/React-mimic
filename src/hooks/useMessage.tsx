import { useCallback } from "react";

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      alert(status + ":" + title);
    },
    []
  );

  return { showMessage };
};
