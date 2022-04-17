import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AddPost from '../../../../components/addPost/addPost';
import MyPosts from '../../../../components/myPosts/myPosts';
import { TabPanel, useTabs } from '../../../../components/Tabs';
import { TabSelector } from '../../../../components/Tabs/TabSelector';
import { FlexRow } from '../../../../Global.style';
import { AddFollowAction } from '../../../../redux/followers/followersAction';
import { getMyPostAction } from '../../../../redux/post/postAction';
import People from '../../SearchResult/People/Peoples';
import { FlexCol, NavTab } from './style';

let Tabs = [
  {
    label: 'post',
    tile: 'المنشورات',
    component: <MyPosts />,
  },
  {
    label: 'follower',
    tile: 'المتابعون',
    component: <People typeAction="There" />,
  },
  {
    label: 'following',
    tile: 'المتابِعين',
    component: <People typeAction="ME" />,
  },
];

export function TabsProfile(props) {
  const [selectedTab, setSelectedTab] = useTabs(props.tabs.map((x) => x.label));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPostAction());

  }, [dispatch]);
  return (
    <>
      <FlexCol>
        <NavTab style={{borderRadius:"6px"}}>
          {props.tabs.map((x, index) => (
            <TabSelector isActive={selectedTab === x.label} onClick={() => setSelectedTab(x.label)}>
              {x.tile}
            </TabSelector>
          ))}
        </NavTab>
      </FlexCol>
      <FlexRow  style={{height:"2rem", background:"#f2f2f3"}}></FlexRow>
      <FlexRow style={{width:"100%", borderRadius:"6px"}}>
        {props.tabs.map((x, index) => (
          <TabPanel key={index} hidden={selectedTab !== x.label} children={x.component} />
        ))}
      </FlexRow>
    </>
  );
}

TabsProfile.defaultProps = {
  tabs: Tabs,
};
