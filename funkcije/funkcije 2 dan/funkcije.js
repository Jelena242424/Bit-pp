

function checkString(name) {
    if (typeof name === "string") {
        return true;
    }
    return false;
}

var isString = "input";
console.log(checkString(isString));


function isEmptyString(value) {
    if (value === "") {
        return true;
    }
    return false;
}

var inputValue = "";
console.log(isEmptyString(inputValue));


function writeHa(number) {
    var ha = "";
    for (var i = 1; i <= value; i++) {
        ha += "Ha";
    }
    return ha;
}

var value = 8;
console.log(writeHa(value));


function charPosition(name) {
    for (var i = 0; i < name.length; i++) {
        if (letter === name[i]) {
            var position = i + 1;
            return position;
        }
    } return -1;
}

var letter = "m";
var value = "Belgrade";
console.log(charPosition(value));


function charPosition(name2) {
    for (var i = name2.length; i >= 1; i--) {
        if (letter2 === name2[i]) {
            // var position = i + 1;
            // return position;
            return i + 1;
        }
    } return -1;
}

var letter2 = "e";
var value2 = "Belgrade";
console.log(charPosition(value2));

function convertString(string) {
    for (var i = 0; i < words.length; i++) {
        if (words[i] === " ") {
            newa[i] = null;
        } else {
            newa[i] = words[i];
        }
    }
    return newa;
}

var words = "My random string";
var newa = [];
console.log(convertString(words));

function isPrimeNumber(num) {
    if (num > 0) {
        if (num === 1 || num === 2) {
            return true;
        }

        for (var i = 2; i <= num; i++) {
            if (num % i !== 0) {
                return true;
            }
            return false;
        }
    }
    return false;
}

var value = 4;
console.log(isPrimeNumber(value));




function addSeparator(value,line) {
    var transformedString = "";

    for (var i = 0; i < value.length; i++) {
        if (value[i] === " ") {
            transformedString += line;
        } else {
            transformedString += value[i];
        }
    }
    return transformedString;
}

var dash = "_";
var stringArray = "My random string";
console.log(addSeparator(stringArray,dash));



function addDot(sentence, value){
    var newWord = "";
    
    for (var i = 0; i < sentence.length; i++) {
      newWord += sentence[i];
      if (i === value-1) {
          newWord += "..."
          break;
      }
     
    } 
    return newWord;
} 
var number = 8;
var word = "Jedan lep dan";
console.log(addDot(word, number));

