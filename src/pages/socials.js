import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import React from "react"


import Layout from "../components/layout"
import Head from "../components/head"
import metadata from "../components/metadata"


const ExternalLink = ({ children, ...props }) => (
  <a rel="noopener noreferrer" target="_blank" {...props}>
    {children}
  </a>
)


const SocialLink = styled(ExternalLink)`
  &:hover {
    transform: scale(1.025);
  }
`

const Box = styled.div`
  padding: 3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  & > .subtitle {
    margin: 2rem 0 0;
  }
`

const Entries = () =>
  metadata.links.map(c => (
    <SocialLink
      href={c.href}
      key={c.id}
      aria-label={c.id}
      className="column is-one-third"
    >
      <Box backgroundColor={c.color} className="box">
        <FontAwesomeIcon
          className="has-text-light"
          icon={c.classFontAwesome}
          size="3x"
          fixedWidth
        />

        <p className="subtitle">
          <small>{c.id}</small>
        </p>
      </Box>
    </SocialLink>
  ))

const Socials = () => (
  <>
  <Head title="Socials" />
  <Layout>
    <div className="hero is-dark">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Socials</h1>
          <p className="subtitle">
            I am available (virtually) anywhere on the interwebs.
          </p>
          <br />
          <div className="columns is-centered is-multiline g-max-width">
            <Entries />
          </div>
        </div>
      </div>
    </div>
  </Layout>
  </>
)

export default Socials
