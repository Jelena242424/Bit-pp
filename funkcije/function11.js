var str = "abc";

function conc (word, number) {
    w ="";
    for (var i = 1; i <= number ; i ++) {
        w += word;
    }
    return w;
}

console.log(conc(str, 4));