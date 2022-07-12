import React from "react"

import PuzzleBoxAnswerComponent from "./PuzzleBoxAnswerComponent"
import PuzzleBoxQuestionComponent from "./PuzzleBoxQuestionComponent"
import ResetButtonComponent from "./ResetButtonComponent"
import TimerComponent from "./TimerComponent"


const MainComponent = () => {

    return (
        <main id = "main">
            <PuzzleBoxQuestionComponent/>
            <TimerComponent/>
            <PuzzleBoxAnswerComponent/>
            <ResetButtonComponent/>
        </main>
    )
}

export default MainComponent