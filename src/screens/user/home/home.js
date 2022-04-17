import { useEffect } from 'react';
import AddPost from '../../../components/addPost/addPost';
import Ads from '../../../components/ads/ads';
import Post from '../../../components/Post/post';
import UserCard from '../../../components/userCard/userCard';
import { AdsCol, IneerHome, PostsCol, UserCardCol } from './Home.style';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAction } from '../../../redux/post/postAction';
import { Boundary } from '../../../components/Boundary/Boundary';
import { SectioRole } from '../../../Global.style';
import { GetCurentUser } from '../../../redux/user/userAction';
function Home() {
  const dispatch = useDispatch();
  // const post = useSelector((state) => state.post);
  const { posts, error, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(GetCurentUser());
    dispatch(getPostsAction());
  }, [dispatch]);
  return (
    <SectioRole>
      <IneerHome>
        <UserCardCol>
          <UserCard />
          <Ads top={'25rem'} />
        </UserCardCol>
        <PostsCol>
          <AddPost />
          {isLoading ? <Boundary isLoading={isLoading} error={error} /> : posts.map((x) => <Post {...x} />)}
        </PostsCol>
        <AdsCol>
          <Ads top={'6.2rem'} />
        </AdsCol>
      </IneerHome>
    </SectioRole>
  );
}

export default Home;
