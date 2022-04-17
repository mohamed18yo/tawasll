import { Typography } from '../../../components/widget';
import { ChatingBox, ChatingHeader, ChatingMessages, InputMsg, WritMsgBox } from './Chat.style';
import MoodIcon from '@material-ui/icons/Mood';
import SendIcon from '@material-ui/icons/Send';
import MessageItems from './MessageItems';
import { useDispatch, useSelector } from 'react-redux';
import { createRef, useEffect, useRef, useState } from 'react';
import { SendMessageAction } from '../../../redux/chat/chatAction';
import { handleFoematTime } from '../../../utils/time';

function Chating() {
  const dispatch = useDispatch();
  let [msgSend, msgSendSet] = useState('');
  const state = useSelector((state) => state);
  const messages = state.chats.chatMessages;
  const resever = state.chats.resever;

  const { id, avatar } = state.userDetailes.user.user;
  const chatId = state.chats.chatId;
  const messageRef = useRef();
  useEffect(() => {
    hn()
  },[])
   
  const hn=()=>{
    if (messageRef.current) {
      console.log("mc",messageRef.current);
      messageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  }

  
  return (
    <ChatingBox>
      <ChatingHeader>
        <Typography style={{ margin: '0' }}>{resever.name} </Typography>
      </ChatingHeader>
      {/* here we went to add secroll end */}

      <ChatingMessages  ref={messageRef}>
        {messages.map((ms) => (
          <MessageItems
            Time={handleFoematTime(ms?.created_at)}
            key={ms.id}
            theMsg={ms.text}
            IsMyMsg={ms.sender_id === id}
            Img={
              ms.sender_id === id
                ? `https://tawsal.net/users/avatars/${avatar}`
                : `https://tawsal.net/users/avatars/${resever.avatar}`
            }
          />
        ))}
      </ChatingMessages>
      <WritMsgBox>
        <MoodIcon />
        <InputMsg
          value={msgSend}
          onChange={(event) => {
            msgSendSet(event.target.value);
          }}
          placeholder="اكتب رسالتك هنا"
        />
        <SendIcon
          onClick={() => {
            msgSendSet('');
            if (msgSend) {
              dispatch(SendMessageAction(chatId, msgSend));
            }
          }}
          style={{ transform: 'rotate(180deg)', cursor: 'pointer', color: '#63c2e8' }}
        />
      </WritMsgBox>
    </ChatingBox>
  );
}

export default Chating;
