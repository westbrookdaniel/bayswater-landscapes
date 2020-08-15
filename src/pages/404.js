import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"

const Error = ({ data }) => {

  const siteData = data.site.siteMetadata

  const errorData = {
    title: `Not Found`,
    body: `<p>The page you were looking for could not be found. Try again or go back to our home page.</p>`,
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Helmet>
        <title>Page Not Found | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />

      <SectionStandard data={errorData} button='Home Page' buttonLink='/' noImage custStyle={{flexGrow: '1'}} />

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query ErrorQuery {
  site {
    siteMetadata {
      title
    }
  }
}

`

export default Error