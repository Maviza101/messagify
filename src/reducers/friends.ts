import Chance from "chance"

import { PROFILE_PICTURES } from "../util/values"

const chance = new Chance()

const defaultState: IFriendsReduxState = {
  friendsList: PROFILE_PICTURES.map(pic => ({
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      profilePic: pic,
      chats: []
  }))
}

const reducers: IFriendsReducers = {}

function friendsReducer(state: IFriendsReduxState = defaultState, action: IReduxAction) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }

  return state
}

export default friendsReducer
