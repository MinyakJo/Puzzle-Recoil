

const changeWidth = (col) => {
    const puzzle = document.getElementsByClassName("puzzle")

    switch(col){
        case 3:
            Array.from(puzzle).forEach(element => element.style.width = "32%")
            break
        case 4:
            Array.from(puzzle).forEach(element => element.style.width = "24%")
            break
        case 5:
            Array.from(puzzle).forEach(element => element.style.width = "19%")
            break
        default:
            console.log("Error")
    }
}

export default changeWidth