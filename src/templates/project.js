import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SectionStandard from "../components/SectionStandard"
import projectRender from "../components/util/projectRender"
import ClipShadow from '../components/elements/ClipShadow'

const Project = ({ pageContext, data }) => {
  
let { pageData } = pageContext
const siteData = data.site.siteMetadata
const content = pageData.body
const bodyContact = data.prismicAllprojectspageBodyContact
const heroData = {
  body: pageData.description.html,
  title: pageData.title.text,
}
const contactData = { 
  title: bodyContact.primary.contact_title.text,
  body: bodyContact.primary.contact_body.html,
  image: {
      alt: bodyContact.primary.contact_image.alt,
      src: bodyContact.primary.contact_image.url
  }
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

      <SectionStandard data={contactData} key={bodyContact.id} contact centerText right/>

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
  prismicAllprojectspageBodyContact {
    id
    primary {
      contact_title {
        text
      }
      contact_image {
        url
        alt
      }
      contact_button {
        text
      }
      contact_body {
        html
      }
    }
  }
}
`

export default Project