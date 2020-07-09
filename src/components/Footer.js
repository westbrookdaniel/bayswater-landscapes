import React from "react"

export default function Footer({ data }) {
  var year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <ul className="nav justify-content-center justify-content-md-start">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
            <div className="d-flex flex-column flex-md-row">
              <a href="#" className="my-2 d-flex m-auto">
                <img
                  src="static/facebook.svg"
                  srcset="facebook.svg"
                  alt="facebook"
                  className="fbIcon"
                ></img>
              </a>

              <p className="my-3 my-md-2 ml-4 text-muted">
                Copyright ©{year} {data.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
