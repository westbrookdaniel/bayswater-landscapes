import React from "react"

class ServicesHome extends React.Component {
  render() {
          
    return (
      <section className="fdb-block">
        <div className="container p-0 m-0" style={{ maxWidth: "none" }}>
          <div className="row align-items-center  w-100">
            <div className="col-12 col-lg-6 p-0">
              <img
                alt="image"
                className="img-fluid"
                style={{ backgroundColor: "grey" }}
                src={this.props.data.data.hero_image.url}
              />
            </div>
            <div className="col-12 col-lg-5 ml-md-auto text-left px-5 py-5 mr-md-5 w-100">
              <h1>{this.props.data.data.title.text}</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <a href="https://www.froala.com">
                <button className="btn btn-primary mt-4">Download</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServicesHome
