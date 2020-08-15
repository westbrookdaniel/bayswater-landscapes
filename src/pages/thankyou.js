import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"

const Thankyou = ({ data }) => {

  const siteData = data.site.siteMetadata

  const errorData = {
    title: `Thank You!`,
    body: `<p>Your form submission has been recieved. We will be in touch with you shortly.</p>`,
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Helmet>
        <title>Thank You! | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />

      <SectionStandard data={errorData} button='Home Page' buttonLink='/' noImage custStyle={{flexGrow: '1'}} />

      <Footer data={siteData} />

    </div>
  )
}

export const pageQuery = graphql`
query ThankyouQuery {
  site {
    siteMetadata {
      title
    }
  }
}

`

export default Thankyou