import {
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
  UPDTE_POST_SUCCESS,
} from './postTypeConstant';

export const PostReducer = (
  initialState = {
    posts: [],
    myPosts: [],
    postSearch: [],
    post: {},
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case SEARCHC_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case SEARCHC_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        postSearch: action.payload,
      };
    case SEARCHC_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case CREATE_POST_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        post: action.payload,
      };
      
      case UPDTE_POST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        posts:[action.payload, ...initialState.posts],
        error: action.payload,
      };
 
    case CREATE_POST_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case GET_MY_POST_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_MY_POST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        myPosts: action.payload,
      };
    case GET_MY_POST_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case GET_POST_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        posts: action.payload,
      };
    case GET_POST_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
