import { FC, memo, useEffect } from "react";
import TweetCard from "../organisms/TweetCard";
import { useAllTweets } from "../../hooks/useAllTweets";

const Home: FC = memo(() => {
  console.log("home");

  const { getTweets, tweets, loading } = useAllTweets();
  useEffect(() => getTweets(), []);
  console.log(tweets);

  return (
    <div>
      <p>Home</p>
      {tweets.map((tweet)=> (
        <div key={tweet.id}>
          <TweetCard name={tweet.name} body={tweet.body}/>
        </div>
      ))}
    </div>
  );
});

export default Home;
