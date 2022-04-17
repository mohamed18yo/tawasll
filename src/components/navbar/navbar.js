import { IneerNav, LogoBox, NavSection, NotificationBox, SearchBox, SearchInput, UserBox, UserImg } from './navbar.style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { Span } from '../../Global.style';
import { Img, Typography } from '../widget';
import { Link, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';
import NotificationMenu from '../Dropmenu/NotificationMenu';
import ProfileMenu from '../Dropmenu/ProfileMenu';
import { NotificationsIcon } from '../sidebar/svgs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetNotificationsAction } from '../../redux/notifications/notificationsAction';
import {  PostSearchAction } from '../../redux/post/postAction';
import { searchUser } from '../../redux/search/searchAction';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  let [value, setValue] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userDetailes.user);


  useEffect(() => {
    dispatch(GetNotificationsAction());
  }, [dispatch]);

  const handleSearch = (event) => {
    let val = event.currentTarget.value.trim();
    setValue(val);
    if (value) {
      dispatch(searchUser(value));
      dispatch(PostSearchAction(value , () => {
        navigate('/search');
      }));
      return;
    }
  };

  return (
    <>
      <NavSection>
        <IneerNav>
          
          <LogoBox>
            <Link to={'/'}>
              <Img alt="logo" src={'/logo3.png'} />
            </Link>
          </LogoBox>

          <SearchBox>
            <SearchIcon style={{ zIndex: '1', marginLeft: '-35px' }} />
            {/* */}
            <SearchInput onChange={handleSearch} />
          </SearchBox>

          <NotificationBox>
            <NotificationsIcon  onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <UserImg
              src={`https://tawsal.net/users/avatars/${user.avatar}`}
            />
            <Span onClick={() => setVisible(!visible)}>
              <Typography
                color="#fff"
                style={{ cursor: 'pointer', maxWidth: '120px',width:"auto",margin:"0 5px", textAlign: 'auto', fontSize: '12px' }}
              >
                {user?.name}
              </Typography>
              <ExpandMoreIcon />
            </Span>
          </NotificationBox>

          <UserBox>
            <Img
              onClick={() => setVisible(!visible)}
              style={{ height: '40px', width: '40px', borderRadius: '50%' }}
              src={`https://tawsal.net/users/avatars/${user.avatar}`}
            />
          </UserBox>
        <ProfileMenu user={user?.name} isOpen={visible} setIsOpen={setVisible} />
        <NotificationMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </IneerNav>
      </NavSection>
    </>
  );
}
export default Navbar;
