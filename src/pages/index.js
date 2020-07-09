import React from "react"
import { graphql } from "gatsby"
import "../../node_modules/bootstrap/dist/js/bootstrap"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Hero from "../components/Hero"
import SectionStandard from "../components/SectionStandard"
import SectionLarge from "../components/SectionLarge"


const Home = ({ data }) => {
  console.log(data);
  
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>

      <Header data={data.site} />
      <Hero data={data.prismicHomepage} button />
      <SectionStandard data={data.prismicHomepage} features />
      <SectionLarge data={data.prismicHomepage} button right />
      <SectionStandard data={data.prismicHomepage} button projects aTop shadow/>
      <SectionStandard data={data.prismicHomepage} contact centerText right/>
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
