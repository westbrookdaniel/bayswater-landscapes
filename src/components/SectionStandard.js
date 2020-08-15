import React from "react"
import BootImage from "./elements/BootImage"
import ProjectsOverview from "./elements/ProjectsOverview"
import ClipShadow from "./elements/ClipShadow"
import Form from "./elements/Form"
import ReactHtmlParser from "react-html-parser"
import { Link } from 'gatsby'

const NormalInner = ({features, button, buttonLink, data}) => {
  let buttonText = 'Download'
  if (typeof button === 'string') {
    buttonText = button
  }
  return (
    <>
      { features ? (
        <div className="row pt-4 pt-xl-5">
          <div className="col-12 col-md-6 pl-md-0">
            <h4>
              <strong>{data.f1}</strong>
            </h4>
            <p>{data.f1c}</p>
          </div>
          <div className="col-12 col-md-6 pr-md-0 m-auto pt-3 pt-md-0">
            <h4>
              <strong>{data.f2}</strong>
            </h4>
            <p>{data.f2c}</p>
          </div>
        </div>
      ) : null }
    
      { button && buttonLink ? (
        <Link to={buttonLink}>
          <button className="btn btn-primary mt-4">{buttonText}</button>
        </Link>
      ) : null }
    </>
  )
}  


const SectionStandard = ({ data, features, button, buttonLink, right, projects, aTop, shadow, contact, contactPage, centerText, noP, noImage, custStyle}) => {  

  if (!custStyle) {
    custStyle = null
  }

  let colStyle = "col-12 col-lg-5 "
  let colStyle2 = "col-12 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0"
  if (right) {
    colStyle = "col-12 col-lg-6 order-last pt-5 pt-lg-0"
    colStyle2 = "col-12 col-md-8 col-lg-5 m-auto ml-lg-0 mr-lg-auto"
  }

  let alignStyle = "row align-items-center my-5 "
  if (aTop) {
    alignStyle = "row align-items-top mt-5 "
  }

  let textAlign = ""
  if (centerText) {
    textAlign = "text-center"
  }

  let pClass = 'py-5'
  if (noP) {
    pClass = ''
  }

  return (
    <ClipShadow disable={!shadow} contStyle={custStyle}>
      <div className={alignStyle + pClass}>
        <div className={colStyle + ' ' + textAlign}>
          <h1>{data.title}</h1>
          {ReactHtmlParser(data.body)}
          {contact ? <Form /> : <NormalInner buttonLink={buttonLink} data={data.features} features={features} button={button}/> }
          {contactPage ? <Form left/> : null}
        </div>

        <div className={colStyle2}>
          {noImage ? null : 
            projects ? (
              <ProjectsOverview max={4}/>
            ) : (
              <BootImage alt={data.image.alt} src={data.image.src} />
            )
          }
        </div>
      </div>
    </ClipShadow>
  )
}

SectionStandard.propTypes = {}

export default SectionStandard
