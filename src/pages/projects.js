import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import allprojectsRender from "../components/util/allprojectsRender"

const Projects = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicAllprojectspage.data;
  const content = pageData.body;  

  const heroData = {
    body: pageData.hero_body.html,
    title: pageData.hero_title.text,
  }

  return (
    <div>
      <Helmet>
        <title>Projects | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <SectionStandard data={heroData} shadow={true} noImage/>

      {/* All Projects Section */}

      {content.map(slice => {
        return allprojectsRender(slice)
      })}

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query AllProjectsQuery {
  prismicAllprojectspage {
    data {
      body {
        ... on PrismicAllprojectspageBodyContact {
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
      }
      hero_body {
        html
      }
      hero_title {
        text
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
  allPrismicProject {
    edges {
      node {
        data {
          title {
            text
          }
          featured_image {
            alt
            url
          }
          description {
            text
          }
        }
      }
    }
  }
}  

`

export default Projects