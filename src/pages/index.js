import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>I'm currently rebuilding my portfolio with React & Netlify.</p>
    <p>Stay tuned for more progress!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h3>César</h3>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
