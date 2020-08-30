import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  state = { loading: false, msg: null }

  render() {
    const { loading, msg } = this.state
    return (
      <Layout>
        <form name="responses" method="POST" data-netlify="true">
        <input name="age" placeholder="Age" type="text"/>
        <input name="gender" placeholder="Gender" type="text"/>
        <button type="submit">SUBMIT</button>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
