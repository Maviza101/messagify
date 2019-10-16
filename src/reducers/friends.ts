import Chance from "chance"

import { PROFILE_PICTURES } from "../util/values"

export const SEND_MESSAGE = "SEND_MESSAGE"

const chance = new Chance()

const defaultState: IFriendsReduxState = {
  friendsList: PROFILE_PICTURES.map(pic => ({
      id: chance.guid(),
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      profilePic: pic,
      chats: ["foo", "balsk", "kdkd"]
  }))
}

const reducers: IFriendsReducers = {
  [SEND_MESSAGE]: (state: IFriendsReduxState, action): IFriendsReduxState => {
    const { friendsList } = state
    const { message, friendId } = action.payload
    const targetFriendIndex = friendsList.findIndex(friend =>
      friend.id === friendId
    )
    if (targetFriendIndex !== -1) {
      const targetFriend = friendsList[targetFriendIndex]
      targetFriend.chats = [
        ...targetFriend.chats,
        message
      ]
      friendsList[targetFriendIndex] = targetFriend
    }
    const newState = {
      ...state,
      friendsList
    }

    return newState
  }
}

function friendsReducer(state: IFriendsReduxState = defaultState, action: IReduxAction) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }

  return state
}

export default friendsReducer

export function sendMessageToFriend(message: string, friendId: string) {
    const type = SEND_MESSAGE
    const payload = {
      message, friendId
    }

    return { type, payload}
}
