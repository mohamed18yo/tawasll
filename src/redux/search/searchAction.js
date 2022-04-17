import { notify } from '../../utils/notify';
import { SEARCH_FIALD, SEARCH_START, SEARCH_SUCCESS } from './searchTypeConstant';

export const searchUser = (value, callback) => {
  return async (dispatch, getState, Api) => {
    try {
      dispatch({
        type: SEARCH_START,
      });
      const res = await Api.get(`/users/search/${value}`);
      dispatch({
        payload: res.data,
        type: SEARCH_SUCCESS,
      });
      callback?.();
    } catch (error) {
      notify('error', error?.response?.data?.message || error.message);
      dispatch({
        payload: error?.response?.data?.message || error.message,
        type: SEARCH_FIALD,
      });
    }
  };
};
