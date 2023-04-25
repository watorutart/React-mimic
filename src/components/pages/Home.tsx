import { FC, memo, useEffect, useState } from "react";
import TweetCard from "../organisms/TweetCard";
import { useAllTweets } from "../../hooks/useAllTweets";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import InputTweet from "../atoms/input/InputTweet";
import { Tweet } from "../../type/api/tweet";
import useAllUserInfo from "../../hooks/useAllUserInfo";
import { useUserInfoStore } from "../../context/UserInfoStoreContext";

const Home: FC = memo(() => {
  console.log("home");

  const { getTweets, loading, tweets, setTweets } = useAllTweets();
  useEffect(() => getTweets(), []);

  const userInfo = useUserInfoStore();
  console.log("home userInfo", userInfo);

  return (
    <div>
      <p>Home</p>
      <InputTweet tweets={tweets} setTweets={setTweets}/>
      {userInfo?.map((user, index) => (
        user.tweets.map((tweet) => (
          <TweetCard name={user.username} body={tweet.body} key={tweet.id} />
        ))
      ))}
    </div>
  );
});

export default Home;
