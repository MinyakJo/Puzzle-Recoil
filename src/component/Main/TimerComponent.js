import React from "react"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { timeState } from "../../recoil/PuzzleAtom"
import H2Component from "../common/H2Component"

const Timer = () => {
   const time = useRecoilValue(timeState)

    return (
        <div id = "timer">
            <H2Component id = "timerText" text = "경과 시간"/>
            <p>{time}</p>
        </div>
    )
}

export default Timer