import React from "react"
import Card from "./Card"
import { StaticQuery, graphql } from "gatsby"

export default function ProjectsOverview(props) {
  return (
    <StaticQuery
    query={graphql`
      query Projects {
        allSitePage(filter: {path: {nin: ["/", "/contact/", "/services/", "/about/", "/dev-404-page/", "/404/", "/404.html", "/thankyou/", "/projects/"]}}) {
          edges {
            node {
              path
              context {
                pageData {
                  featured_image {
                    url
                    alt
                  }
                  title {
                    text
                  }
                  description {
                    text
                  }
                }
              }
            }
          }
        }
      }  
    `}
    render={data => <Wrapper data={data} {...props} />}
  />
  )
}

function Wrapper({ data, max }) {
  const allProjects = data.allSitePage.edges

  const galleryData = {
    items: [],
  }

  let len = allProjects.length
  if (max && (len > max)) {
    len = max;
  }

  for (let i = 0; i < len; i++) {
    const item = allProjects[i];

    galleryData.items.push({
      image: {
        src: item.node.context.pageData.featured_image.url,
        alt: item.node.context.pageData.featured_image.alt,
      },
        title: item.node.context.pageData.title.text,
        content: `${item.node.context.pageData.description.text.substring(0, 50).trim()}...`,
        link: item.node.path,
    })

  }

  return (
    <div className="row blcustom-flow-grid py-0 mb-1 mb-md-5" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
      {galleryData.items.map(item => {
          let i = galleryData.items.indexOf(item)
          return (
            <Card 
              key={i}
              imageSrc={item.image.src}
              imageAlt={item.image.alt}
              title={item.title}
              content={item.content}
              link={item.link}
              linkText='More Details' 
              style={{width: '13em'}}
            />
          )
      })}
    </div>
  )
}
