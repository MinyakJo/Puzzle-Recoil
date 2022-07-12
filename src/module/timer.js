
const timer = (time) => {
    let now = Math.floor(Date.now() / 1000)
    console.log(now - time)
    return now - time
}

export default timer