import React from "react"
import Image from "./elements/image"
import ProjectsOverview from "./elements/ProjectsOverview"
import ClipShadow from "./elements/ClipShadow"
import ReactHtmlParser from "react-html-parser"


const NormalInner = ({features, button, data}) => {
  let buttonText = 'Download'
  if (typeof button === 'string') {
    buttonText = button
  }
  return (
    <>
      { features ? (
        <div className="row pt-4 pt-xl-5">
          <div className="col-12 col-md-5">
            <h4>
              <strong>{data.f1}</strong>
            </h4>
            <p>{data.f1c}</p>
          </div>
          <div className="col-12 col-md-5 m-auto pt-3 pt-md-0">
            <h4>
              <strong>{data.f2}</strong>
            </h4>
            <p>{data.f2c}</p>
          </div>
        </div>
      ) : null }
    
      { button ? (
        <a href="#">
          <button className="btn btn-primary mt-4">{buttonText}</button>
        </a>
      ) : null }
    </>
  )
}  

const ContactInner = () => {
  return (
    <>
      <form className="mt-5 text-center">
        <div className="row" style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "15px"}}>
          <div className="col-12 px-0 col-md">
            <input type="text" className="form-control" placeholder="Name"/>
          </div>
          <div className="col-12 px-0 col-md">
            <input type="text" className="form-control" placeholder="Email"/>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col px-0">
            <input type="email" className="form-control" placeholder="Subject"/>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col px-0">
            <textarea className="form-control" name="message" rows="3" placeholder="How can we help?"></textarea>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col px-0">
            <button type="submit" className="btn btn-secondary">Send</button>
          </div>
        </div>
      </form>    
    </>
  )
}  


const SectionStandard = ({ data, features, button, right, projects, aTop, shadow, contact, centerText, noP, noImage}) => {  

  let colStyle = "col-12 col-lg-6 col-xl-5"
  let colStyle2 = "col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0"
  if (right) {
    colStyle = "col-12 col-lg-6 order-last pt-5 pt-lg-0"
    colStyle2 = "col-12 col-md-8 col-lg-6 col-xl-5 m-auto ml-lg-0 mr-lg-auto"
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
    <ClipShadow disable={!shadow}>
      <div className={alignStyle + pClass}>
        <div className={colStyle + ' ' + textAlign}>
          <h1>{data.title}</h1>
          {ReactHtmlParser(data.body)}
          {contact ? <ContactInner/> : <NormalInner data={data.features} features={features} button={button}/> }
        </div>

        <div className={colStyle2}>
          {noImage ? null : 
            projects ? (
              <ProjectsOverview />
            ) : (
              <Image alt={data.image.alt} src={data.image.src} />
            )
          }
        </div>
      </div>
    </ClipShadow>
  )
}

SectionStandard.propTypes = {}

export default SectionStandard
