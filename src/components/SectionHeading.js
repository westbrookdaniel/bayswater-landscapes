import React from "react"
import ClipShadow from "./elements/ClipShadow"
import Image from "./elements/Image"
import Card from './elements/Card'

export default function Gallery({ data, shadow = false }) {

  return (
    <ClipShadow disable={!shadow} sChild="container">
      <div className="row blcustom-flow-grid mt-5">
        <h2 className="text-center mt-5">{data}</h2>
      </div>
    </ClipShadow>
  )
}
