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
    return newstring + ", " + counter;
})("programMing");
console.log(replace);


var suggMail = (function (name, surname) {
    var newEmail = "";
    newEmail = name + "." + surname + "@gmail.com";
    return newEmail;
})("pera", "peric");
console.log(suggMail);



var octalToDecimal = function () {
    function validOctal() {
        return typeof value === "string" || value[0] === "0"
    }

    function convert(number) {
        var maxIndex = value.length-1
        var sum = 0;
        for (var i = value.length - 1; i >= 1; i--) {
            sum += 8 ** maxIndex * parseInt(value[i]);
           
        }
        return sum;
    }
    return function (value) {
        if (!validOctal(value)) {
            return NaN;
        }
        return convert (value);

    }
};
var octal = octalToDecimal();
var decimalValue = octalToDecimal("034");
console.log(decimalValue);


function isPassCorrect(pass, a, b) {
// a = a || function () {}; ovde setujemo default vrednost ako neko nije setovao da je a funkcija onda cemo mi dodeliti da to bude prazna funkcija.

    if (pass.length < 6) {
        return b();
    }

    for (var i = 0; i < pass.length; i++) {

        if (typeof parseInt(pass[i]) === "number") {
            return a();
        }

    }
    return b();
};

var a = function () {
    return "Your password is cool"
};

var b = function () {
    return "Your password is invalid"
};

console.log(isPassCorrect("abc", a, b));





function filterArray(arr, a) {
    return a(arr);
}

var a = function (arr) {
    var newArr = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            newArr[j] = arr[i];
            j++
        }
    }
    return newArr;
};

console.log(filterArray([2, 8, 11, 4, 9, 3], a));


