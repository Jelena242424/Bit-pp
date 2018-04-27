
//zadatak 1


function insertString(str, strToInsert, index) {
    var newStr = "";

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
var index =0 ;

console.log(insertString("My random string","JS",0));

// zadatak 2

function joinElements(array) {
    var newStr = "";
    for (var i = 0; i < array.length; i++) {
        if ( isFinite(array[i]) && typeof array[i] !== "object") {
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

function reverseNumber (num){
    var newStr="";
   var newElement = num.toString();

    for ( var i = newElement.length -1; i >= 0; i--){
            newStr += newElement[i];
        }
            var b = parseInt(newStr);
    return b;
}

console.log(reverseNumber(12345));
