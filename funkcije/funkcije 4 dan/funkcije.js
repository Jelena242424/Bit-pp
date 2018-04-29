// zadatak 1.

function isNumberThere(a, num) {
    for (var i = 0; i < a.length; i++) {
        if (num === a[i]) {
            return "Yes";
        }
        return "No";
    }

}

var a = [5, -4.2, 3, 7];
var num = 8;
console.log(isNumberThere(a, num));

// zadatak 2.

function multipleByTwo(numberArray) {
    newArray = [];
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 0) {
            newArray[i] = numberArray[i] * 2;
        } else {
            newArray[i] = numberArray[i]
        }

    }
    return newArray;
}

var numberArray = [-3, 11, 5, 3.4, -8];
console.log(multipleByTwo(numberArray));

// zadatak 3.

function minimum(givenArray) {
    
    var min = 0;
    var index = 0;

    for (var i = 0, j = 1; i < givenArray.length - 1; i++ , j++) {
        if (min > givenArray[i]) {
            min = givenArray[i]
            index = i;
        }
        if (givenArray[i] < givenArray[j]) {
            index = i;
            givenArray[j] = givenArray[i];
            min = givenArray[j];
        } else if (givenArray[j] < givenArray[i]) {
            index = j;
            givenArray[i] = givenArray[j];
            min = givenArray[i];
        }
    }
    return [min, index];
   
    
}
var givenArray = [-4, 2, 2, -1, 6, -5, 58, 6, -12, 8];
console.log(minimum(givenArray));

// zadatak 4.
