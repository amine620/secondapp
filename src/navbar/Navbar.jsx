import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/users">users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">tasks</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}
