// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
 
// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function hasOddNumber (input) {
    var element = input.find(function(elm) {
        return elm % 2 !== 0; 
    });
    if (element) {
        return true;
    } else {
        return false;
    }
};

console.log(hasOddNumber([8,2,1,2,6]));

function countElementsLessThanMiddle (input) {
    var counter = 0;
    var middleElementIndex = Math.floor(input.length / 2);
    var middle = input[middleElementIndex];
    input.forEach(function(element) {
        if (element < middle) {
            counter++;
        }
       
    })

    return counter;

}

console.log(countElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));