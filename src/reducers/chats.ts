import { SEND_MESSAGE } from "./friends"

export const SELECT_FRIEND_CHAT = "SELECT_FRIEND_CHAT"

const defaultState: IChatsState = {
  currentChatIsFor: null,
  currentChat: []
}

const reducers: IChatsReducers = {
  [SELECT_FRIEND_CHAT]: (state: IChatsState, action): IChatsState => {
    const { currentChat, currentChatIsFor } = action.payload
    const newState = {
      ...state,
      currentChat,
      currentChatIsFor
    }

    return newState
  },
  [SEND_MESSAGE]: (state: IChatsState, action): IChatsState => ({
    ...state,
    currentChat: action.payload.currentChat
  })
}

function chatsReducer(state: IChatsState = defaultState, action: IReduxAction) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }

  return state
}

export default chatsReducer

export function selectFriendChat(chosenFriendId: string) {
  return (dispatch, getState: () => IRootReduxState) => {
    const { friendsList } = getState().friends
    const chosenFriend = friendsList.find(friend => friend.id === chosenFriendId)
    let currentChat: string[] = []
    let currentChatIsFor: string | null = null
    if (chosenFriend) {
      currentChat = chosenFriend.chats
      currentChatIsFor = chosenFriendId
    }

    dispatch({
      type: SELECT_FRIEND_CHAT,
      payload: {
        currentChat,
        currentChatIsFor
      }
    })
  }
}
