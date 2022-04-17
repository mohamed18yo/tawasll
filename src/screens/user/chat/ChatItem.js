import { useDispatch } from 'react-redux';
import { CustomTypo } from '../../../components/userCard/userCard.style';
import { FlexCol, FlexRow, Img, Span } from '../../../Global.style';
import { GetChatMessagesAction } from '../../../redux/chat/chatAction';
import { ChatItemBox, ChatUser, MsgContent } from './Chat.style';

function ChatItem(props) {
  const dispatch = useDispatch();
  return (
    <ChatItemBox>
      <FlexRow
        onClick={() => {
          dispatch(GetChatMessagesAction(props.userDetails.id));
        }}
        style={{ width: '70%' }}
      >
        <Img width={'50px'} style={{ height: '50px',borderRadius:"50%", margin: '0 0 0 1rem' }} src={`https://api.tawsal.net/users/avatars/${props.userDetails.avatar}`} />
        <FlexCol style={{ width: '50%' }}>
          <ChatUser>{props.userDetails?.name} </ChatUser>
          <MsgContent IsNew={props.IsNew}>مرحبا !</MsgContent>
        </FlexCol>
      </FlexRow>

      <FlexCol style={{ alignItems: 'center', width: '30%' }}>
        <CustomTypo style={{ fontFamily: 'apple' }} fontSize="12px" color="#D0D6E0">
          3 دقائق
        </CustomTypo>
        {props.IsNew && (
          <Span
            style={{
              background: '#24AAE1',
              color: '#fff',
              borderRadius: '50%',
              width: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '.5rem',
              fontSize: '12px',
            }}
          >
            {props.Count}
          </Span>
        )}
      </FlexCol>
    </ChatItemBox>
  );
}

export default ChatItem;
