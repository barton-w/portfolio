import React from "react"

export default function TrailMix() {
  return (
    <div className="project-details">
      <h5>Trail Mix</h5>
      <p>Share and save outdoor adventures, notes, and photos</p>
      <a href="https://trail-mix.herokuapp.com/trails"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="trail-mix-image" className="project-image"></div>
      </a>
      <ul>
        <li>
          Built with Mongo, Express, Node, and EJS
        </li>
        <li>
          Optional account creation / login
        </li>
        <li>
          Posts and photos can be shared publicly or restricted to private user accounts
        </li>
      </ul>
      <h6>GitHub Repo:</h6>
      <a href="https://github.com/barton-w/trail-mix"
        target="_blank"
        rel="noopener noreferrer"
      >App</a>
    </div>
  )
}
