import React from "react"
import ClipShadow from "./elements/ClipShadow"
import Image from "./elements/Image"
import Card from './elements/Card'

export default function Gallery({ data, shadow, card }) {

  if (card) {
    return (
      <ClipShadow disable={!shadow} sChild="container">
        <div className="row blcustom-flow-grid mt-5 py-0 py-md-5">
          {data.map(item => {
              return (
                <Card 
                  imageSrc={item.node.context.pageData.featured_image.url}
                  imageAlt={item.node.context.pageData.featured_image.alt}
                  title={item.node.context.pageData.title.text}
                  content={`${item.node.context.pageData.description.text.substring(0, 50).trim()}...`}
                  link={item.node.path}
                  linkText='More Details' 
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
            return <Image alt={item.image.alt} src={item.image.url} />
        })}
      </div>
    </ClipShadow>
  )
}
