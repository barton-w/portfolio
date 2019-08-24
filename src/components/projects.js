import React from "react"
import SongExplorer from "./songExplorer.js"
import TrailMix from "./trailMix.js"
import SQLSensei from "./SQLSensei.js"

export default function Projects() {
  return (
    <div id="projects-main" className="container">
      <div id="projects-header">
        <h3>Full-Stack Builds</h3>
      </div>
      <div id="projects">
        <SongExplorer />
        <SQLSensei />
        <TrailMix />
      </div>
    </div>

  )
}
