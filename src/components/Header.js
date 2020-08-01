import React from "react"
import { Link } from "gatsby"
import 'bootstrap/js/dist/collapse'
import logo from '../img/logo.png'

export default function Header({ data }) {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-md">
          <Link className="navbar-brand" activeClassName="active" to="/">
            <img style={{padding: "3px 0"}} src={logo} height="30" alt={data.title} />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-secondary mt-2 mt-md-auto ml-md-3" to="/contact">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
