import React from "react"

import ButtonComponent from "../common/ButtonComponent"

const FoldButtonBoxComponent = () => {
     
    return (
        <div id = "foldButtonBox" style = {{marginLeft: "var(--leftBar-width)"}}>
            <ButtonComponent id = "foldButton" src = "./img/backLightBrown.png"/>
        </div>
    )
}

export default FoldButtonBoxComponent