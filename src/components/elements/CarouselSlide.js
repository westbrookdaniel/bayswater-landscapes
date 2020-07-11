import React from "react"

export default function CarouselSlide({ data, slide, active, setLoad }) {
  let activeClass

  slide === active ? (activeClass = "active") : (activeClass = "")
  let contClass = `w-100 carousel-slide ${activeClass}`

  function loadHandler() {
    setLoad(l => {
      return l + 1
    })
  }

  return (
    <div className={contClass}>
      <div className="carousel-slide-grid">
        <div className="carousel-slide-before">
          <img onLoad={loadHandler} src="https://i.imgur.com/ZMwvAuL.jpg" />
        </div>
        <p className="before">Before</p>
        <div className="carousel-slide-after">
          <img onLoad={loadHandler} src="https://i.imgur.com/ynggR15.jpg" />
        </div>
        <p className="after">After</p>
      </div>
    </div>
  )
}
