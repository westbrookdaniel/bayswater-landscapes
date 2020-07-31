import React from "react"

export default function CarouselSlide({ data }) {
  return (
      <div className="w-100 overflow-hidden">
        <div className="carousel-slide-grid">
          <div className="carousel-slide-before">
            <img src={data.before.src} alt={data.before.alt} />
          </div>
          <p className="before">Before</p>
          <div className="carousel-slide-after">
            <img src={data.after.src} alt={data.before.alt} />
          </div>
          <p className="after">After</p>
        </div>
      </div>
  )
}

// TODO: Dynamic Carousel Slide 