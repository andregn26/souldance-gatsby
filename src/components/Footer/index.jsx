import React from "react"
import {
  StyledContainer83,
  StyledContainerSection,
} from "../../helpers/Containers"
import { Box, useTheme } from "@mui/material"

const Footer = () => {
  const theme = useTheme()
  return (
    <div>
      <StyledContainerSection>
        <Box
          display={"grid"}
          gridTemplateColumns={"1fr"}
          gridTemplateRows={"repeat(2, 1fr)"}
          gap={"1.5em 3em"}
          justifyItems={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Box>
            <Box>Aqui fica o titulo da secção</Box>
            <Box>Aqui fica o texto</Box>
          </Box>
          <Box>
            <Box>Mapa</Box>
            <Box>Morada e contactos</Box>
          </Box>
        </Box>
      </StyledContainerSection>

      <StyledContainerSection defineBgColor={theme.palette.grey[1300]}>
        <Box>texto</Box>
      </StyledContainerSection>
    </div>
  )
}

export default Footer
