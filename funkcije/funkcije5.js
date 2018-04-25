var size = 8;

function draw(squareSize) {
    var star = "*";
    var asterix = "";
    for (var i = 1; i <= squareSize; i++) {
        if (i === squareSize - (squareSize - 1) || i === squareSize) {
            for (var j = squareSize; j < squareSize; j++ ) {
                asterix += star;
                
            }
        }
    }
  
    return asterix;
    console.log(asterix);
}

console.log(draw(size));