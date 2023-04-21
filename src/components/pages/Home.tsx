import { FC, memo, useEffect, useState } from "react";
import TweetCard from "../organisms/TweetCard";
import { useAllTweets } from "../../hooks/useAllTweets";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import InputTweet from "../atoms/input/InputTweet";
import { Tweet } from "../../type/api/tweet";

const Home: FC = memo(() => {
  console.log("home");

  const { getTweets, tweets, loading, setTweets } = useAllTweets();
  useEffect(() => getTweets(), []);

  // 最新のTweetを一番上に持ってくるため逆順に並び変え;
  const rvsTweets = [...tweets].reverse();
  console.log(rvsTweets);

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
