import React from "react"
import {
  BackgroundImage,
  HeroAbsoluteWrapper,
  HeroWrapper,
} from "./hero.components"
import Form from "../../Form"
import { useTheme, useMediaQuery } from "@mui/material"

const Hero = () => {
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <div>
      <HeroWrapper>
        <BackgroundImage />
        <HeroAbsoluteWrapper></HeroAbsoluteWrapper>
      </HeroWrapper>
    </div>
  )
}

export default Hero
