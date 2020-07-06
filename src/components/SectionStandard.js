import React from "react"
import Image from "./elements/image"
import ProjectsOverview from "./elements/ProjectsOverview"

function SectionStandard(props) {
  let { data, features, button, right, projects, aTop, shadow } = props

  let colStyle
  let colStyle2
  if (right) {
    colStyle = "col-12 col-lg-6 col-xl-5 order-last"
    colStyle2 =
      "col-12 col-md-8 col-lg-6 m-auto ml-lg-0 mr-lg-auto pt-5 pt-lg-0"
  } else {
    colStyle = "col-12 col-lg-6 col-xl-5"
    colStyle2 =
      "col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0"
  }

  let alignStyle
  if (aTop) {
    alignStyle = "row align-items-top mt-5"
  } else {
    alignStyle = "row align-items-center my-5"
  }

  let shadowCont
  let shadowDiv
  let shadowChild
  if (shadow) {
    shadowDiv = "clipShadow"
    shadowCont = "fdb-block py-5 clipShadowCont"
    shadowChild = "container clipShadowChild"
  } else {
    shadowDiv = ""
    shadowCont = "fdb-block py-5"
    shadowChild = "container"
  }

  return (
    <section className={shadowCont}>
      <div className={shadowDiv}>
        <div className={shadowChild}>
          <div className={alignStyle}>
            <div className={colStyle}>
              <h1>Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              {features ? (
                <div className="row pt-4 pt-xl-5">
                  <div className="col-12 col-md-5">
                    <h4>
                      <strong>Feature One</strong>
                    </h4>
                    <p>A small river named Duden flows</p>
                  </div>
                  <div className="col-12 col-md-5 m-auto pt-3 pt-md-0">
                    <h4>
                      <strong>Feature Two</strong>
                    </h4>
                    <p>Separated they live in Bookmarksgrove</p>
                  </div>
                </div>
              ) : null}

              {button ? (
                <a href="#">
                  <button className="btn btn-primary mt-4">Download</button>
                </a>
              ) : null}
            </div>

            <div className={colStyle2}>
              {projects ? (
                <ProjectsOverview />
              ) : (
                <Image alt="example" src={data.data.hero_image.url} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SectionStandard.propTypes = {}

export default SectionStandard
