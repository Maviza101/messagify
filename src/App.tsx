import React from "react"

import "./App.scss"
import MainContent from "./main-content"
import Navbar from "./navbar"

function App() {
  return (
    <div className="app-container">
      <div className="app-children-wrapper">
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
