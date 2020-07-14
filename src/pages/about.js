import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import homeRender from "../components/util/homeRender"

const About = ({ data }) => {

  const siteData = data.site.siteMetadata
  const homeData = data.prismicHomepage.data;
<<<<<<< HEAD
  const content = homeData.body;  
=======
>>>>>>> imrpved-page-trans

  const heroData = {
    image: {
      src: homeData.hero_image.url,
      alt: homeData.hero_image.alt
    },
    body: homeData.hero_body.html,
    title: homeData.hero_title.text,
    button: homeData.hero_button.text
  }

  return (
    <div>
      <Helmet>
<<<<<<< HEAD
        <title>About | {siteData.title}</title>
=======
        <meta charSet="utf-8" />
        <title>{siteData.title}</title>
>>>>>>> imrpved-page-trans
      </Helmet>

      <Header data={siteData} />
      <Hero data={heroData} button />

<<<<<<< HEAD
      {/* {content.map(slice => {
        return homeRender(slice)
      })} */}

=======
>>>>>>> imrpved-page-trans
      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query AboutQuery {
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

export default About
