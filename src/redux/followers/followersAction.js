import { notify } from '../../utils/notify';
import { GET_ADD_FOLLOW_FIELD, GET_ADD_FOLLOW_START, GET_ADD_FOLLOW_SUCCESS, GET_FOLLOW_THEIR_FIELD, GET_FOLLOW_THEIR_START, GET_FOLLOW_THEIR_SUCCESS, GET_MY_FOLLOWERS_FIELD, GET_MY_FOLLOWERS_START, GET_MY_FOLLOWERS_SUCCESS, UN_FOLLOW_FIELD, UN_FOLLOW_START, UN_FOLLOW_SUCCESS } from './followersTypeConstant';


export const GetFollowMeAction = (callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_MY_FOLLOWERS_START,
      });

      const res = await Api.get('/user/follow-me');
      dispatch({
        payload: res.data,
        type: GET_MY_FOLLOWERS_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_MY_FOLLOWERS_FIELD,
      });
    }
  };
};

export const GetFollowTheirAction = (callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_FOLLOW_THEIR_START,
      });

      const res = await Api.get('/user/follow-their');
      dispatch({
        payload: res.data,
        type: GET_FOLLOW_THEIR_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_FOLLOW_THEIR_FIELD,
      });
    }
  };
};


export const AddFollowAction = (userId, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_ADD_FOLLOW_START,
      });

      const res = await Api.post(`/user/follow/${userId}`);
      dispatch({
        payload: res.data,
        type: GET_ADD_FOLLOW_SUCCESS,
      });
      notify("success","تمت الاضافة الى المتابعين   ")
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_ADD_FOLLOW_FIELD,
      });
    }
  };
};

export const UnFollowAction = (userId, callback) => {
    return async (dispatch, getState, Api) => {
      try {
        dispatch({
          type: UN_FOLLOW_START,
        });
  
        const res = await Api.delete(`/user/follow/${userId}`);
        const oldState=getState().followers.followers
        const  dataFilter=oldState?.filter(({user_follower})=>user_follower.id!==userId)

        dispatch({
          payload: dataFilter,
          type: UN_FOLLOW_SUCCESS,
        });
        // notify("success","تمت الازالة من المتابعين بنجاح ")

        callback?.();
      } catch (error) {
        notify('error', error?.response?.data?.message || error.message);
  
        dispatch({
          payload: error?.response?.data?.message || error.message,
          type: UN_FOLLOW_FIELD,
        });
      }
    };
  };
