import { Box, useTheme, useMediaQuery } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export const HeroWrapper = ({ children }) => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height={isNonMobile ? "100svh" : "100svh"}
    >
      {children}
    </Box>
  )
}

export const BackgroundImage = () => (
  <StaticImage
    src="../../../images/hero-homepage-beautiful-passionate-dancers.jpg"
    alt="example"
    placeholder="blurred"
    layout="fullWidth"
    webpOptions={{ quality: 100 }}
    objectPosition=" 55% 60% "
    style={{
      position: "absolute",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
    }}
  />
)

export const HeroAbsoluteWrapper = ({ children }) => {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}
