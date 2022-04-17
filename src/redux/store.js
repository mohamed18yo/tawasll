import thunk from 'redux-thunk';
import {
  userReducer
} from './user/userReducer';
import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';
import Api from '../api/index'
import {
  composeWithDevTools
} from 'redux-devtools-extension';
import {
  PostReducer
} from './post/postReducer';
import { searchReducer } from './search/searchReducer';
import { followersReducer } from './followers/followersReducer';
import { notificationsReducer } from './notifications/notificationsReducer';
import { chatReducer } from './chat/chatReducer';

const reducers = combineReducers({
  userDetailes: userReducer,
  post: PostReducer,
  searchResult: searchReducer,
  followers: followersReducer,
  notifications: notificationsReducer,
  chats: chatReducer,
});
const userFromLocalStorage = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
  userDetailes: {
    user: userFromLocalStorage,

  },
};


const middlewares = [thunk.withExtraArgument(Api)];
export const Store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
window.store = Store;