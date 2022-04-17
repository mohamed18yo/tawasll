import {
  SEARCH_FIALD,
  SEARCH_START,
  SEARCH_SUCCESS,

} from './searchTypeConstant';

export const searchReducer = (
  initialState = {
    result: {
      _id: '',
      name: '',
      email: '',
      token: '',
      is_admin: '',
      gender: '',
      avatar: '',
      country: ''
    },
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
          user: action.payload,
      };
    case SEARCH_FIALD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };
    default:
      return initialState;
  }
};