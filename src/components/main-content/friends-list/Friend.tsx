import React from "react"

import "./Friend.scss"

export interface IFriendProps {
  friend: ISingleFriend
  onChooseFriend: (friendId: string) => void
}

function Friend(props: IFriendProps) {
  const { friend, onChooseFriend } = props

  return (
    <div
      className="friend-container"
      onClick={() => onChooseFriend(friend.id)}
    >
      <span className="friend-first-name">
        { friend.firstName }
      </span>
    </div>
  )
}

export default Friend
