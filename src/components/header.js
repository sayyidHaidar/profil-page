import cns from "@sindresorhus/class-names"
import React, { useState } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import "../styles/index.scss"

const routes = [
  { name: "Home", route: "/" },
  { name: "Blog", route: "/blog" },
  { name: "About", route: "/about" },
  { name: "Event", route: "/event" },
  { name: "Store", route: "/store" },
]

const Header = () => {
  const [navState, setNavState] = useState(false)
  const toggleNavState = event => {
    event.preventDefault()
    setNavState(!navState)
  }

  const activeClass = { "is-active": navState }
  const burgerClass = cns("navbar-burger", "burger", activeClass)
  const navMenuClass = cns("navbar-menu", "has-text-centered", activeClass)

  return (
    <>
      <StaticQuery
        query={graphql`
          {
            img: file(relativePath: { eq: "LogoHimi.png" }) {
              childImageSharp {
                fixed(height: 60) {
                  src
                  srcSet
                }
              }
            }
          }
        `}
        render={data => (
          <nav className="navbar">
            <div className="navbar-brand">
              <div className="is-padding-horizontal" />

              <img {...data.img.childImageSharp.fixed} />
              <div className="is-margin-vertikal is-brand-himi">
                <div className="content">
                  <b>Himpunan Mahasiswi</b>
                  <br />
                  <b>Persatuan Islam</b>
                </div>
              </div>
              <a
                role="button"
                className={burgerClass}
                onClick={toggleNavState}
                onKeyPress={toggleNavState}
                tabIndex={0}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </a>
            </div>

            <div className={navMenuClass}>
              <div className="navbar-end">
                {routes.map(({ name, route }) => (
                  <Link
                    to={route}
                    className="navbar-item"
                    key={name}
                    activeClassName="is-active"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="is-padding-horizontal" />
          </nav>
        )}
      />
      <style jsx>{`
        img {
          margin: auto;
          padding: auto;
          margin-right: 0.5rem;
          margin-left: 0;
          padding-left: 0;
        }
        .is-margin-vertikal {
          margin-top: 3px;
          margin-bottom: 3px;
        }

        @media (min-width: 648px) {
          .is-padding-horizontal {
            padding-right: 1rem;
            padding-left: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default Header
