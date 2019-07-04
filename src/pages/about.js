import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const aboutePage = () => {
  return (
    <>
      <Head title="About" />
      <Layout>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1>I'm Sayid Haidar.</h1>
              <br />
              <p>
                I am a software engineer from Surabaya, Indonesia. Love working
                on web technologies like Laravel, Node.js, React.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur repudiandae rerum eius ea ipsa, sunt maxime voluptas
                odio dicta porro accusamus ex? Delectus aliquid maxime quisquam
                quam sed accusantium nostrum perferendis, omnis adipisci
                molestiae, a optio, repudiandae nam dolores numquam ipsa
                expedita. Distinctio accusantium adipisci esse beatae quam,
                vitae nemo nulla maiores obcaecati officia! Veritatis dolorem
                possimus officia, ex illo ad ducimus molestiae veniam quia saepe
                sit maxime a explicabo voluptatum exercitationem, expedita iste
                sequi, quibusdam magni architecto. Velit, nam! Blanditiis hic id
                recusandae voluptate quis, magnam ex facilis. Sunt, enim qui
                illo unde nam consequuntur suscipit exercitationem voluptate.
                Beatae?
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default aboutePage
