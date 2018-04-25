var numbers = [58, 12, 89, 90];

function arithmeticMean(arrayOfNumbers) {
    var sum = 0;
    var mean = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    mean = sum / arrayOfNumbers.length;
    return mean;
}

console.log(arithmeticMean(numbers));