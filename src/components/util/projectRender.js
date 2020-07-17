import React from 'react'
import BeforeAfter from '../BeforeAfter'
import Gallery from '../Gallery'

export default function projectRender(slice) {

    const type = slice.__typename

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
        
    } else if (type === "PrismicProjectBodyGallery") {
        const projectsData = {
            items: slice.items,
        }
        return <Gallery data={projectsData} key={slice.id} button />
    }
    
}

