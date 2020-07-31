import React from "react"
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
      }

    return (
        <Slider {...settings} className="overflow-hidden">
            {data.slider.map(slide => {
                let i = data.slider.indexOf(slide)
                return <CarouselSlide data={slide} key={i} />
            })}
        </Slider>
    )
}
