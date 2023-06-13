import React from "react"
import {
  BackgroundImage,
  HeroAbsoluteWrapper,
  HeroWrapper,
} from "./hero.components"
import Form from "../../Form"
import { useTheme, useMediaQuery, Typography, Box, Paper } from "@mui/material"
import {
  StyledContainer83,
  StyledContainerSection,
} from "../../../helpers/Containers"
import Bar from "../../UI/Bar"

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div>
      <HeroWrapper>
        <BackgroundImage />
        <HeroAbsoluteWrapper>
          <StyledContainerSection>
            <StyledContainer83>
              <Box
                sx={
                  isMobile
                    ? {
                        display: "grid",
                        gridTemplateColumns: " repeat(1, min-content)",
                        griTtemplateRows: "1fr",
                        gap: "0px 0px",
                        alignContent: "center",
                        alignItems: "center",
                        justifyItems: "start",
                      }
                    : {
                        display: "grid",

                        gridTemplateColumns: " repeat(1, min-content)",
                        griTtemplateRows: "1fr",
                        gap: "0px 0px",
                        alignContent: "center",
                        alignItems: "center",
                      }
                }
              >
                <Typography
                  variant="h5"
                  fontSize={"var(--step-2)"}
                  fontWeight={300}
                  textTransform={"uppercase"}
                  letterSpacing={10}
                >
                  A linguagem
                </Typography>
                <Typography
                  variant="h1"
                  fontSize={"var(--step-9)"}
                  fontWeight={600}
                >
                  Secreta
                </Typography>
                <Box
                  marginTop="2rem"
                  gridTemplateColumns="1fr auto"
                  gridTemplateRows="1fr"
                  display={"grid"}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                  alignContent={"center"}
                  columnGap={3}
                  width={"100%"}
                >
                  <Bar />
                  <Typography fontSize={"var(--step-2)"}>
                    da tua alma
                  </Typography>
                </Box>
              </Box>
            </StyledContainer83>
          </StyledContainerSection>
        </HeroAbsoluteWrapper>
      </HeroWrapper>
    </div>
  )
}

export default Hero
