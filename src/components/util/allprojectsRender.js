import React from 'react'
import SectionStandard from "../SectionStandard"

export default function allprojectsRender(slice) {

    const type = slice.__typename
    
    if (type === "PrismicAllprojectspageBodyContact") {
        const contactData = { 
            title: slice.primary.contact_title.text,
            body: slice.primary.contact_body.html,
            image: {
                alt: slice.primary.contact_image.alt,
                src: slice.primary.contact_image.url
            }
        }

        return <SectionStandard data={contactData} key={slice.id} contact centerText right/>

    }
    
}
