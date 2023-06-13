import React from "react"
import { StyledContainerSection } from "../../helpers/Containers"
import { Box, useTheme } from "@mui/material"

const Footer = () => {
  const theme = useTheme()
  return (
    <div>
      <StyledContainerSection>
        <Box height={300}>Olaa</Box>
      </StyledContainerSection>
      <StyledContainerSection defineBgColor={theme.palette.grey[1300]}>
        <Box>texto</Box>
      </StyledContainerSection>
    </div>
  )
}

export default Footer
