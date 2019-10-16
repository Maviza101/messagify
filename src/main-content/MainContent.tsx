import React from "react"

import "./MainContent.scss"
import FriendsList from "./friends-list"
import ChatWindow from "./chat-window"

function MainContent() {
  return (
    <div className="main-content-container">
      <div className="chatbox-container">
        <FriendsList />
        <ChatWindow />
      </div>
    </div>
  )
}

export default MainContent
