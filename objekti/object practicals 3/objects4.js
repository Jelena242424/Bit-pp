// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function findMinimum (input) {
    var value = {};
  var numbers = input.join().split("");
    var minValue = Math.min(numbers);
    var lastIndex = input.lastIndexOf(minValue);
    value.minValue = minValue;
    value.lastIndex = lastIndex;
console.log(numbers);
    return value;
}

console.log(findMinimum([1, 4, -2, 11, 8, 1, -2, 3]));
