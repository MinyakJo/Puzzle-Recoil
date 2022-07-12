import isOnly from "./isOnly"


const randomList = (length, blankIndex) => {
    const randomIndex = []
    
    randomIndex.length = length
    randomIndex[blankIndex] = blankIndex

    for(let index = 0; index < length; index++) {
        const randomNumber = Math.floor(Math.random() * length)

        if(index == blankIndex){
            continue
        }
        
        if(isOnly(randomNumber, randomIndex)){
            randomIndex[index] = randomNumber
        }else{
            index--
        }
    }
    return randomIndex
}

export default randomList