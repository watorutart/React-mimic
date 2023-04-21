import React, {ChangeEvent, FC} from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../button/SecondaryButton'

type Props = {
    inputText: string;
    setInputText: (str: string) => void;
    onClick: () => void;
}

const InputTweet: FC<Props> = (props: Props) => {
  const {inputText, setInputText, onClick } = props;

  const onChangeText = (e: any) => {
    setInputText(e.target.value);
  };

  return (
    <TweetInputContainer>
        <TweetInputTextArea placeholder='いまどうしてる？' value={inputText} onChange={onChangeText}/>
        <TweetInputActions>
            <div>0/280</div>
            <SecondaryButton onClick={onClick}>ツイート</SecondaryButton>
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