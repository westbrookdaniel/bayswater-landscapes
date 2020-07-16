import React from 'react'
import SectionStandard from "../SectionStandard"
import SectionLarge from "../SectionLarge"

export default function homeRender(slice) {

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


// <SectionStandard data={data.prismicHomepage} key={slice.id} contact centerText right/>

