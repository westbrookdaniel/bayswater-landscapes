import React from "react"
import sanitizeHtml from 'sanitize-html'
import ReactHtmlParser from "react-html-parser"
import Carousel from "./elements/Carousel"
import ClipShadow from './elements/ClipShadow'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { container, item } from './util/animate'

export default function Hero({ data, button }) {
  return (
    <ClipShadow mode="hero" contStyle={{ maxWidth: "none", padding: 0, margin: 0, }}>
        <motion.div 
          variants={container}
          initial='hidden'
          animate='show'
          className="row align-items-center  w-100"
        >
          <div className="col-12 col-lg-6 p-0">
            <Carousel data={data}/>
          </div>
          <div className="col-12 col-lg-5 ml-md-auto text-left px-5 py-5 mr-md-5 w-100">
            <motion.h1 variants={item} className="hero-heading">{data.title}</motion.h1>
            <motion.div variants={item} className="bl-max-width">
            {sanitizeHtml(ReactHtmlParser(data.body))}
            </motion.div>
            {button ? (
              <motion.div variants={item}>
              <Link to="/contact">
                <button className="btn btn-primary mt-4">{data.button}</button>
              </Link>
              <Link to="/projects">
                <button className="btn ml-3 btn-outline-secondary mt-4">See All Projects</button>
              </Link>
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </ClipShadow>
  )
}


