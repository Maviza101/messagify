import React from "react"
import { connect } from "react-redux"

import "./FriendsList.scss"
import Friend from "./Friend"

export interface IFriendsListProps {
  friendsList: ISingleFriend[]
}

class FriendsList extends React.Component<IFriendsListProps> {
  render() {
    const { friendsList } = this.props

    return (
      <div className="friends-list-container">
        {
          !!friendsList.length
            ? friendsList.map((singleFriend, index) =>
              <Friend
                key={`single-friend-${index}`}
                friend={singleFriend}
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

export default connect(mapStateToProps)(FriendsList)
