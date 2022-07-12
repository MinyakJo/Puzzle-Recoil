import React from "react"
import ButtonComponent from "../common/ButtonComponent"

const LeftButtonComponent = () => {

    return (
        <div className="leftButtonBox">
            <ButtonComponent id = "3xButton" src ="./img/3x3.png"/>
            <ButtonComponent id = "4xButton" src ="./img/4x4.png"/>
            <ButtonComponent id = "5xButton" src ="./img/5x5.png"/>
            <ButtonComponent id ="startButton" src="./img/startButton.png"/>
        </div>
    )
}

export default LeftButtonComponent