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
        <img onLoad={loadHandler} className="carousel-slide-before" src="https://i.imgur.com/ZMwvAuL.jpg" />
        <img onLoad={loadHandler} className="carousel-slide-after" src="https://i.imgur.com/ynggR15.jpg" />
      </div>
    </div>
  )
}
