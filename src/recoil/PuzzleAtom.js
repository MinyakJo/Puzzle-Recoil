import { atom, selector } from "recoil"
import sliceImg from "../module/sliceImg"
import random from "../module/randomList"
import changhWidth from "../module/changeWidth"

const randomListState = atom({
    key: "randomList", //atom의 이름
    default: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
})

const imgListState = atom({
    key: "imgList",
    default: sliceImg(4)
})

const colState = atom({
    key: "col",
    default: 4,
})

const srcState = atom({
    key: "src",
    default: "./img/board.jpg"
})

const timeState = atom({
    key: "time",
    default: 0
})

const puzzleState = atom({
    key: "puzzle",
    default: null
})

const reloadState = selector({
    key: "reload",
    get: ({get}) => {
        const col = get(colState)
        const randomList = get(randomListState)
        const imgList = get(imgListState)
        const time = get(timeState)

        return{
            col: col,
            randomList: randomList,
            imgList: imgList,
            time: time
        }
    },
    set: ({set}, col) => {
        changhWidth(col)
        set(randomListState, random(col * col, col * (col - 1)))
        set(imgListState, sliceImg(col))
    }
})

export { randomListState, imgListState, colState, srcState, timeState, reloadState, puzzleState }