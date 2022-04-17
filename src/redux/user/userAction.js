import { notify } from '../../utils/notify';
import {
  GET_USER_FIALD,
  GET_USER_START,
  GET_USER_SUCCESS,
  LOGIN_FIALD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FIELD,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_FIALD,
  REGISTER_START,
  REGISTER_SUCCESS,
  REST_FIALD,
  REST_START,
  REST_SUCCESS,
  UPDATE_FIALD,
  UPDATE_START,
  UPDATE_SUCCESS,
} from './userTypeConstant';

export const LoginAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: LOGIN_START,
      });

      const res = await Api.post('/login', value);

      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('token', res.data.token);

      dispatch({
        payload: res.data,
        type: LOGIN_SUCCESS,
      });
      notify('success', 'Yours  are  login  right  now');

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: LOGIN_FIALD,
      });
    }
  };
};

export const SignupAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: REGISTER_START,
      });

      const res = await Api.post('/register', value);

      localStorage.setItem('user', JSON.stringify(res.data));
      localStorage.setItem('token', res.data.token);

      dispatch({
        payload: res.data,
        type: REGISTER_SUCCESS,
      });
      notify('success', 'Yours  are  create  account  right  now');

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: REGISTER_FIALD,
      });
    }
  };
};

export const logoutAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: LOGOUT_START,
      });

      const res = await Api.post('/logout');

      localStorage.removeItem('user');
      localStorage.removeItem('token');

      dispatch({
        payload: res.data,
        type: LOGOUT_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: LOGOUT_FIELD,
      });
    }
  };
};

export const RestAction = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: REST_START,
      });

      const res = await Api.post('/user/update-password', value);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      dispatch({
        payload: res.data,
        type: REST_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: REST_FIALD,
      });
    }
  };
};

export const UpdateUser = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: UPDATE_START,
      });
      let data = new FormData();
      data.append('name', value.firstName +" " + value.lastName);
      data.append('date_birth', value.birthday);
      data.append('avatar', value.avatar);
      data.append('gender', value.gender);
      data.append('country', value.country ||"palestine");
      const res = await Api.post('/user/store', data);

      const userLocal = localStorage.getItem("user") || "";
      const {
          token
      } = (userLocal && (JSON.parse(userLocal))) || {
          token: "",
      };
      let  newUser={
        token,
        user:res.data?.user

      }
      localStorage.setItem('user', JSON.stringify(newUser));

      dispatch({
        payload: newUser,
        type: UPDATE_SUCCESS,
      });

      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: UPDATE_FIALD,
      });
    }
  };
};


export const GetUserPyId = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_USER_START,
      });
      const res = await Api.get(`/user/${value}`);
      console.log("resProfile", res.data);
      dispatch({
        payload: res.data,
        type: GET_USER_SUCCESS,
      });

      
      
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_USER_FIALD,
      });
    }
  }}
export const GetCurentUser = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_USER_START,
      });
      const res = await Api.get(`/user`);
      console.log("resuser", res.data);
      dispatch({
        payload: res.data,
        type: GET_USER_SUCCESS,
      });

      
      
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_USER_FIALD,
      });
    }
  }}