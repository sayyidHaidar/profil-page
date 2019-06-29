import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const storePage = () => {
  return (
    <>
      <Head title="Store">
        <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
      </Head>  
      <Layout>
        


        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon">
                      <i className="fas fa-lg fa-columns has-text-warning"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Columns</h1>
                      <p className="subtitle is-size-5">
                        The power of <strong>Flexbox</strong> in a simple
                        interface
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon has-text-info">
                      <i className="fab fa-lg fa-wpforms"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Form</h1>
                      <p className="subtitle is-size-5">
                        The indispensable <strong>form controls</strong>,
                        designed for maximum clarity
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon has-text-danger">
                      <i className="fas fa-lg fa-cubes"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Components</h1>
                      <p className="subtitle is-size-5">
                        Advanced multi-part components with lots of
                        possibilities
                      </p>
                    </div>
                  </div>
                </article>
              </div>


              
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon has-text-grey">
                      <i className="fas fa-lg fa-cogs"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Modifiers</h1>
                      <p className="subtitle is-size-5">
                        An <strong>easy-to-read</strong> naming system designed
                        for humans
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon has-text-primary">
                      <i className="fas fa-lg fa-warehouse"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Layout</h1>
                      <p className="subtitle is-size-5">
                        Design the <strong>structure</strong> of your webpage
                        with these CSS classes
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column is-one-third">
                <article className="media notification has-background-white">
                  <figure className="media-left">
                    <span className="icon has-text-danger">
                      <i className="fas fa-lg fa-cube"></i>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">Elements</h1>
                      <p className="subtitle is-size-5">
                        Essential interface elements that only require a{" "}
                        <strong>single CSS class</strong>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default storePage
