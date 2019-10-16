import React from "react"

import "./Friend.scss"

export interface IFriendProps {
  friend: ISingleFriend
}

function Friend(props: IFriendProps) {
  const { friend } = props

  return (
    <div className="friend-container">
      <span className="friend-first-name">
        { friend.firstName }
      </span>
    </div>
  )
}

export default Friend
