import {
  BorderBottomBox,
  BorderTopBox,
  IconBox,
  ItemsBox,
  SideBarSection,
  SideBarSectionMobil,
  SideBarSectionMobilIneer,
} from './sidebar.style';
import { useNavigate, useLocation } from 'react-router-dom';
import { CategoryIcon, Home, LogoutIcon, MesssageIcon, NotificationsIcon, SearchIcon } from './svgs';
function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <SideBarSection>
        <ItemsBox>
          <BorderBottomBox>
            <CategoryIcon />
          </BorderBottomBox>
          <IconBox>
            <Home onClick={() => navigate('/')} isActive={pathname === '/'} />
          </IconBox>
          <IconBox>
            <MesssageIcon isActive={pathname === '/message'} onClick={() => navigate('/message')} />
          </IconBox>
        </ItemsBox>
        <BorderTopBox>
          <LogoutIcon onClick={() => navigate('/auth/login')} />
        </BorderTopBox>
      </SideBarSection>
      <SideBarSectionMobil>
        <SideBarSectionMobilIneer>
          <Home onClick={() => navigate('/')} isActive={pathname === '/'} />
          <MesssageIcon isActive={pathname === '/message'} onClick={() => navigate('/message')} />
          <SearchIcon onClick={() => navigate('/search')} isActive={pathname === '/search'} />
          <NotificationsIcon onClick={() => navigate('/notifications')} isActive={pathname === '/notifications'} />
        </SideBarSectionMobilIneer>
      </SideBarSectionMobil>
    </>
  );
}

export default Sidebar;
