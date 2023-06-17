import {theme} from "../src/index"
import {ThemeProvider} from "@mui/material"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport"
import React from "react"

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
}

const MuiDecorator = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
)

export const decorators = [MuiDecorator]
