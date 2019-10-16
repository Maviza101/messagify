import React from "react"

import "./MainContent.scss"
import FriendsList from "./friends-list"
import ChatWindow from "./chat-window"

function MainContent() {
  return (
    <div className="main-content-container">
      <FriendsList />
      <ChatWindow />
    </div>
  )
}

export default MainContent
