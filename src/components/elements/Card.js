import React from "react"
import Image from "./Image"

export default function Card(props) {
  let {
    imageSrc,
    imageAlt = "card image",
    title,
    content,
    link,
    linkText,
  } = props

  return (
    <div className="card border-light text-center" style={{ width: "18rem" }}>
      {imageSrc ? (
        <Image cla="card-img-top" src={imageSrc} alt={imageAlt} />
      ) : null}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        {link && linkText ? (
          <a href={link} className="text-secondary">
            {linkText}
          </a>
        ) : null}
      </div>
    </div>
  )
}
