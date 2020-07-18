import React from "react"
import Image from "./Image"
import { Link } from "gatsby"

export default function Card(props) {
  let {
    imageSrc,
    imageAlt = "card image",
    title,
    content,
    link,
    linkText,
    style = { width: "18rem" }
  } = props

  return (
    <div className="card border-light text-center" style={style}>
      {imageSrc ? (
        <Image cla="card-img-top" src={imageSrc} alt={imageAlt} />
      ) : null}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        {link && linkText ? (
          <Link to={link} className="text-secondary">
            {linkText}
          </Link>
        ) : null}
      </div>
    </div>
  )
}
