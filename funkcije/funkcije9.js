function sumOdd(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

var array = [2, 5, 7, 6];

console.log(sumOdd(array));