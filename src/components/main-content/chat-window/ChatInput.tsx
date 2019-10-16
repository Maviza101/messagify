import React from "react"

import { KEY_CODE_FOR_LINE_RETURN } from "../../../util/values"

export interface IChatInputProps {
  sendMessage: (msg: string) => void
}

class ChatInput extends React.Component<IChatInputProps> {
  sendChat(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    const message = event.currentTarget.value
    const keycode = event.which
    if (message && keycode === KEY_CODE_FOR_LINE_RETURN) {
      this.props.sendMessage(message.trim())
      event.currentTarget.value = ""
    }
  }

  render() {
    return (
      <div className="chat-input-container">
        <textarea
          className="chat-input"
          rows={6}
          placeholder="Enter message..."
          onKeyDown={(event) => this.sendChat(event)}
        />
      </div>
    )
  }
}

export default ChatInput
