import React from "react"
import 'twin.macro'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div tw="max-w-screen-lg  mx-auto mt-2 bg-white p-4">
      <h2 tw="jost font-semibold text-3xl text-center">404: Página não existe</h2>
    </div>
  </Layout>
)

export default NotFoundPage
