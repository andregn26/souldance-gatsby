import React from "react"
import { Box, useTheme, useMediaQuery } from "@mui/material"

export const StyledFlexBetween = ({ children, defineAlignItems }) => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems={defineAlignItems || "initial"}
    >
      {children}
    </Box>
  )
}
