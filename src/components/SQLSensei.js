import React from "react"

export default function SQLSensei() {
  return (
    <div className="project-details">
      <h5>SQL Sensei</h5>
      <p>Test your SQL chops with guided challenges</p>
      <a href="https://barton-w.github.io/sql-sensei/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div id="sql-sensei-image" className="project-image"></div>
      </a>
      <ul>
        <li>
          Account registration required (trust me, it's worth it)
        </li>
        <li>
          Ruby on Rails API handling query white-listing, request authentication, validation, and evaluation
        </li>
        <li>
          PostgreSQL database
        </li>
        <li>
          React UI
        </li>
      </ul>
      <h6>GitHub Repos:</h6>
      <a href="https://github.com/barton-w/sql-sensei"
        target="_blank"
        rel="noopener noreferrer"
      >React UI</a>
      <a href="https://github.com/barton-w/sql-sensei-rails"
        target="_blank"
        rel="noopener noreferrer"
      >Rails API</a>
    </div>
  )
}
