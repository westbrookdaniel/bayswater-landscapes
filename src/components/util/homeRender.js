import React from 'react'
import SectionStandard from "../SectionStandard"
import SectionLarge from "../SectionLarge"

export default function homeRender(slice) {

    const id = slice.id
    const type = slice.__typename
    
    if (type === "PrismicHomepageBodyAbout") {
        console.log("about");
        console.log(slice.primary);
        
        const aboutData = { 
            title: 't',
            body: 'b',
            features: {
                f1: 'f1',
                f1c: 'f1c',
                f2: 'f2',
                f2c: 'f2c'
            },
            image:  {
                alt: 'a',
                src: 's'
            }
        }
        return <SectionStandard data={aboutData} key={slice.id} shadow={slice.primary.bottom_shadow} features />
        
    } else if (type === "PrismicHomepageBodyServices") {
        console.log("services");
    
    } else if (type === "PrismicHomepageBodyProjects") {
        console.log("projects");

    } else if (type === "PrismicHomepageBodyContact") {
        console.log("contact");

    }
    
}



// <SectionStandard data={data.prismicHomepage} features />
// <SectionLarge data={data.prismicHomepage} button right />
// <SectionStandard data={data.prismicHomepage} button projects aTop shadow/>
// <SectionStandard data={data.prismicHomepage} contact centerText right/>


// {
//     "about_title": {
//       "text": "About Us"
//     },
//     "bottom_shadow": false,
//     "about_image": {
//       "alt": null,
//       "url": "https://images.prismic.io/bayswater-landscapes/5a81700c-8da3-4ff9-933d-993d85acc6ff_asset-2%402x.png?auto=format%2Ccompress&fit=max&q=50"
//     },
//     "about_feature_2_body": {
//       "text": "Lorem ipsum dolor sit amet, consetetur"
//     },
//     "about_feature_2": {
//       "text": "Lorem Ipsum"
//     },
//     "about_feature_1_body": {
//       "text": "Lorem ipsum dolor sit amet, consetetur"
//     },
//     "about_feature_1": {
//       "text": "Lorem Ipsum"
//     },
//     "about_body": {
//       "html": "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>"
//     }
//   }