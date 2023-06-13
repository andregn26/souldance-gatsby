import React from "react"
import { Box, Paper, useTheme } from "@mui/material"

const Bar = () => {
  const theme = useTheme()
  return (
    <Paper
      sx={{
        width: "100%",
        // maxWidth: "250px",
        height: "10px",
        backgroundColor: "white",
        zIndex: "10",
      }}
    >
      <Paper
        sx={{
          width: "85%",
          height: "100%",
          background: `linear-gradient(90deg, 
            ${theme.palette.primary[900]}, 
            rgba(153, 105, 207, 1))`,

          borderRadius: "0",
          zIndex: "20",
        }}
      />
    </Paper>
  )
}

export default Bar
