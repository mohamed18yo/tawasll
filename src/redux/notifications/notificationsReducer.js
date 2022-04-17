import { CLICK_NOTIFICATION_FIELD, CLICK_NOTIFICATION_START, CLICK_NOTIFICATION_SUCCESS, GET_NOTIFICATIONS_FIELD, GET_NOTIFICATIONS_START, GET_NOTIFICATIONS_SUCCESS } from './notificationsTypeConstant';

export const notificationsReducer = (
  initialState = {
    Notifications: [],
    ClickNotifications: [],
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_NOTIFICATIONS_SUCCESS:
      return {
        ...initialState,
        Notifications: action.payload,
        isLoading: false,
      };
    case GET_NOTIFICATIONS_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    case  CLICK_NOTIFICATION_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case  CLICK_NOTIFICATION_SUCCESS:
      return {
        ...initialState,
        ClickNotifications: action.payload,
        isLoading: false,
      };
    case  CLICK_NOTIFICATION_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
