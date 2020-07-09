import React from "react"
import Image from "./elements/Image"
import ClipShadow from './elements/ClipShadow'
import ReactHtmlParser from "react-html-parser"

export default function SectionLarge({ data, button, right }) {

  let colStyle
  let colStyle2
  if (right) {
    colStyle = "col-12 col-lg-6 p-0"
    colStyle2 = "col-12 col-lg-5 ml-md-auto text-left px-5 py-5 mr-md-5 w-100"
  } else {
    colStyle = "col-12 col-lg-6 p-0 order-last"
    colStyle2 = "col-12 col-lg-5 mr-md-auto text-left px-5 py-5 ml-md-5 w-100"
  }

  return (
    <ClipShadow mode='both' style={{ maxWidth: "none", padding: 0, margin: 0, }}>
      <div className="row align-items-center  w-100">
        <div className={colStyle}>
          <Image
            alt={data.image.alt}
            src={data.image.src}
          />
        </div>
        <div className={colStyle2}>
          <h1>{data.title}</h1>
          {ReactHtmlParser(data.body)}
          {button ? (
            <a href="#">
              <button className="btn btn-primary mt-4">See More</button>
            </a>
          ) : null}
        </div>
      </div>
    </ClipShadow>
  )
}
