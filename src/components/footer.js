import React from "react"
import { FaHeart } from "react-icons/fa"

export const Link = props => (
  <a href={props.href} className="has-text-light" target="_blank">
    <b>{props.title}</b>
  </a>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer has-background-dark has-text-light has-text-centered">
      <small>
        <div>
          Handcrafted with <FaHeart color="red" /> by myself. Copyright &copy; {currentYear}
          .
        </div>
        <div>
          Made with <Link href="https://bulma.io" title="Bulma" /> and{" "}
          <Link href="https://gatsbyjs.org" title="Gatsby.js" />.
        </div>
        <br />
        <div>
          Hosted on <Link href="https://netlify.com" title="Netlify" />. Source
          available on{" "}
          <Link href="https://github.com/savyd/profil-page" title="Github" />.
        </div>
      </small>
    </footer>
  )
}

export default Footer
