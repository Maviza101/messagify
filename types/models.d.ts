declare interface ISingleFriend {
  id: string
  firstName: string
  lastName: string
  email: string
  profilePic: string
  chats: string[]
}

declare interface IFriendsReduxState {
  friendsList: ISingleFriend[]
}

declare interface IChatsState {
  currentChatIsFor: string | null
  currentChat: string[]
}

declare interface IRootReduxState {
  friends: IFriendsReduxState
  chats: IChatsState
}

declare interface IReduxAction {
  type: string
  payload?: any
}

declare type Reducer<T> = (state: T, action: IReduxAction) => T

declare interface IFriendsReducers {
  [actionType: string]: Reducer<IFriendsReduxState>
}

declare interface IChatsReducers {
  [actionType: string]: Reducer<IChatsState>
}
