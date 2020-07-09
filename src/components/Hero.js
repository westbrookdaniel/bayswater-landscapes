import React from "react"
import ReactHtmlParser from "react-html-parser"
import Image from "./elements/Image"
import ClipShadow from './elements/ClipShadow'

export default function Hero({ data, button }) {
  return (
    <ClipShadow mode="hero" contStyle={{ maxWidth: "none", padding: 0, margin: 0, }}>
        <div className="row align-items-center  w-100">
          <div className="col-12 col-lg-6 p-0">
            <Image
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
          <div className="col-12 col-lg-5 ml-md-auto text-left px-5 py-5 mr-md-5 w-100">
            <h1>{data.title}</h1>
            {ReactHtmlParser(data.body)}

            {button ? (
              <a href="#">
                <button className="btn btn-primary mt-4">{data.button}</button>
              </a>
            ) : null}
          </div>
        </div>
      </ClipShadow>
  )
}


