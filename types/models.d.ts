declare interface IFriendsReduxState {
  friendsList: any[]
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

