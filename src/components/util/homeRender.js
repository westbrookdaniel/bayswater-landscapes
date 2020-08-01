import React from 'react'
import SectionStandard from "../SectionStandard"
import SectionLarge from "../SectionLarge"

export default function homeRender(slice) {

    const type = slice.__typename
    
    if (type === "PrismicHomepageBodyAbout") {        
        const aboutData = { 
            title: slice.primary.about_title.text,
            body: slice.primary.about_body.html,
            features: {
                f1: slice.primary.about_feature_1.text,
                f1c: slice.primary.about_feature_1_body.text,
                f2: slice.primary.about_feature_2.text,
                f2c: slice.primary.about_feature_2_body.text
            },
            image:  {
                alt: slice.primary.about_image.alt,
                src: slice.primary.about_image.url
            }
        }
        return <SectionStandard data={aboutData} key={slice.id} shadow={slice.primary.bottom_shadow} features />
        
    } else if (type === "PrismicHomepageBodyServices") {        
        const servicesData = { 
            title: slice.primary.services_title.text,
            body: slice.primary.services_body.html,
            image: {
                alt: slice.primary.services_image.alt,
                src: slice.primary.services_image.url
            }
        }
        
        return <SectionLarge data={servicesData} key={slice.id} shadow={slice.primary.bottom_shadow} button buttonLink='/services' right services />

    } else if (type === "PrismicHomepageBodyProjects") {
        const projectsData = { 
            title: slice.primary.projects_title.text,
            body: slice.primary.projects_body.html,
        }
        
        return <SectionStandard data={projectsData} key={slice.id} shadow={slice.primary.bottom_shadow} button='See All Projects' buttonLink='/projects' projects aTop/>

    } else if (type === "PrismicHomepageBodyContact") {
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