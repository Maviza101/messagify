import React from "react"

function ChatWindow() {
  return (
    <div className="chat-window-container">
      <div className="previous-convo-container">
        No previous messages
          </div>
      <div className="chat-input-container">
        <input type="text" className="chat-input" />
      </div>
    </div>
  )
}

export default ChatWindow
