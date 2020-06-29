import React from "react"

export default function Header({ data }) {
  return (
    <header>

      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <a className="navbar-brand" href="https://www.froala.com">
            <img
              src="./imgs/logo.png"
              height="30"
              alt={data.siteMetadata.title}
            />
          </a>

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
                <a className="nav-link" href="https://www.froala.com">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.froala.com">
                  Projects
                </a>
              </li>
            </ul>

            <a
              className="btn btn-outline-secondary ml-md-3"
              href="https://www.froala.com"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
