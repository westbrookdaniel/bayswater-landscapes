import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Header({ data }) {
  return (
    <header>

      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <AniLink fade className="navbar-brand" to="/" color="white">
            <img
              src="./imgs/logo.png"
              height="30"
              alt={data.title}
            />
          </AniLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav3"
            aria-controls="navbarNav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <AniLink fade className="nav-link" to="/about" color="white">
                  About
                </AniLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>

            <a
              className="btn btn-outline-secondary ml-md-3"
              href="#"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
