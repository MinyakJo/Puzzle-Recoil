import { COL, PUZZLE_CLICK, RELOAD, START, TIME } from "../action/action"
import changePuzzle from "../module/changePuzzle"
import changeWidth from "../module/changeWidth"
import randomList from "../module/randomList"
import sliceImg from "../module/sliceImg"
import timer from "../module/timer"

const initState = {
    randomList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    imgList: sliceImg(4),
    col: 4,
    src: "./img/board.jpg",
    time: Math.floor(Date.now() / 1000),
    now: 0,
    count: 0,
    end: false
}

const reducer = (state = initState, action) => {

    switch(action.type){
        case START:
        case RELOAD:
            changeWidth(state.col)
            state.now = setInterval(timer(state.time), 1000)
            return{
                ...state,
                randomList: randomList(state.col * state.col, state.col * (state.col - 1)),
                imgList: sliceImg(state.col, state.src),
                time: Math.floor(Date.now() / 1000),
            }
        case PUZZLE_CLICK:
            state.count = 0
            changePuzzle(state.randomList, state.col, action.id)

            state.randomList.forEach((element, index, arr) => { 
                if(element == index){ state.count += 1 }
            })
            
            state.count = state.col * state.col

            if(state.count == state.col * state.col){
                state.end = true
            }
            return{
                ...state
            }
        case COL:
            return{
                ...state,
                col: action.col
            }
        default:
            return state
    }
}

export default reducer