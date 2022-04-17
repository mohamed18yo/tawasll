import {
  GET_MY_CHATS_FIELD,
  GET_MY_CHATS_START,
  GET_MY_CHATS_SUCCESS,
  GET_USER_CHAT_FIELD,
  GET_USER_CHAT_START,
  GET_USER_CHAT_SUCCESS,
  UPDATE_MESSAGES_SUCCESS,
  UPDATE_RESEVER_SUCCESS,
} from './chatTypeConstant';

export const chatReducer = (
  initialState = {
    chats: [],
    chatMessages: [],
    resever:{},
    chatId: null,
    isLoading: false,
    error: '',
  },
  action,
) => {
  switch (action.type) {
    case GET_MY_CHATS_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_MY_CHATS_SUCCESS:
      return {
        ...initialState,
        chats: action.payload,
        isLoading: false,
      };
    case GET_MY_CHATS_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };
    case GET_USER_CHAT_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_USER_CHAT_SUCCESS:
      return {
        ...initialState,
        chatMessages: action.payload.messages,
        chatId: action.payload.chatId,
        isLoading: false,
      };
    case UPDATE_RESEVER_SUCCESS:
      return {
        ...initialState,
        resever: action.payload,
        isLoading: false,
      };
    case GET_USER_CHAT_FIELD:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case UPDATE_MESSAGES_SUCCESS:
      return {
        ...initialState,
        chatMessages: [...initialState.chatMessages, action.payload],
        isLoading: false,
        error: action.payload,
      };

    default:
      return initialState;
  }
};
