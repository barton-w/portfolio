import React from "react"
import Projects from "./components/projects.js"
import "./css/normalize.css"
import "./css/skeleton.css"
import "./css/main.css"

export default function App() {
  return (
    <div className="main">
      <div id="main-header">
        <h5 id="header">Wes Barton | Portfolio</h5>
      </div>
      <div id="profile" className="container">
        <div id="profile-pic"></div>
        <p>As a software engineer, musician, and outdoor adventurer, I’ve always been inspired by challenge and discovery - to delve into unknown complexity and difficulty, and absorb, master, and solve.  The focus of my career has been continually sharpened toward using new technologies and techniques to build software applications that address the challenges of growing businesses, and empower users.</p>
      </div>
    <Projects />
    </div>
  )
}
