import React, {ChangeEvent, FC, useState} from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../button/SecondaryButton'
import { Tweet } from '../../../type/api/tweet';
import { useLoginUserInfo } from '../../../context/LoginUserInfo';
import { useUserInfoStore } from '../../../context/UserInfoStoreContext';
import { Post } from '../../../type/api/post';

type Props = {
    tweets: Array<Tweet>;
    setTweets: (array: Array<Tweet>) => void;
}

const InputTweet: FC<Props> = (props: Props) => {
  const { tweets, setTweets } = props;
  const [tweetText, setTweetText] = useState(""); 

  const loginUserInfoStore = useLoginUserInfo();
  const userInfo = useUserInfoStore();

  const onChangeText = (e: any) => {
    setTweetText(e.target.value);
  };

  const onClickTweet = () => {
    console.log(tweetText);
    const newTweet: Post = {
      userId: loginUserInfoStore.loginUserInfo.id,
      id: loginUserInfoStore.loginUserInfo.tweets.length + 1,
      title: "new Tweet",
      body: tweetText,
    }

    loginUserInfoStore.loginUserInfo.tweets.push(newTweet);
    const index = userInfo.allUserInfo.findIndex((user) => user === loginUserInfoStore.loginUserInfo);
    console.log("LoginUser index", index);

    const newAllUserInfo = [...userInfo.allUserInfo];
    newAllUserInfo[index] = {...loginUserInfoStore.loginUserInfo};

    userInfo.setAllUserInfo(newAllUserInfo);
    setTweetText("");
  }

  const onClickPost = () => {
    console.log(tweetText);
    const newTweet: Post = {
      userId: loginUserInfoStore.loginUserInfo.id,
      id: loginUserInfoStore.loginUserInfo.tweets.length + 1,
      title: "new Tweet",
      body: tweetText,
    }

    loginUserInfoStore.loginUserInfo.tweets.push(newTweet);
    const index = userInfo.allUserInfo.findIndex((user) => user === loginUserInfoStore.loginUserInfo);
    console.log("LoginUser index", index);

    const newAllUserInfo = [...userInfo.allUserInfo];
    newAllUserInfo[index] = {...loginUserInfoStore.loginUserInfo};

    userInfo.setAllUserInfo(newAllUserInfo);
    setTweetText("");
  }

  return (
    <TweetInputContainer>
        <TweetInputTextArea placeholder='いまどうしてる？' value={tweetText} onChange={onChangeText}/>
        <TweetInputActions>
            <div>{tweetText.length}/1000</div>
            <SecondaryButton onClick={onClickTweet}>ツイート</SecondaryButton>
            {/* <SecondaryButton onClick={onClickPost}>Post</SecondaryButton> */}
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