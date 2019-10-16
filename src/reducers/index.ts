import { combineReducers} from "redux"

import chats from "./chats"
import friends from "./friends"

export default combineReducers<IRootReduxState>({
  chats,
  friends
})
