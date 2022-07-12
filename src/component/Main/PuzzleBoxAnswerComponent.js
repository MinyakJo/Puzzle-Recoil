import React from "react"

import ImgComponent from "../common/ImgComponent"
import H2Component from "../common/H2Component"

const PuzzleBoxAnswerComponent = () => {

    return (
        <div id = "puzzleBoxAnswer" className="puzzleBox">
            <H2Component id="answer" text="Answer"/>
            <ImgComponent src = "./img/board.jpg"/>
        </div>
    )
}

export default PuzzleBoxAnswerComponent