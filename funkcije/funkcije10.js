var str = "Hello";

function letterApp (letter, word){
    var sum = 0;
    for (var i = 0; i < word.length; i ++) {
        letter = letter.toLowerCase();
        if (word[i] == letter) {
            ++sum;
        }
    }

    return sum;
}

console.log(letterApp("L", str));