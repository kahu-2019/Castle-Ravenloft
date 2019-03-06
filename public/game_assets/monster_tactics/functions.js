// export function roll(){
//     return Math.floor(Math.random()*20) + 1
// }
module.exports = {
    roll,
    isSquareAdjacent,
    totalPosition,
    detailedPosition
}

function roll(){
    return Math.floor(Math.random()*20) + 1
}

function isSquareAdjacent(path){
    if(path.length == 2){
        return true
    } return false
}

function totalPosition(tileX,tileY,squareX,squareY){
    var x = (tileX - 1) * 4 + squareX
    var y = (tileY - 1) * 4 + squareY

    var charTotalPosition = {
        x,
        y
    }

    return charTotalPosition
}

function detailedPosition(char){
    var tileX = Math.floor(char.x / 4) + ((char.x % 4 === 0) ? 0 : 1)
    var squareX = (char.x - 1) % 4
    var tileY =  Math.floor(char.y / 4) + ((char.y % 4 === 0) ? 0 : 1)
    var squareY = (char.y - 1) % 4

    var charDetailedPosition = {
        tileX,
        tileY,
        squareX,
        squareY
    }


    return charDetailedPosition
}
