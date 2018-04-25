var a = [2, 4, -2, 7, -2, 4, 2, 5];
var symmetric = false;
for (var i = 0, j = a.length-1; i < a.length, j > 0; i++, j--) {
    if (a[i] === a[j]) {
        symmetric = true;
    }
}

symmetric ? console.log("The array is symmetric.") : console.log("The array isn’t symmetric");