import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import {default as MyComponent} from "./MyComponent"

const meta: Meta<typeof MyComponent> = {
    title: "components/MyComponent",
    component: MyComponent,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof MyComponent>

export const DefaultMyComponent: Story = {
    parameters: {},
    args: {},
}
