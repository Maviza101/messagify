import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import "./ChatWindow.scss"
import PreviousConversation from "./PreviousConversation"
import ChatInput from "./ChatInput"
import { sendMessageToFriend } from "../../../reducers/friends"

export interface IChatWindowProps {
  currentChatIsFor: string | null
  currentChat: string[]
  sendMessage: (msg: string, friendId: string) => void
}

class ChatWindow extends React.Component<IChatWindowProps> {
  render() {
    const { currentChat, currentChatIsFor, sendMessage } = this.props

    if (!currentChatIsFor) {
      return <div className="chat-window-container">
        <span className="select-friend">
          Please choose a friend.
        </span>
      </div>
    }

    return (
      <div className="chat-window-container">
        <PreviousConversation currentChat={currentChat} />
        <ChatInput
          sendMessage={msg => sendMessage(msg, currentChatIsFor)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: IRootReduxState) => {
  const { currentChatIsFor } = state.chats

  const currentFriend = state.friends.friendsList.find(friend =>
    friend.id === currentChatIsFor
  )
  let currentChat: string[] = []
  if (currentFriend) {
    currentChat = currentFriend.chats
  }

  return {
    currentChatIsFor,
    currentChat
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(
    {sendMessage: sendMessageToFriend},
    dispatch
  )
)

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
