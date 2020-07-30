import React from "react"

export default function BootImage(props) {
    let { alt = "image", src, style, cla = "img-fluid" } = props
  return (
    <div>
      <img alt={alt} className={cla} src={src} style={style}/>
    </div>
  )
}
