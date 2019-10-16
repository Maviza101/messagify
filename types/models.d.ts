declare interface ISingleFriend {
  firstName: string
  lastName: string
  email: string
  profilePic: string
  chats: string[]
}

declare interface IFriendsReduxState {
  friendsList: ISingleFriend[]
}

declare interface IRootReduxState {
  friends: IFriendsReduxState
}

declare interface IReduxAction {
  type: string
  payload?: any
}

declare type Reducer<T> = (state: T, action: IReduxAction) => T

declare interface IFriendsReducers {
  [actionType: string]: Reducer<IFriendsReduxState>
}

