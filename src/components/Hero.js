import React from "react"
import ReactHtmlParser from "react-html-parser"
import Carousel from "./elements/Carousel"
import ClipShadow from './elements/ClipShadow'
import { Link } from 'gatsby'

export default function Hero({ data, button }) {
  return (
    <ClipShadow mode="hero" contStyle={{ maxWidth: "none", padding: 0, margin: 0, }}>
        <div className="row align-items-center  w-100">
          <div className="col-12 col-lg-6 p-0">
            <Carousel data={data}/>
          </div>
          <div className="col-12 col-lg-5 ml-md-auto text-left px-5 py-5 mr-md-5 w-100">
            <h1 className="hero-heading">{data.title}</h1>
            <div className="bl-max-width">
            {ReactHtmlParser(data.body)}
            </div>
            {button ? (
              <>
              <Link to="/contact">
                <button className="btn btn-primary mt-4">{data.button}</button>
              </Link>
              <Link to="/projects">
                <button className="btn ml-3 btn-outline-secondary mt-4">See All Projects</button>
              </Link>
              </>
            ) : null}
          </div>
        </div>
      </ClipShadow>
  )
}


