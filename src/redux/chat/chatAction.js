import { notify } from '../../utils/notify';
import {
  GET_MY_CHATS_FIELD,
  GET_MY_CHATS_START,
  GET_MY_CHATS_SUCCESS,
  GET_USER_CHAT_FIELD,
  GET_USER_CHAT_START,
  GET_USER_CHAT_SUCCESS,
  SEND_MESSAGE_FIELD,
  SEND_MESSAGE_START,
  SEND_MESSAGE_SUCCESS,
  UPDATE_MESSAGES_SUCCESS,
  UPDATE_RESEVER_SUCCESS,
} from './chatTypeConstant';

// get chat between users action
export const GetChatsAction = (callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_MY_CHATS_START,
      });

      const res = await Api.get('/messages');
      dispatch({
        payload: res.data,
        type: GET_MY_CHATS_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_MY_CHATS_FIELD,
      });
    }
  };
};

// Get chat messages action
export const GetChatMessagesAction = (chatId, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_USER_CHAT_START,
      });

      const res = await Api.get(`/messages/${chatId}`);
      const resResever = await Api.get(`/user/${chatId}`);

      const data= {chatId: chatId, messages: res.data}
      dispatch({
        payload: data,
        type: GET_USER_CHAT_SUCCESS,
      });
      dispatch({
        payload: resResever.data,
        type: UPDATE_RESEVER_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_USER_CHAT_FIELD,
      });
    }
  };
};

// send messages action
export const SendMessageAction = (chatId, value, callback) => {
  return async (dispatch, getState, Api) => {
    const state = getState();
    let msg={
      text: value,
      sender_id: state.userDetailes.user.user.id,
    }
    try {
      dispatch({
        type: SEND_MESSAGE_START,
      });
    
      const res = await Api.post(`/messages/${chatId}`, {text: value});
      dispatch({
        payload: res.data,
        type: SEND_MESSAGE_SUCCESS,
      });
      dispatch({
        payload: msg,
        type: UPDATE_MESSAGES_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: SEND_MESSAGE_FIELD,
      });
    }
  };
};
