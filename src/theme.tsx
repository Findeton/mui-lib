import {createTheme} from "@mui/material"
import {Theme as MUITheme} from "@mui/material"

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
// See: https://github.com/emotion-js/emotion/discussions/2291#discussioncomment-491185
declare module "@emotion/react" {
    export interface Theme extends MUITheme {}
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        actionbar: true
    }
}

declare module "@mui/material/styles" {
    export interface PaletteOptions {
        brandColor: string
    }
    export interface Palette extends PaletteOptions {}
}

const palette = {
    brandColor: "#991B1B",
}

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "row",
                    gap: "6px",
                },
            },
            variants: [
                {
                    props: {variant: "actionbar"},
                    style: {
                        background: palette.brandColor,
                        color: "white",
                    },
                },
            ],
        },
    },
    palette,
})

export default theme
