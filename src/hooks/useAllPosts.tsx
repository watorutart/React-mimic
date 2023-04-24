import React, { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { Post } from "../type/api/post";
import axios from "axios";

export const useAllPosts = () => {
  const { showMessage } = useMessage();
  const [postLoading, setPostLoading] = useState(false);
  const [posts, setPosts] = useState<Array<Post>>([]);

  const getPosts = useCallback(() => {
    setPostLoading(true);

    axios
      .get<Array<Post>>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch(() => {
        showMessage({ title: "Post取得に失敗しました", status: "error" });
      })
      .finally(() => {
        setPostLoading(false);
      });
  }, []);
  return { getPosts, postLoading, posts, setPosts };
};
