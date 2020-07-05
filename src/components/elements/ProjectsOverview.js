import React from "react"
import Card from "./Card"

export default function ProjectsOverview(props) {
  return (
    <div className="blcustom-projects-grid">
      <Card
        imageSrc="https://via.placeholder.com/150x75"
        title="Project"
        content="Snippet Description"
        link="#"
        linkText="See More"
      />
      <Card
        imageSrc="https://via.placeholder.com/150x75"
        title="Project"
        content="Snippet Description"
        link="#"
        linkText="See More"
      />
      <Card
        imageSrc="https://via.placeholder.com/150x75"
        title="Project"
        content="Snippet Description"
        link="#"
        linkText="See More"
      />
      <Card
        imageSrc="https://via.placeholder.com/150x75"
        title="Project"
        content="Snippet Description"
        link="#"
        linkText="See More"
      />
    </div>
  )
}
