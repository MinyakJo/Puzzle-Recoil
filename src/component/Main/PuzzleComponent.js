import React from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import changePuzzle from "../../module/changePuzzle"
import { puzzleState, randomListState, imgListState, colState } from "../../recoil/PuzzleAtom"
import ImgComponent from "../common/ImgComponent"


const PuzzleComponent = (props) => {

    const [random, setRandom] = useRecoilState(randomListState)
    const col = useRecoilValue(colState)
    const src = useRecoilValue(imgListState)[random[props.id]]
    const setPuzzle = useSetRecoilState(puzzleState)

    const puzzleClickEvent = (event) => {
        const target = event.target.parentNode.id
        
        setPuzzle(parseInt(target))
        setRandom(changePuzzle(random, col, parseInt(target)))
    }

    return (
        <div id = {props.id} className = "puzzle" onClick = {puzzleClickEvent}>
            <ImgComponent src = {src}/>
        </div>
    )
}

export default PuzzleComponent