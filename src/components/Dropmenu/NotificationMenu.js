import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotificationItem from '../../screens/user/notification/NotificationItem';
import { Typography } from '../widget';
import { NotificationCol, NotificationMenuBox, VeiwAllBox } from './Dropmenu.style';

function NotificationMenu(props) {
  const Noti = useSelector((state) => state.notifications.Notifications);
  return (
    props.isOpen && (
      <NotificationMenuBox>
        <NotificationCol>
          {Noti.map((item, index) => (
            <NotificationItem text={item.text} created_at={item.created_at} user={item.user} key={index} />
          ))}
        </NotificationCol>
        <VeiwAllBox>
          <Typography onClick={() => {props.setIsOpen(false)}} as={Link} to={'notifications'}>
            عرض الكل{' '}
          </Typography>
        </VeiwAllBox>
      </NotificationMenuBox>
    )
  );
}

export default NotificationMenu;
