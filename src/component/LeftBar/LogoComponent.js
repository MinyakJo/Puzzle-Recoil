import React from "react"
import ImgComponent from "../common/ImgComponent"
import H1Component from "../common/H1Component"

const LogoComponent = () => {

    return (
        <div id="logo">
            <ImgComponent src="./img/logo2.png"/>
            <H1Component id = "logoText" text="Puzzle"/>
        </div>
    )
}

export default LogoComponent