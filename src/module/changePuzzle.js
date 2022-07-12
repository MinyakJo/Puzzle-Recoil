
const changePuzzle = (randomList, col, clickId) => {
    let random = [...randomList]
    let top = clickId - col
    let bottom = clickId + col
    let right = clickId + 1
    let left = clickId - 1

    let temp = null

    console.log(`col: ${col}`)
    console.log(`click: ${clickId}`)
    console.log(`top: ${top}`)
    console.log(`bottom: ${bottom}`)
    console.log(`left: ${left}`)
    console.log(`right: ${right}`)

    if((random[top] == col * (col - 1)) && (top >= 0)){
        temp = random[top]
        random[top] = random[clickId]
        random[clickId] = temp
    }else if((random[bottom] == col * (col - 1)) && (bottom < col * col)){
        temp = random[bottom]
        random[bottom] = random[clickId]
        random[clickId] = temp
    }else if((random[right] == col * (col - 1)) && (right % col != 0) && (right < col * col)){
        temp = random[right]
        random[right] = random[clickId]
        random[clickId] = temp
    }else if((random[left] == col * (col - 1)) && (left % col != col - 1) && (left >= 0)){
        temp = random[left]
        random[left] = random[clickId]
        random[clickId] = temp
    }

    return random
}

export default changePuzzle