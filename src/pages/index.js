import React from "react"
import { graphql } from "gatsby"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import AboutHome from "../components/AboutHome"
import ServicesHome from "../components/ServicesHome"


const Home = ({ data }) => {
  console.log(data);
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>

      <Header data={data.site} />
      <HeroHome data={data.prismicHomepage} />
      <AboutHome data={data.prismicHomepage} />
      <ServicesHome data={data.prismicHomepage} />
    </div>
  )
}

export const pageQuery = graphql`
  query HomePage {
    prismicHomepage {
      id
      data {
        title {
          text
        }
        hero_image {
          url
          alt
        }
        body {
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
