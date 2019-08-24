import React from "react"

export default function SongExplorer() {
  return (
    <div className="project-details">
      <h5>Song Explorer</h5>
      <p>Browse song-profile data via Spotify and Genius APIs</p>
      <a href="https://barton-w.github.io/song-explorer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="song-explorer-image" className="project-image"></div>
      </a>
      <ul>
        <li>
          Designed and optimized for mobile
        </li>
        <li>
          React UI with functional components using Hooks
        </li>
        <li>
          Ruby on Rails API handling authentication and fuzzy-match logic between Spotify and Genius responses
        </li>
      </ul>
      <h6>GitHub Repos:</h6>
      <a href="https://github.com/barton-w/song-explorer"
        target="_blank"
        rel="noopener noreferrer"
      >React UI</a>
      <a href="https://github.com/barton-w/song-explorer-api"
        target="_blank"
        rel="noopener noreferrer"
      >Rails API</a>
    </div>
  )
}
