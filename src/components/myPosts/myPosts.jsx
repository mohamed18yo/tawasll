import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexCol } from '../../Global.style';
import { getPostsAction } from '../../redux/post/postAction';
import AddPost from '../addPost/addPost';
import { Boundary } from '../Boundary/Boundary';
import Post from '../postProfile/post';
// import Post from '../Post/post';
import { MyPostsSection } from './myPosts.style';


function MyPosts() {
  const { isLoading, error, userProfile:{posts} } = useSelector((state) => state.userDetailes);

  return (
    <MyPostsSection>
      <AddPost />
      <FlexCol style={{ marginTop: '20px' }}>
        <Boundary isLoading={isLoading} error={error}>
          {posts?.map((x, index) => (
            <Post key={index} {...x} />
          ))}
        </Boundary>
      </FlexCol>
    </MyPostsSection>
  );
}
export default MyPosts;
