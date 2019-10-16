const defaultState: IFriendsReduxState = {
  friendsList: []
}

const reducers: IFriendsReducers = {}

function friendsReducer(state: IFriendsReduxState = defaultState, action: IReduxAction) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action)
  }

  return state
}

export default friendsReducer
