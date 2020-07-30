import React from "react"

export default function CarouselSlide({ data }) {

  return (
      <div className="w-100 overflow-hidden">
        <div className="carousel-slide-grid">
          <div className="carousel-slide-before">
            <img src="https://i.imgur.com/ZMwvAuL.jpg" alt="before" />
          </div>
          <p className="before">Before</p>
          <div className="carousel-slide-after">
            <img src="https://i.imgur.com/ynggR15.jpg" alt="after" />
          </div>
          <p className="after">After</p>
        </div>
      </div>
  )
}

// TODO: Dynamic Carousel Slide 