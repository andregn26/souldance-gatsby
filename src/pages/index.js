import * as React from "react"
import Layout from "../layout/Layout"
import Seo from "../layout/Seo"
import "./index.css"
import { Box } from "@mui/material"
import Hero from "../components/Homepage/Hero"

const IndexPage = () => (
  <Layout>
    <Box sx={{ padding: "10rem" }}>
      <Hero />
    </Box>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
