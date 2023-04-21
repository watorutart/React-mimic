import React, {ChangeEvent, FC, useState} from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../button/SecondaryButton'
import { Tweet } from '../../../type/api/tweet';

type Props = {
    tweets: Array<Tweet>;
    setTweets: (array: Array<Tweet>) => void;
}

const InputTweet: FC<Props> = (props: Props) => {
  const { tweets, setTweets } = props;
  const [tweetText, setTweetText] = useState(""); 

  const onChangeText = (e: any) => {
    setTweetText(e.target.value);
  };

  const onClickTweet = () => {
    console.log(tweetText);
    let newTweet: Tweet = {
      postId: 99,
      id: tweets.length + 1,
      name: "Guest",
      body: tweetText,
      email: "guest@xxx.com",
    }

    setTweets([...tweets, newTweet]);
    setTweetText("");
  }

  return (
    <TweetInputContainer>
        <TweetInputTextArea placeholder='いまどうしてる？' value={tweetText} onChange={onChangeText}/>
        <TweetInputActions>
            <div>{tweetText.length}/1000</div>
            <SecondaryButton onClick={onClickTweet}>ツイート</SecondaryButton>
        </TweetInputActions>
    </TweetInputContainer>
  )
}

const TweetInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 10px solid #ddd;
`

const TweetInputTextArea = styled.textarea`
    font-size: 16px;
    border: none;
    resize: none;
    &:focus {
        outline: none;
    }
`

const TweetInputActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

export default InputTweet