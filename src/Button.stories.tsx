import React from "react"
import {Meta, StoryObj} from "@storybook/react"
import Button, {ButtonProps} from "@mui/material/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPrint} from "@fortawesome/free-solid-svg-icons"

const Template: React.FC<ButtonProps> = (args) => (
    <Button className="normal" {...args}>
        <FontAwesomeIcon icon={faPrint} size="sm" />
        <span>Label</span>
    </Button>
)

const meta: Meta<typeof Button> = {
    title: "material/Button",
    component: Template,
    parameters: {
        backgrounds: {
            default: "white",
        },
    },
    argTypes: {},
}

export default meta

type Story = StoryObj<typeof Button>

export const SecondaryButton: Story = {
    parameters: {
        pseudo: {
            hover: [".hover"],
            active: [".active"],
            focus: [".focus"],
        },
    },
    args: {
        variant: "actionbar",
    },
}

export const DefaultButton: Story = {
    parameters: {
        pseudo: {
            hover: [".hover"],
            active: [".active"],
            focus: [".focus"],
        },
    },
    args: {},
}
