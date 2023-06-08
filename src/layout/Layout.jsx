import * as React from "react"
//material Ui
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import themeSettings from "../theme"
//components
import NavigationHeader from "../components/NavigationHeader"

const Layout = ({ children }) => {
  const theme = themeSettings
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          <NavigationHeader />
          {children}
        </StyledThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default Layout
