import { PostUserImg } from '../../../components/Post/post.sytle';
import { Typography } from '../../../components/widget';
import { FlexCol, Img } from '../../../Global.style';
import { handleFoematTime } from '../../../utils/time';
import { NotificationItemBox } from './Notification.style';

function NotificationItem({user,text,created_at}) {
  return (
    <NotificationItemBox>
        <PostUserImg width={"40px"}  src={`https://api.tawsal.net/users/avatars/${user?.avatar}`} alt={user?.name}/>
      <FlexCol style={{marginRight:"1rem"}}>
        <Typography fontSize="13px">{text}</Typography>
        <Typography fontSize="10px" color='#D0D6E0'>{handleFoematTime(created_at)} &nbsp; </Typography>
      </FlexCol>
    </NotificationItemBox>
  );
}

export default NotificationItem;
