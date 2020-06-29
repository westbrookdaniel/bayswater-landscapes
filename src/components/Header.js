import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export default function Header({ data }) {
  return (
    <StaticQuery
      query={graphql`
        query Header {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <header className="bg-dark">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
          </Helmet>
          <div className="container">
            <nav className="navbar navbar-dark navbar-expand-md">
              <a className="navbar-brand" href="https://www.froala.com">
                <img
                  src="./imgs/logo.png"
                  height="30"
                  alt={data.site.siteMetadata.title}
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
                  <li className="nav-item active">
                    <a className="nav-link" href="https://www.froala.com">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.froala.com">
                      About
                    </a>
                  </li>
                </ul>

                <a
                  className="btn btn-outline-primary ml-md-3"
                  href="https://www.froala.com"
                >
                  Button
                </a>
              </div>
            </nav>
          </div>
        </header>
      )}
    />
  )
}

