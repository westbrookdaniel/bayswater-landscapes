import React from 'react'
import BeforeAfter from '../elements/BeforeAfter'

export default function homeRender(slice) {

    const type = slice.__typename
    console.log(slice);
    
    if (type === "PrismicProjectBodyBeforeandafter") {        
        const beforeafterData = { 
            before: {
                alt: slice.primary.before_image.alt,
                src: slice.primary.before_image.url
            },
            after:  {
                alt: slice.primary.after_image.alt,
                src: slice.primary.after_image.url
            }
        }
        
        return <BeforeAfter key={slice.id} data={beforeafterData}/>
        
    } else if (type === "sdajsl;") {
    // PrismicProjectBodyGallery     
        const projectsData = { 
            title: slice.primary.projects_title.text,
            body: slice.primary.projects_body.html,
            image: {
                alt: slice.primary.projects_image.alt,
                src: slice.primary.projects_image.url
            }
        }
        
        // return <SectionLarge data={projectsData} key={slice.id} button />
    }
    
}


// <SectionStandard data={data.prismicHomepage} key={slice.id} contact centerText right/>

