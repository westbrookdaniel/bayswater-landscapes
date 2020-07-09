import React from "react"
import { graphql } from "gatsby"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Hero from "../components/Hero"
import homeRender from "../components/util/homeRender"


const Home = ({ data }) => {

  const siteData = data.site.siteMetadata

  const homeId = data.prismicHomepage.id;  
  const homeData = data.prismicHomepage.data; 

  const content = homeData.body;  

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteData.title}</title>
      </Helmet>

      {/* <Header data={siteData} /> */}
      {/* <Hero data={homeData} button /> */}

      {content.map(slice => {
        return homeRender(slice)
      })}

    </div>
  )
}

export const pageQuery = graphql`
query MyQuery {
  prismicHomepage {
    id
    data {
      body {
        ... on PrismicHomepageBodyAbout {
          primary {
            about_title {
              text
            }
            bottom_shadow
            about_image {
              alt
              url
            }
            about_feature_2_body {
              text
            }
            about_feature_2 {
              text
            }
            about_feature_1_body {
              text
            }
            about_feature_1 {
              text
            }
            about_body {
              html
            }
          }
          id
        }
        ... on PrismicHomepageBodyContact {
          id
          primary {
            contact_title {
              text
            }
            contact_button {
              text
            }
            contact_body {
              html
            }
            bottom_shadow
          }
        }
        ... on PrismicHomepageBodyProjects {
          id
          primary {
            projects_title {
              text
            }
            projects_body {
              html
            }
            bottom_shadow
          }
        }
        ... on PrismicHomepageBodyServices {
          id
          primary {
            services_title {
              text
            }
            services_body {
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
      hero_button {
        text
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

export default Home
