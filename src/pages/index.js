import * as React from "react"
import Layout from "../layout/Layout"
import Seo from "../layout/Seo"
import "./index.css"
import Hero from "../components/Homepage/Hero"
import Form from "../components/Form"
import {
  StyledContainer83,
  StyledContainerSection,
  StyledPaper,
} from "../helpers/Containers"

const IndexPage = () => (
  <Layout>
    <Hero />
    <StyledContainerSection defineMaxWidth="100%">
      <StyledPaper>
        <Form />
      </StyledPaper>
    </StyledContainerSection>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
