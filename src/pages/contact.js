import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import SectionLarge from "../components/SectionLarge"

const Contact = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicContactpage.data;
  const content = pageData.body[0];  

  const heroData = {
        image: {
            src: pageData.hero_image.url,
            alt: pageData.hero_image.alt
        },
        body: pageData.hero_body.html,
        title: pageData.hero_title.text,
    }
  const projectsData = { 
        title: content.primary.projects_title.text,
        body: content.primary.projects_body.html,
        image: {
            alt: content.primary.projects_image.alt,
            src: content.primary.projects_image.url
        }
    }

  return (
    <div>
      <Helmet>
        <title>Contact | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <SectionStandard data={heroData} contactPage />
      <SectionLarge data={projectsData} button='See All Projects' right buttonLink='/projects' />

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query ContactQuery {
  prismicContactpage {
    data {
      body {
        ... on PrismicContactpageBodyOurprojects {
          id
          primary {
            projects_title {
              text
            }
            projects_image {
              alt
              url
            }
            projects_body {
              html
            }
          }
        }
      }
      hero_title {
        text
      }
      hero_image {
        url
        alt
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

export default Contact
