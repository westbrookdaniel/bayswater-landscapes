import React from "react"

function AboutHome(props) {
  return (
    <section className="fdb-block py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <h1>Design Blocks</h1>
            <p className="lead">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>

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
          </div>
          <div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0">
            <img
              alt="image"
              className="img-fluid"
              src={props.data.data.hero_image.url}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutHome.propTypes = {}

export default AboutHome
