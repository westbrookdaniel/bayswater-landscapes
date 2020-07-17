import React from 'react'
import SectionStandard from "../SectionStandard"
import SectionHeading from "../SectionHeading"
import Gallery from "../Gallery"

export default function servicesRender(slice) {

    const type = slice.__typename
    
    if (type === "PrismicServicespageBodyWhatwedo") {        
        const howData = { 
            title: slice.primary.how_title.text,
            body: slice.primary.how_body.html,
            image:  {
                alt: slice.primary.how_image.alt,
                src: slice.primary.how_image.url
            },
            button: slice.primary.how_button.text
        }
        return <SectionStandard data={howData} key={slice.id} shadow={slice.primary.shadow_bottom} button={howData.button} right />
        
    } else if (type === "PrismicServicespageBodyServices") {        
        const servicesData = {
            title: slice.primary.services_title.text,
            items: [],
        }
        console.log(slice);
        slice.items.forEach(item => {
            servicesData.items.push({
                title: item.service_name.text,
                content: item.service_description.text,
            })
        });
          
        return (
            <div key={slice.id}>
                <SectionHeading data={servicesData.title} />
                <Gallery data={servicesData} button textcard shadow={true}/>
            </div>
        )

    } else if (type === "PrismicServicespageBodyContact") {
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

