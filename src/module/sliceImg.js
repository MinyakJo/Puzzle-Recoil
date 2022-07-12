

const sliceImg = (col = 4, src = "./img/board.jpg") => {
    const boardImg = new Image()
    boardImg.src = src

    const pieceWidth = boardImg.naturalWidth / col
    const pieceHeight = pieceWidth

    const pieces = []

    const img = new Image()
    img.src = boardImg.src

    const canvas = document.createElement("canvas")
    canvas.className = "piece"
    canvas.width = boardImg.width / col
    canvas.height = canvas.width

    const context = canvas.getContext("2d")
    
    for(let y = 0; y < col; y++){
        for(let x = 0; x < col; x++){

            if(y == col - 1 && x == 0){
                context.fillStyle = "white"
                context.fillRect(0, 0, canvas.width, canvas.height)
            }else{
                context.drawImage(img, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight, 0, 0, canvas.width, canvas.height)
            }
            pieces.push(canvas.toDataURL())
        } 
    }
    return pieces
}

export default sliceImg