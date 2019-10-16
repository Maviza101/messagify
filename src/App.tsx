import React from "react"

import "./App.scss"
import MainContent from "./main-content"
import Navbar from "./navbar"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
