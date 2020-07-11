import React, { useState, useEffect } from 'react'
import CarouselSlide from './CarouselSlide'


export default function Carousel({ data }) {

    const [ active, setActive ] = useState(1)
    const [ load, setLoad ] = useState(0)
    const [ int, setInt ] = useState()

    useEffect(() => {
        startAuto()  
    }, [])
    
    useEffect(() => {
        if (load == 6) {
            let h = document.querySelector('.carousel-slide-grid').offsetHeight
            document.querySelector('.carousel-slider').style.height = `${h}px`
        }
    }, [load])

    useEffect(() => {
        if (active > 3) {
            setActive(1)
        }
        
        if (active === 1) {
            let a = document.querySelector('.active')
            if (a.classList.contains('carContr') === true) { a.classList.remove('active') }
            document.querySelector('.fade-in-1').classList.add('active')
        } else if (active === 2) {
            let a = document.querySelector('.active')
            if (a.classList.contains('carContr') === true) { a.classList.remove('active') }
            document.querySelector('.fade-in-2').classList.add('active')
        } else if (active === 3) {
            let a = document.querySelector('.active')
            if (a.classList.contains('carContr') === true) { a.classList.remove('active') }
            document.querySelector('.fade-in-3').classList.add('active')
        }
    }, [active])


    function startAuto() {
        setInt(
            setInterval(() => {
                setActive(n => {
                    let x = n + 1
                    return x
                })
            }, 4000)
        )
    }

    function contrHandler(e) {
        if (e.target.classList.contains('fade-in-1')) {
            if (e.target.classList.contains('active')) {
            } else {
                setActive(1)
            }       
        } else if (e.target.classList.contains('fade-in-2')) {
            if (e.target.classList.contains('active')) {
            } else {
                setActive(2)
            }       
        } else if (e.target.classList.contains('fade-in-3')) {
            if (e.target.classList.contains('active')) {
            } else {
                setActive(3)
            }  
        }     
    }
    
    function hoverEnter() {
        clearInterval(int)
    }
    function hoverLeave() {
        startAuto()
    }

    return (
        <div className="carousel" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
            <ol className="carousel-indicators">
                <li className="fade-in-1 carContr" onClick={contrHandler}></li>
                <li className="fade-in-2 carContr" onClick={contrHandler}></li>
                <li className="fade-in-3 carContr" onClick={contrHandler}></li>
            </ol>
            <div className="carousel-slider">
                <CarouselSlide data={data} slide={1} active={active} setLoad={setLoad} />
                <CarouselSlide data={data} slide={2} active={active} setLoad={setLoad} />
                <CarouselSlide data={data} slide={3} active={active} setLoad={setLoad} />
            </div>
        </div>
    )
}
