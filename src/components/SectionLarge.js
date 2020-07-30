import React from "react"
import BootImage from "./elements/BootImage"
import ClipShadow from './elements/ClipShadow'
import ReactHtmlParser from "react-html-parser"
import { Link } from 'gatsby'

export default function SectionLarge({ data, button, buttonLink, right }) {

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
          <BootImage
            alt={data.image.alt}
            src={data.image.src}
          />
        </div>
        <div className={colStyle2}>
          <h1>{data.title}</h1>
          <div className="bl-max-width">
          {ReactHtmlParser(data.body)}
          </div>
          {button && buttonLink ? (
            <Link href={buttonLink}>
              <button className="btn btn-primary mt-4">{typeof button === 'string' ? button : 'See More'}</button>
            </Link>
          ) : null}
        </div>
      </div>
    </ClipShadow>
  )
}
