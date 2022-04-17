import { notify } from '../../utils/notify';
import { CLICK_NOTIFICATION_FIELD, CLICK_NOTIFICATION_START, CLICK_NOTIFICATION_SUCCESS, GET_NOTIFICATIONS_FIELD, GET_NOTIFICATIONS_START, GET_NOTIFICATIONS_SUCCESS } from './notificationsTypeConstant';

export const GetNotificationsAction = (callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: GET_NOTIFICATIONS_START,
      });

      const res = await Api.get('/notifications');
      dispatch({
        payload: res.data,
        type:  GET_NOTIFICATIONS_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: GET_NOTIFICATIONS_FIELD,
      });
    }
  };
};

export const ClickNotificationAction = (idNotification,callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: CLICK_NOTIFICATION_START,
      });

      const res = await Api.get(`/notification/click/${idNotification}`);
      dispatch({
        payload: res.data,
        type: CLICK_NOTIFICATION_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);

      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: CLICK_NOTIFICATION_FIELD,
      });
    }
  };
};

