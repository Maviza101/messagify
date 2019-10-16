import React from "react"
import { MdChat } from "react-icons/md"

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="app-logo-container">
        <MdChat />
      </div>
      <div className="welcome-msg-container">
        Welcome to Messagify!
          </div>
    </div>
  )
}

export default Navbar
