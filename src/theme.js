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
        1400: "#070707"
    },
    orange: {
        100: "#ffd9cc",
        200: "#ffb399",
        300: "#ff8e66",
        400: "#ff6833",
        500: "#ff4200",
        600: "#cc3500",
        700: "#992800",
        800: "#661a00",
        900: "#330d00"
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
        900: "#062033"
    },
}


// mui theme settings
//Colors
let themeSettings = createTheme(
    {
        palette: {
            mode: "dark",
            // palette values for dark mode
            primary: {
                ...tokensDark.orange,
                default: tokensDark.orange[500],
                lighter: tokensDark.orange[100],
                light: tokensDark.orange[200],
                main: tokensDark.orange[500],
                dark: tokensDark.orange[800],
                darker: tokensDark.orange[900],
            },
            secondary: {
                ...tokensDark.blue,
                default: tokensDark.blue[500],
                lighter: tokensDark.blue[100],
                light: tokensDark.blue[200],
                main: tokensDark.blue[500],
                dark: tokensDark.blue[800],
                darker: tokensDark.blue[900],
            },
            neutral: {
                ...tokensDark.grey,
                default: tokensDark.grey[500],
                fullLight: tokensDark.grey[0],
                lighter: tokensDark.grey[100],
                light: tokensDark.grey[300],
                main: tokensDark.grey[500],
                dark: tokensDark.grey[800],
                darker: tokensDark.grey[1000],
                fullDark: tokensDark.grey[1300],
            },
            text: {
                ...tokensDark.grey,
                primary: tokensDark.grey[100],
                secondary: tokensDark.grey[100],
                disabled: tokensDark.grey[100],
            },
            action: {
                active: tokensDark.orange[500],
                hover: tokensDark.orange[500],
                selected: tokensDark.orange[500],
                disabled: tokensDark.grey[100],
                focus: tokensDark.grey[100],
            }
        },
    }
)
//Typography

const font1 = "'Lato', sans-serif;"
const font2 = "'Oswald', sans-serif;"

themeSettings = createTheme(themeSettings, {
    typography: {
        fontFamily: font1,
        fontSize: 'var(--fs-base)',
        fs6xl: {
            fontFamily: font2,
            fontSize: 'var(--fs-6xl)',
        },
        fs5xl: {
            fontFamily: font2,
            fontSize: 'var(--fs-5xl)',
        },
        h1: {
            fontFamily: font2,
            fontSize: 'var(--fs-4xl)',
        },
        h2: {
            fontFamily: font2,
            fontSize: 'var(--fs-xxxl)',
        },
        h3: {
            fontFamily: font2,
            fontSize: 'var(--fs-xxl)',
        },
        h4: {
            fontFamily: font2,
            fontSize: 'var(--fs-xl)',
        },
        h5: {
            fontFamily: font1,
            fontSize: 'var(--fs-lg)',
        },
        h6: {
            fontFamily: font1,
            fontSize: 'var(--fs-md)',
        },
        body1: {
            fontFamily: font1,
            fontSize: 'var(--fs-base)',
        },
        body2: {
            fontFamily: font1,
            fontSize: 'var(--fs-sm)',
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    // Map the new variant to render a <span> by default
                    fs5xl: 'p',
                    fs6xl: "p",
                },
            },
        },
    },
})

export default themeSettings
