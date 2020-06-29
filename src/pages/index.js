import React from "react"
import { graphql } from "gatsby"
import ReactHtmlParser from 'react-html-parser';
import Header from '../components/Header'
import "../../node_modules/bootstrap/dist/js/bootstrap"

const Home = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  return (
    <div>
      <Header />
      <h1>{data.title.text}</h1>
      {ReactHtmlParser(data.body.html)}
      <img
        style={{ width: "200px", display: "block" }}
        alt={data.hero_image.alt}
        src={data.hero_image.url}
      />
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
  }
`

export default Home