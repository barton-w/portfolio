import React from "react"
import SongExplorer from "./songExplorer.js"
import TrailMix from "./trailMix.js"
import SQLSensei from "./SQLSensei.js"

export default function Projects() {
  return (
    <div id="projects-main">
      <h3>Full-Stack Builds</h3>
      <div id="projects">
        <SongExplorer />
        <SQLSensei />
        <TrailMix />
      </div>
    </div>

  )
}
