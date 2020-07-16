import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import projectRender from "../components/util/projectRender"
import BeforeAfter from "../components/elements/BeforeAfter"
import ClipShadow from '../components/elements/ClipShadow'

const Project = ({ path, pageContext, data }) => {
  
let { pageData } = pageContext
const siteData = data.site.siteMetadata
const content = pageData.body;  

const heroData = {
  body: pageData.description.html,
  title: pageData.title.text,
}

  return (
    <div>
      <Helmet>
        <title>{heroData.title} | {siteData.title}</title>
      </Helmet>

      <Header data={siteData} />
      <SectionStandard data={heroData} shadow={true} noImage />

      <ClipShadow>
        <div className="py-5 my-3">
          {content.map(slice => {
            return projectRender(slice)
          })}
        </div>
      </ClipShadow>

      <Footer data={siteData} />

    </div>
  )
}
export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}  

`

export default Project