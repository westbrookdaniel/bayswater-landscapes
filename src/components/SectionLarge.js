import React from "react"
import Image from "./elements/Image"
import ClipShadow from './elements/ClipShadow'

export default function SectionLarge(props) {
  let { data, button, right } = props

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
            alt="large image"
            src={data.data.hero_image.url}
            style={{ backgroundColor: "grey" }}
          />
        </div>
        <div className={colStyle2}>
          <h1>{data.data.title.text}</h1>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated
            they live in Bookmarksgrove right at the coast of the Semantics, a
            large language ocean.
          </p>
          {button ? (
            <a href="#">
              <button className="btn btn-primary mt-4">Download</button>
            </a>
          ) : null}
        </div>
      </div>
    </ClipShadow>
  )
}
