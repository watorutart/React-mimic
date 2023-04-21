import React, { useCallback, useState } from 'react'
import { useMessage } from './useMessage';
import { Tweet } from '../type/api/tweet';
import axios from 'axios';

export const useAllTweets = () => {
    const { showMessage } = useMessage();
    const [loading, setLoading] = useState(false);
    const [tweets, setTweets] = useState<Array<Tweet>>([]);
  
    const getTweets = useCallback(() => {
      setLoading(true);
  
      axios
        .get<Array<Tweet>>("https://jsonplaceholder.typicode.com/comments")
        .then((res) => setTweets(res.data))
        .catch(() => {
          showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
    return { getTweets, loading, tweets, setTweets };
}
