import { FC, memo, useEffect, useState } from "react";
import TweetCard from "../organisms/TweetCard";
import { useAllTweets } from "../../hooks/useAllTweets";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import InputTweet from "../atoms/input/InputTweet";
import { Tweet } from "../../type/api/tweet";
import useAllUserInfo from "../../hooks/useAllUserInfo";

const Home: FC = memo(() => {
  console.log("home");

  const { getTweets, loading, tweets, setTweets } = useAllTweets();
  useEffect(() => getTweets(), []);

  const { getUserInfo, userInfoLoading, userInfo, setUserInfo } = useAllUserInfo();
  useEffect(() => getUserInfo(), []);
  console.log("userInfo", userInfo);

  // 最新のTweetを一番上に持ってくるため逆順に並び変え;
  const rvsTweets = [...tweets].reverse();
  // console.log(rvsTweets);

  return (
    <div>
      <p>Home</p>
      <InputTweet tweets={tweets} setTweets={setTweets}/>
      {rvsTweets.map((tweet)=> (
        <div key={tweet.id}>
          <TweetCard name={tweet.name} body={tweet.body}/>
        </div>
      ))}
    </div>
  );
});

export default Home;
