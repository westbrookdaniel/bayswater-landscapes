import React from "react"

export default function Image(props) {
    let {alt = "image", src, style} = props
  return (
    <div>
      <img alt={alt} className="img-fluid" src={src} style={style}/>
    </div>
  )
}
