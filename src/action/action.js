
export const START = "STRAT"
export const RELOAD = "RELOAD"
export const PUZZLE_CLICK = "PUZZLE_CLICK"
export const COL = "COL"

const start = () => {
    return {
        type: START
    }
}
const reload = () => {
    return {
        type: RELOAD,
    }
}
const puzzleClick = (id) => {
    return {
        type: PUZZLE_CLICK,
        id: id
    }
}
const setCol = (column) => {
    return {
        type: COL,
        col: column
    }
}


export { start, reload, puzzleClick, setCol }