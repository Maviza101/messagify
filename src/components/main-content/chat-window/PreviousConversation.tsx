import React from "react"

import "./PreviousConversation.scss"

export interface IPreviousConversationProps {
  currentChat: string[]
}

class PreviousConversation extends React.Component<IPreviousConversationProps> {
  render() {
    const { currentChat } = this.props

    return (
      <div className="previous-conversation-container">
        {
          currentChat.length
            ? currentChat.map((msg, index) =>
              <div
                key={`single-msg-${index}`}
                className="single-msg"
              >
                {msg}
              </div>
            )
            : "No previous messages"
        }
      </div>
    )
  }
}

export default PreviousConversation
