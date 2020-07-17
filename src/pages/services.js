import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import servicesRender from "../components/util/servicesRender"

const Services = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicServicespage.data;
  const content = pageData.body;  

  const heroData = {
    image: {
      src: pageData.hero_image.url,
      alt: pageData.hero_image.alt
    },
    body: pageData.hero_body.html,
    title: pageData.hero_title.text,
  }

  return (
    <div>
      <Helmet>
        <title>Services | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <SectionStandard data={heroData} shadow={true} noP/>

      {content.map(slice => {
        return servicesRender(slice)
      })}

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query SevicesQuery {
  prismicServicespage {
    data {
      body {
        ... on PrismicServicespageBodyContact {
          id
          primary {
            shadow_bottom
            contact_title {
              text
            }
            contact_body {
              html
            }
            contact_button {
              text
            }
            contact_image {
              alt
              url
            }
          }
        }
        ... on PrismicServicespageBodyServices {
          id
          primary {
            services_title {
              text
            }
          }
          items {
            service_name {
              text
            }
            service_description {
              text
            }
          }
        }
        ... on PrismicServicespageBodyWhatwedo {
          id
          primary {
            shadow_bottom
            how_title {
              text
            }
            how_body {
              html
            }
            how_button {
              text
            }
            how_image {
              alt
              url
            }
          }
        }
      }
      hero_title {
        text
      }
      hero_image {
        alt
        url
      }
      hero_body {
        html
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`

export default Services
