"use strict";
var arr = [4, 5, 11, 9];
var a = (function (arr) {

    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            newarr[arr.length - 1] = arr[i];
            continue;
        }
        if (i === arr.length - 1) {
            newarr[0] = arr[arr.length - 1];
            continue;
        }

        newarr[i] = arr[i];
    }
    return newarr;
})(arr);

console.log(a);


var surface = (function (a, b) {
    var p = a * b;
    return p;
})(5, 3);
console.log(surface);



var replace = (function (input) {
    var counter = 0;
    var asterix = "*";
    var newstring = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "m" || input[i] === "M") {
           newstring += asterix;
            counter++;
        } else {
            newstring += input[i];
        }
    }
    return newstring + ", " +  counter;
})("programMing");
console.log(replace);

var suggMail = (function (name, surname){
    var newEmail = "";
    newEmail = name + "." + surname + "@gmail.com";
    return newEmail; 
})("pera", "peric");
console.log(suggMail);



var octToDec = (function (number){
    var newNumber = number + "";
    var stepen = 0;
    var sum = 0;
    for(var i = newNumber.length -1; i >=0; i--){
        var sum = newNumber[i] * (8 * stepen);
        stepen++;

    }
})
