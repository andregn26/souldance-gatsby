import React from "react"
import { Box, useTheme, useMediaQuery, Paper } from "@mui/material"

export const StyledContainerSection = ({
  children,
  defineMaxWidth,
  definePadding,
}) => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box
      width="100%"
      // border="2px solid red"
      maxWidth={defineMaxWidth || "100%"}
      m="0 auto"
      padding={definePadding || "var(--space-m-2xl)"}
    >
      {children}
    </Box>
  )
}

export const StyledContainer83 = ({
  children,
  defineMaxWidth,
  definePadding,
}) => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Box
      // border="2px solid lime"
      padding={definePadding || "var(--space-l)"}
      maxWidth={defineMaxWidth || "1500px"}
      m="0 auto"
    >
      {children}
    </Box>
  )
}

export const StyledPaper = ({ children, defineMaxWidth, definePadding }) => {
  const theme = useTheme()
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Paper
      sx={{
        // border: "6px solid yellow",
        padding: definePadding ? `${definePadding}` : "var(--space-m-2xl)",
        maxWidth: defineMaxWidth ? `${defineMaxWidth}` : "1500px",
        m: "0 auto",
      }}
    >
      {children}
    </Paper>
  )
}
