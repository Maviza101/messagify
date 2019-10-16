import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import "./FriendsList.scss"
import Friend from "./Friend"
import { selectFriendChat } from "../../../reducers/chats"

export interface IFriendsListProps {
  friendsList: ISingleFriend[]
  selectFriendChat: (friendId: string) => void
}

class FriendsList extends React.Component<IFriendsListProps> {
  render() {
    const { friendsList, selectFriendChat } = this.props

    return (
      <div className="friends-list-container">
        {
          !!friendsList.length
            ? friendsList.map((singleFriend, index) =>
              <Friend
                key={`single-friend-${index}`}
                friend={singleFriend}
                onChooseFriend={selectFriendChat}
              />
            )
            : "No friends"
        }
      </div>
    )
  }
}

const mapStateToProps = (state: IRootReduxState) => ({
  friendsList: state.friends.friendsList
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    { selectFriendChat },
    dispatch
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList)
