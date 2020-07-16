import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import homeRender from "../components/util/homeRender"

const Home = ({ data }) => {

  const siteData = data.site.siteMetadata
  const pageData = data.prismicHomepage.data;
  const content = pageData.body;  

  const heroData = {
    image: {
      src: pageData.hero_image.url,
      alt: pageData.hero_image.alt
    },
    body: pageData.hero_body.html,
    title: pageData.hero_title.text,
    button: pageData.hero_button.text
  }

  return (
    <div>
      <Helmet>
        <title>{siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <Hero data={heroData} button />

      {content.map(slice => {
        return homeRender(slice)
      })}

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query HomeQuery {
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
            contact_image {
              alt
              url
            }
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
            services_image {
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
