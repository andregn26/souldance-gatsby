import * as React from "react"
import Layout from "../layout/Layout"
import Seo from "../layout/Seo"
import "./index.css"
import { Box } from "@mui/material"

const Contacts = () => (
  <Layout>
    <Box sx={{ padding: "10rem" }}></Box>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contactos" />

export default Contacts
