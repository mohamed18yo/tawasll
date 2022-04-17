import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Img } from '../../Global.style';
import { logoutAction } from '../../redux/user/userAction';
import { LogoutIcon, SettingsIcon } from '../sidebar/svgs';
import { Typography } from '../widget';
import { ProfileMenuBox } from './Dropmenu.style';

function ProfileMenu(props) {
  //   const [visibles, setVisibles] = useState(props.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userDetailes.user);
  const handleLogout = () => {
    navigate('/auth/login');
    dispatch(logoutAction(), () => {});
  };

  return (
    props.isOpen && (
      <ProfileMenuBox>
        <Typography fontSize="14px">الملف الشخصي </Typography>
        <hr color="#dbdbdb" />
        <Typography
          onClick={() => {
           props.setIsOpen(false)
          }}
          style={{ display: 'flex', cursor: 'pointer', width: '120px' }}
          as={Link}
          to={'/profile'}
          fontSize="10px"
        >
          <Img
            style={{ height: '30px', width: '30px', marginLeft: '.5rem', borderRadius: '50%' }}
            src={`https://api.tawsal.net/users/avatars/${user.avatar}`}
          />{' '}
          {props.user}
        </Typography>
        <Typography
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={() => {
            props.setIsOpen(false)
          }}
          as={Link}
          to={'/profileSetting'}
          fontSize="12px"
        >
          <SettingsIcon style={{ marginLeft: '.5rem' }} /> الاعدادات{' '}
        </Typography>
        <hr color="#dbdbdb" />
        <Typography onClick={handleLogout} style={{ display: 'flex', cursor: 'pointer' }} fontSize="12px">
          <LogoutIcon style={{ marginLeft: '.5rem' }} color="#000" />
          تسجيل الخروج{' '}
        </Typography>
      </ProfileMenuBox>
    )
  );
}

export default ProfileMenu;
