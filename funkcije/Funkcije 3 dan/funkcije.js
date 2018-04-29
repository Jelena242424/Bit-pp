
//zadatak 1


function insertString(str, strToInsert, index) {
    var newStr = "";
    var space = " ";

    for (var i = 0; i < str.length; i++) {
        if (i === index) {
            newStr += strToInsert;
        }
        newStr += str[i];
    }

    return newStr;
}
var str = "My random string";
var strToInsert = "JS";
var index = 5;

console.log(insertString(str, strToInsert, index));

// zadatak 2

function joinElements(array) {
    var newStr = "";

    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && typeof array[i] !== "object") {
            newStr += " " + array[i];
        }
    }

    return newStr;
}

console.log(joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

//zadatak 3

function filterOutElements(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (!array[i]) {
            continue;
        }

        newArray[newArray.length] = array[i];
    }

    return newArray;
}

console.log(filterOutElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// zadatak 4

function reverseNumber(num) {
    var newStr = "";
    var newElement = num.toString();

    for (var i = newElement.length - 1; i >= 0; i--) {
        newStr += newElement[i];
    }
    var b = parseInt(newStr);
    return b;
}
var numb = 12345;
console.log(reverseNumber(numb));

// zadatak 5

function returnNElements(n) {
    if (n === undefined) {
        return someArray[someArray.length - 1];
    }

    if (typeof n !== "number" || n <= 0) {
        return "n must be a positive number";
    }
    var newElements = [];

    if (n <= someArray.length - 1) {
        var key = 0;
        for (var i = someArray.length - n; i < someArray.length; i++) {

            newElements[key++] = someArray[i];
        }
        return newElements;
    } else {
        return "n is longer than array";
    }
}

var someArray = [7, 9, 0, -22];
console.log(returnNElements(5));

// zadatak 6.

function createElements(num, element) {
    newElement = [];
    key = 0;
    if (element === undefined) {
        element = null;
    }
    for (var i = 1; i <= num; i++) {
        newElement[key++] = element;
    }
    return newElement;
}
var num = 5;
var element = "str";
console.log(createElements(num, element));

// zadatak 7.

function perfectNumber(number) {
    var key = 0;
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number && number !== 0) {
        return "It is perfect number";
    }

    return "it is not perfect number";
}

var number = 6;
console.log(perfectNumber(number));
// zadatak 8.

function searchWordCount(sentence, word) {

    var x = 0;
    var y = 0;

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] == word[0]) {
            for (var j = i; j < i + word.length; j++) {
                if (sentence[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(searchWordCount('The quick brown fox', 'fox'));
console.log(searchWordCount('aa, bb, cc, dd, aa', 'aa'));

// zadatak 9.

function hideEmail(sentence) {
    var newEmail = "";
    var monkey = false;

    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] === "@") {
            monkey = true;
        }
        if (i < 7 || monkey) {
            newEmail += sentence[i];
        } else if (i === 7) {
            newEmail += "...";
        }

    }
    return newEmail;
}

var sentence = "myemailaddress@bgit.rs";
console.log(hideEmail(sentence));

// zadatak 10.

function findFrequentItem(inputArr) {
    var mostFrequent = 1;
    var m = 0;
    var item;
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = i; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                m++;
            }
            if (mostFrequent < m) {
                mostFrequent = m;
                item = inputArr[i];
            }
        }
        m = 0;
    }


    // output: item (number of times)
    return item + " ( " + mostFrequent + " times ) "
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findFrequentItem(arr1));




