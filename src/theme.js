import { createTheme } from "@mui/material"

// color design tokens export
const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    100: "#f6f6f6",
    200: "#ededed",
    300: "#e3e3e3",
    400: "#dadada",
    500: "#d1d1d1",
    600: "#a7a7a7",
    700: "#7d7d7d",
    800: "#545454",
    900: "#2a2a2a",
    1000: "#252422",
    1100: "#1e1d1b",
    1200: "#161614",
    1300: "#0f0e0e",
    1400: "#070707",
    1500: "#000000",
  },
  primary: {
    100: "#ebe1f5",
    200: "#d6c3ec",
    300: "#c2a5e2",
    400: "#B18DDA", //manually adjusted
    500: "#9969cf",
    600: "#69488D", //manually adjusted
    700: "#5c3f7c",
    800: "#3d2a53",
    900: "#1f1529",
  },
  blue: {
    100: "#d2ecff",
    200: "#a5d8ff",
    300: "#79c5ff",
    400: "#4cb1ff",
    500: "#1f9eff",
    600: "#197ecc",
    700: "#135f99",
    800: "#0c3f66",
    900: "#062033",
  },
}

const mainFont = "'Barlow', sans-serif;"

// mui theme settings
//Colors
let themeSettings = createTheme({
  palette: {
    mode: "dark",
    // palette values for dark mode
    // background: {
    // ...tokensDark.grey,
    //   default: "#121212",
    //   paper: "#121212",
    // },
    text: {
      ...tokensDark.grey,
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "#9b93c7",
    },
    primary: {
      ...tokensDark.primary,
      light: tokensDark.primary[400],
      main: tokensDark.primary[500],
      dark: tokensDark.primary[600],
    },
    grey: {
      ...tokensDark.grey,
      light: tokensDark.grey[400],
      main: tokensDark.grey[500],
      dark: tokensDark.grey[600],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 568, //small mobile
      md: 768, // mobile
      lg: 1024, //tablet
      xl: 1280, // laptop
      xxl: 1536, //desktop
    },
    unit: "px",
  },
  typography: {
    fontFamily: mainFont,
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: 16,
    h1: {
      fontFamily: "inherit",
      fontSize: "var(--fs-xxl)",
      fontWeight: 400,
    },
  },
})

export default themeSettings

// const theme = useTheme()

// const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"))
// const isNonSmallMobile = useMediaQuery(theme.breakpoints.up("sm"))

// const isMobile = useMediaQuery(theme.breakpoints.down("md"))
// const isOnlyMobile = useMediaQuery(theme.breakpoints.between("sm", "md"))
// const isNonMobile = useMediaQuery(theme.breakpoints.up("md"))

// const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
// const isOnlyTablet = useMediaQuery(theme.breakpoints.between("md", "lg"))
// const isNonTablet = useMediaQuery(theme.breakpoints.up("lg"))

// const isLaptop = useMediaQuery(theme.breakpoints.down("xl"))
// const isOnlyLaptop = useMediaQuery(theme.breakpoints.between("lg", "xl"))
// const isNonLaptop = useMediaQuery(theme.breakpoints.up("xl"))

// const isDesktop = useMediaQuery(theme.breakpoints.down("xxl"))
// const isOnlyLaptop = useMediaQuery(theme.breakpoints.between("xl", "xxl"))
// const isNonLaptop = useMediaQuery(theme.breakpoints.up("xxl"))

// const isOnlyLargeDesktop = useMediaQuery(theme.breakpoints.up("xxl"))
