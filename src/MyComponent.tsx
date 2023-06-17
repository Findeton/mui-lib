import React from "react"
import Button from "@mui/material/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPrint} from "@fortawesome/free-solid-svg-icons"

const MyComponent: React.FC = () => (
    <Button variant="actionbar">
        <FontAwesomeIcon icon={faPrint} size="sm" />
        <span>This should be a red button</span>
    </Button>
)

export default MyComponent
