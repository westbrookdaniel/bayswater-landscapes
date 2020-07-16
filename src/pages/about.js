import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import aboutRender from "../components/util/aboutRender"

const About = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicAboutpage.data;
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
        <title>About | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <SectionStandard data={heroData} shadow={true} noP/>

      {content.map(slice => {
        return aboutRender(slice)
      })}

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query AboutQuery {
  prismicAboutpage {
    data {
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
      body {
        __typename
        ... on PrismicAboutpageBodyContact {
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
        ... on PrismicAboutpageBodyWhatwedo {
          id
          primary {
            shadow_bottom
            what_title {
              text
            }
            what_body {
              html
            }
            what_feature_1 {
              text
            }
            what_feature_1_body {
              text
            }
            what_feature_2 {
              text
            }
            what_feature_2_body {
              text
            }
            what_image {
              alt
              url
            }
          }
        }
        ... on PrismicAboutpageBodyOurprojects {
          id
          primary {
            projects_title {
              text
            }
            projects_body {
              html
            }
            projects_image {
              alt
              url
            }
          }
        }
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

export default About
