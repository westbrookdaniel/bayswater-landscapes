import React from 'react'
import SectionStandard from "../SectionStandard"
import SectionLarge from "../SectionLarge"

export default function homeRender(slice) {

    const type = slice.__typename
    
    if (type === "PrismicAboutpageBodyWhatwedo") {        
        const whatData = { 
            title: slice.primary.what_title.text,
            body: slice.primary.what_body.html,
            features: {
                f1: slice.primary.what_feature_1.text,
                f1c: slice.primary.what_feature_1_body.text,
                f2: slice.primary.what_feature_2.text,
                f2c: slice.primary.what_feature_2_body.text
            },
            image:  {
                alt: slice.primary.what_image.alt,
                src: slice.primary.what_image.url
            }
        }
        return <SectionStandard data={whatData} key={slice.id} shadow={slice.primary.shadow_bottom} features button='All Services' right />
        
    } else if (type === "PrismicAboutpageBodyOurprojects") {        
        const projectsData = { 
            title: slice.primary.projects_title.text,
            body: slice.primary.projects_body.html,
            image: {
                alt: slice.primary.projects_image.alt,
                src: slice.primary.projects_image.url
            }
        }
        
        return <SectionLarge data={projectsData} key={slice.id} button />

    } else if (type === "PrismicAboutpageBodyContact") {
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

