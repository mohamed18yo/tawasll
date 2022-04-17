import {
  FlexColFirst,
  FlexColSecond,
  ProfileShadow,
  CardUserProfile,
  Title,
  WarperHashtag,
  IneerProfile,
} from './style';
import SettingsIcon from '@material-ui/icons/Settings';
// import UserCard from '../../../components/userCard/userCard';
import { Divider } from '../../../components/widget';

import { Hashtag } from '../../../components/hastag';
import { Activity } from '../../../components/Activity';
import { TabsProfile } from './Tabs/Profile';
import { FlexCol } from '../../../Global.style';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
  AddFollowAction,
  GetFollowMeAction,
  GetFollowTheirAction,
  UnFollowAction,
} from '../../../redux/followers/followersAction';
import { GetUserPyId } from '../../../redux/user/userAction';
import { Boundary } from '../../../components/Boundary/Boundary';
import UserCard from '../../../components/userCardForProfile/userCard';
function Profile() {
  const navigator= useNavigate()
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetFollowMeAction(() => {}));
  //   dispatch(GetFollowTheirAction(() => {}));

  // }, [dispatch]);
  const {
    user: { user },
    isLoading,
    error,
    userProfile,
  } = useSelector((state) => state.userDetailes);

  const { id } = useParams();

  console.log('id', userProfile);
  useEffect(() => {
    // if (!id) return;
    dispatch(GetUserPyId(id || user.id));
  }, [dispatch, id]);
  return (
    <Boundary error={error} isLoading={isLoading}>
      <IneerProfile>
        <FlexColFirst>
          <ProfileShadow>
            <SettingsIcon onClick={()=>{navigator("/profileSetting")}}/>
            <CardUserProfile>
              <UserCard {...userProfile} paddingTop="30px" height="260px" />
            </CardUserProfile>
          </ProfileShadow>
          <FlexCol style={{ borderRadius: '6px' }}>
            <TabsProfile style={{ borderRadius: '6px', width: '100%' }} />
          </FlexCol>
        </FlexColFirst>

        {/* Left side  */}
        <FlexColSecond>
          <WarperHashtag>
            <Title># هاشتاجات_استخدمتها </Title>
            <Divider />
            {Array(3)
              .fill(0)
              .map((x, index) => (
                <Hashtag {...x} index={index} />
              ))}
          </WarperHashtag>
          <WarperHashtag>
            <Title>نشاطك </Title>
            <Divider />
            {Array(3)
              .fill(0)
              .map((x, index) => (
                <Activity {...x} index={index} />
              ))}
          </WarperHashtag>
        </FlexColSecond>
      </IneerProfile>
    </Boundary>
  );
}

export default Profile;
