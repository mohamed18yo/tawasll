import { useSelector } from 'react-redux';
import Ads from '../../../components/ads/ads';
import UserCard from '../../../components/userCard/userCard';
import { Typography } from '../../../components/widget';
import { AdsCol,  UserCardCol } from '../home/Home.style';
import { IneerNotification, NotiFicationCol } from './Notification.style';
import NotificationItem from './NotificationItem';

function Notification() {
  const Noti = useSelector((state) => state.notifications.Notifications);

  return (
    <IneerNotification>
      <UserCardCol>
        <UserCard />
        <Ads top={'26rem'} />
      </UserCardCol>
      <NotiFicationCol>
        <Typography fontSize="20px" style={{ marginBottom: '1rem' }}>كل الاشعارات </Typography>
        <hr color="#dbdbdb" style={{ height: '.3px' }} />
        {Noti.map((item, index) => (
          <NotificationItem  text={item.text} created_at={item.created_at} user={item.user} key={index} />
        ))}
      </NotiFicationCol>
      <AdsCol>
        <Ads top={'6rem'} />
      </AdsCol>
    </IneerNotification>
  );
}

export default Notification;
