import { notify } from '../../utils/notify';
import {
  ADD_COMMENT_FIELD,
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_LIKE_FIELD,
  ADD_LIKE_SUCCESS,
  CREATE_POST_FIELD,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  GET_MY_POST_FIELD,
  GET_MY_POST_START,
  GET_MY_POST_SUCCESS,
  GET_POST_FIELD,
  GET_POST_START,
  GET_POST_SUCCESS,
  SEARCHC_FIELD,
  SEARCHC_START,
  SEARCHC_SUCCESS,
  UN_LIKE_START,
  UN_LIKE_SUCCESS,
  UN_LIKE_FIELD,
  UPDTE_POST_SUCCESS,
} from './postTypeConstant';

export const PostSearchAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: SEARCHC_START,
      });

      const res = await Api.get(`/posts/search/${value}`);
      dispatch({
        payload: res.data,
        type: SEARCHC_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: SEARCHC_FIELD,
      });
    }
  };
};

export const CreatePostAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: CREATE_POST_START,
      });

      let data = new FormData();
      data.append('text', value.text);
      data.append('medias[]', value.medias);

      const res = await Api.post('/posts', data);
      dispatch({
        payload: res.data,
        type: CREATE_POST_SUCCESS,
      });
      const PostCreated = { ...res.data.post, comments: [] };
      dispatch({
        payload: PostCreated,
        type: UPDTE_POST_SUCCESS,
      });


      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: CREATE_POST_FIELD,
      });
    }
  };
};
export const sharePostAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: CREATE_POST_START,
      });
      console.log('value', value);
      const currntUser = getState().userDetailes?.user.user;
      const postShared = {
        ...value,
        user: {...currntUser},
      };

      console.log("postSha", postShared);
      const res = await Api.post(`/post/${value.id}/share`, value.text);
      console.log('resShare', res.data);
      dispatch({
        payload: res.data.share,
        type: CREATE_POST_SUCCESS,
      });
      // const PostCreated = { ...res.data.share, comments: [] };
      dispatch({
        payload: postShared,
        type: UPDTE_POST_SUCCESS,
      });


      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: CREATE_POST_FIELD,
      });
    }
  };
};

export const PostsAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: SEARCHC_START,
      });
      const res = await Api.post('/post', value);

      dispatch({
        payload: res.data,
        type: SEARCHC_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: SEARCHC_FIELD,
      });
    }
  };
};

export const getMyPostAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_MY_POST_START,
      });

      const res = await Api.get('/posts/me');
      // console.lo
      dispatch({
        payload: res.data,
        type: GET_MY_POST_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_MY_POST_FIELD,
      });
    }
  };
};

export const getPostsAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_POST_START,
      });

      const res = await Api.get('/posts');
      dispatch({
        payload: res.data,
        type: GET_POST_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_POST_FIELD,
      });
    }
  };
};
export const getPostByID = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: CREATE_POST_START,
      });

    
      const res = await Api.get(`/posts/${value}`);


      dispatch({
        payload: res.data,
        type: CREATE_POST_SUCCESS,
      });

      
      
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: CREATE_POST_FIELD,
      });
    }
  }}

// Add Reaction to Posts

// add comments action

export const AddCommentsAction = (value, postId, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: ADD_COMMENT_START,
      });

      const res = await Api.post(`/post/${postId}/comment`, { text: value });
      dispatch({
        payload: res.data,
        type: ADD_COMMENT_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: ADD_COMMENT_FIELD,
      });
    }
  };
};
// add likes action

export const AddLikesAction = (postId, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: ADD_LIKE_SUCCESS,
      });

      const res = await Api.post(`/post/${postId}/like`);
      dispatch({
        payload: res.data,
        type: ADD_LIKE_SUCCESS,
      });


      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: ADD_LIKE_FIELD,
      });
    }
  };
};
// Un likes action

export const UnLikesAction = (postId, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: UN_LIKE_START,
      });

      const res = await Api.delete(`/post/${postId}/like`);
      dispatch({
        payload: res.data,
        type: UN_LIKE_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: UN_LIKE_FIELD,
      });
    }
  };
};
