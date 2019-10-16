import React from "react"

import "./ChatWindow.scss"

function ChatWindow() {
  return (
    <div className="chat-window-container">
      <div className="previous-conversation-container">
        No previous messages
      </div>
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          rows={ 6 }
          placeholder="Enter message..."
        />
      </div>
    </div>
  )
}

export default ChatWindow
