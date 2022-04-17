import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GetFollowTheirAction } from '../../../redux/followers/followersAction';
import AllChat from './AllChat';
import { AllChatCol, ChatingCol, IneerChat, ReceiverDetailsCol } from './Chat.style';
import Chating from './Chating';
import ReceiverDetails from './receiverDetails';

function Chat() {
  const dispatch = useDispatch();
  const followers = useSelector((state) => state.followers);
  const isChat = useSelector((state) => state.chats.chatId);
  console.log("is",isChat);
  useEffect(() => {
    // dispatch(GetChatsAction())
    dispatch(GetFollowTheirAction());
  }, [dispatch]);
  return (
    <IneerChat>
      
       
        <AllChatCol IsChat={isChat}>
          <AllChat users={followers.followTheir} />{' '}
        </AllChatCol>
        <ChatingCol  IsChat={isChat}>
          <Chating />
        </ChatingCol>
     

      <ReceiverDetailsCol>
        <ReceiverDetails />
      </ReceiverDetailsCol>
    </IneerChat>
  );
}

export default Chat;
