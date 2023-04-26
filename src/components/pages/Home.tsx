import { FC, memo, useEffect, useState } from "react";
import TweetCard from "../organisms/TweetCard";
import { useAllTweets } from "../../hooks/useAllTweets";
import InputTweet from "../atoms/input/InputTweet";
import { useUserInfoStore } from "../../context/UserInfoStoreContext";
import { useLoginUserInfo } from "../../context/LoginUserInfo";

const Home: FC = memo(() => {
  console.log("home");

  const { getTweets, loading, tweets, setTweets } = useAllTweets();
  useEffect(() => getTweets(), []);

  const loginUserInfoStore = useLoginUserInfo();
  console.log("home loginUserInfoStore", loginUserInfoStore);

  const userInfo = useUserInfoStore();
  console.log("home userInfo", userInfo);

  return (
    <div>
      <p>Home</p>
      <InputTweet tweets={tweets} setTweets={setTweets}/>
      {userInfo?.allUserInfo.map((user) => (
        user.tweets.map((tweet) => (
          <TweetCard img={user.img} name={user.username} body={tweet.body} key={tweet.id} />
        ))
      ))}
    </div>
  );
});

export default Home;
