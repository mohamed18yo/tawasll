import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Boundary } from '../../../../components/Boundary/Boundary';
import Post from '../../../../components/Post/post'
import { getMyPostAction } from '../../../../redux/post/postAction';


export const PostMe = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyPostAction());
  }, [dispatch]);
  return (<>

  </>
  )
}


export const PostResult = () => {
  const { isLoading, postSearch, error } = useSelector((state) => state.post);
  return (
    <Boundary error={error} isLoading={isLoading}>
      <>
      {postSearch?.map((item) => <Post key={item?.id} {...item} />)}
      </>
    </Boundary>
  )
}













