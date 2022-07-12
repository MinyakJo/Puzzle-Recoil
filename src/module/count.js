
const count = (randomList) => {
    let count = 0
    randomList.forEach((element, index, arr) => { 
        if(element == index){ count += 1 }
    })

    return count
}

export default count