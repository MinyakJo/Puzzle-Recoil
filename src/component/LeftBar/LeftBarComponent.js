import React from "react"

import LogoComponent from "./LogoComponent"
import LeftBarBoxComponent from "./LeftBarBoxComponent"

const LeftBarComponent = () => {

    return (
        <nav id="leftBar" style = {{left: "0"}}>
            <LogoComponent/>
            <LeftBarBoxComponent/>
        </nav>
    )
}

export default LeftBarComponent