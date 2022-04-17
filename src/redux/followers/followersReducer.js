import { GET_FOLLOW_THEIR_FIELD, GET_FOLLOW_THEIR_START, GET_FOLLOW_THEIR_SUCCESS, GET_MY_FOLLOWERS_FIELD, GET_MY_FOLLOWERS_START, GET_MY_FOLLOWERS_SUCCESS } from './followersTypeConstant';

export const followersReducer = (
  initialState = {
    followers: [],
    followTheir: [],
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case GET_MY_FOLLOWERS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_MY_FOLLOWERS_SUCCESS:
      return {
        ...initialState,
        followers: action.payload,
        isLoading: false,
      };
    case GET_MY_FOLLOWERS_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    case GET_FOLLOW_THEIR_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FOLLOW_THEIR_SUCCESS:
      return {
        ...initialState,
        followTheir: action.payload,
        isLoading: false,
      };
    case GET_FOLLOW_THEIR_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    default:
      return initialState;
  }
};
