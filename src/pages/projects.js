import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import allprojectsRender from "../components/util/allprojectsRender"

const Projects = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicAllprojectspage.data
  const content = pageData.body
  const allProjects = data.allSitePage.edges

  const galleryData = {
    items: [],
  }
  allProjects.forEach(item => {
      galleryData.items.push({
          image: {
              src: item.node.context.pageData.featured_image.url,
              alt: item.node.context.pageData.featured_image.alt,
          },
          title: item.node.context.pageData.title.text,
          content: `${item.node.context.pageData.description.text.substring(0, 50).trim()}...`,
          link: item.node.path,
      })
  });

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

      <Gallery data={galleryData} shadow card />

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
              text
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
  allSitePage(filter: {path: {nin: ["/", "/contact/", "/services/", "/about/", "/dev-404-page/", "/projects/"]}}) {
    edges {
      node {
        path
        context {
          pageData {
            featured_image {
              url
              alt
            }
            title {
              text
            }
            description {
              text
            }
          }
        }
      }
    }
  }
}  

`

export default Projects