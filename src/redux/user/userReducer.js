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
  UPDATE_SUCCESS
} from './userTypeConstant';

export const userReducer = (
  initialState = {
    user: {
      _id: '',
      name: '',
      email: '',
      token: '',
      is_admin: '',
      gender: '',
      avatar: '',
      country: ''
    },
    userProfile:{},
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
          user: action.payload,
      };
    case LOGIN_FIALD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };



    case REGISTER_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
          user: action.payload,
      };
    case REGISTER_FIALD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };


    case UPDATE_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        user: action.payload,
      };
    case UPDATE_FIALD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };

      

      case REST_START:
        return {
          ...initialState,
          isLoading: true,
        };
      case REST_SUCCESS:
        return {
          ...initialState,
          isLoading: false,
            user: action.payload,
        };
      case REST_FIALD:
        return {
          ...initialState,
          isLoading: false,
            error: action.payload,
        };
  


    case LOGOUT_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
      };
    case LOGOUT_FIELD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };

      // Get User For Profile Page 
    case GET_USER_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        userProfile: action.payload
      };
    case GET_USER_FIALD:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };



    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
          error: action.payload,
      };
    default:
      return initialState;
  }
};