import React from "react"
import { MdChat } from "react-icons/md"

import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="app-logo-container">
        <MdChat size="1.5rem" />
      </div>
      <div className="welcome-msg-container">
        Welcome to Messagify!
      </div>
    </div>
  )
}

export default Navbar
