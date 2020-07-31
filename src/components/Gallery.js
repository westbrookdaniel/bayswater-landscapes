import React from "react"
import ClipShadow from "./elements/ClipShadow"
import BootImage from "./elements/BootImage"
import Card from './elements/Card'

export default function Gallery({ data, shadow, card, textcard }) {

  if (card) {
    return (
      <ClipShadow disable={!shadow} sChild="container">
        <div className="row blcustom-flow-grid mt-5 py-0 py-md-5">
          {data.items.map(item => {
            let i = data.items.indexOf(item)
              return (
                <Card 
                  key={i}
                  imageSrc={item.image.src}
                  imageAlt={item.image.alt}
                  title={item.title}
                  content={item.content}
                  link={item.link}
                  linkText='More Details' 
                />
              )
          })}
        </div>
      </ClipShadow>
    )
  }

  if (textcard) {
    return (
      <ClipShadow disable={!shadow} sChild="container">
        <div className="row blcustom-flow-grid mb-5 py-0 py-md-5">
          {data.items.map(item => {
              let i = data.items.indexOf(item)
              return (
                <Card 
                  key={i}
                  title={item.title}
                  content={item.content}
                />
              )
          })}
        </div>
      </ClipShadow>
    )
  }

  return (
    <ClipShadow disable={!shadow} sChild="container">
      <div className="row blcustom-flow-grid mt-5">
        {data.items.map(item => {
            let i = data.items.indexOf(item)
            return <BootImage key={i} alt={item.image.alt} src={item.image.url} />
        })}
      </div>
    </ClipShadow>
  )
}
