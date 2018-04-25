var size = 5;

function draw(squareSize) {
    var star = "*";

    var asterix = "";

    for (var i = 1; i <= squareSize; i++) {
        if (i === 1 || i === squareSize) {
            for (var j = 1; j <= squareSize; j++) {
                asterix += star;
            }
        } else {
            for (var j = 1; j <= squareSize; j++) {
                if (j === 1 || j === squareSize) {
                    asterix += star;
                } else {
                    asterix += " ";
                }
            }
        }

        asterix +="\n";
    }

    return asterix;
}

console.log(draw(size));
