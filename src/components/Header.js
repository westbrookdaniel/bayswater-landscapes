import React from "react"
import { Link } from "gatsby"
import 'bootstrap/js/dist/collapse'

export default function Header({ data }) {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <Link className="navbar-brand" to="/">
            <img src="./imgs/logo.png" height="30" alt={data.title} />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <a className="btn btn-outline-secondary ml-md-3" href="#">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
