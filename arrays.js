var year = ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];
console.log(year[0], year[5], year[9]);

var week = ["Monday", "Tuesday", "Wednesday", "Thuersday", "Friday", "Saturday", "Sunday"];
console.log(week[6]);

var a = [2, -4, 5, -2, -11];
var i = 0;
while (i < a.length) {
    if (a[i] < 0) {
        console.log(a[i]);
    }
    i++;
}

var a = [2, -4, 5, -2, -11];
var i = a.length - 1;
while (i >= 0) {
    if (a[i] < 0) {
        console.log(a[i]);
    }
    i--;
}

console.log(a[1], a[3], a[4]);

var a = [5, 15, -5, 20, 12, 18, 72, 14, 9];
console.log(a[1], a[4], a[5], a[6], a[8]);

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(a[0][3]);
console.log(a[2]);
console.log(a[2][1]);


var i = 0;
var sum = 0;
while (i < 1000) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum = sum + i;
    }
    i++;
}
console.log(sum);

var i = 0;
var a = [4, 5, 10, 18, 56, 22];
var sum = 0;
var prod = 1;

while (i < a.length) {
    sum += a[i];
    prod *= a[i];
    i++;
}
console.log(sum, prod);

var i = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log("even:" + i);
    } else {
        console.log("odd:", i);
    }
    i++;
}

var x = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var string = "";
for (var i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
        string += " " + x[i];
    }
}
console.log(string);

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];

for (var i = 0; i < a.length; i++) {

    for (var j = 0; j < a[i].length; j++) {
        console.log(a[i][j]);
    }
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var sum = 0;


for (var i = 0; i < a.length; i++) {
    sum += a[i] * a[i];
}

console.log(sum);

var grade = 0;
var students = [["David", 80], ["Marko", 77], ["Dany", 88], ["John", 95], ["Thomas", 68]];
for (var i = 0; i < students.length; i++) {
    grade += students[i][1];
}

var average = grade / students.length;
if (average < 60) {
    console.log("F");
} else if (average >= 60 && average < 70) {
    console.log("D");
} else if (average >= 70 && average < 80) {
    console.log("C");
} else if (average >= 80 && average < 90) {
    console.log("B");
} else if (average >= 90 && average < 100) {
    console.log("A");
}


for (var i = 0; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(i + " FizzBuzz");
    } else if (i % 5 === 0) {
        console.log(i + " Buzz");
    } else if (i % 3 === 0) {
        console.log(i + " Fizz");
    } else {
        console.log(i);
    }
}

var a = [5, -4.2, 3, 7];
var e = 3.8;
// var isContained = false;
var message = "no";

for (var i = 0; i < a.length; i++) {
    if (e === a[i]) {
        // isContained = true;
        message = "yes";
        break;
    }
}

console.log(message);

// isContained ? console.log("yes") : console.log("no");

// if (isContained) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

var arr = [-3, 11, 5, 3.4, -8];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        arr[i] *= 2
    } 
}
console.log(arr);


var a = [4, 2, -10, -1, 6];
var min = a[0];
var index = 0;

for (var i = 1; i < a.length; i++) {
    if (a[i]< min) {
        min = a[i];
        index = i;
    }
}
console.log(min, index);








var a = [4, 2, -10, -1, 6];
var min = a[0];
var index = 0;

for (var iteration = 0; iteration < 2; iteration++) {
    for (var i = 1; i < a.length; i++) {
        if (a[i]< min) {
            min = a[i];
            index = i;
        }
    }

    if (iteration === 1) {
       break;
    }

    delete a[index];
    if (index === 0) {
        min = a[1];
    } else {
        min = a[0];
    }
}

console.log(min);


var arr = [3, 11, -5, -3, 2]
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log(sum);

var a = [2, 4, -2, -2, 4, 2];
var isSymetric = true;
for (var i = 0; i < a.length/2; i++) {
    if (a[i] !== a[a.length-1-i]) {
        isSymetric = false;
        break;
    }
}

if (isSymetric) {
    console.log("The array is symetric")
} else{
    console.log("The array is not symetric")
} 

var arr1 = [4, 5, 6, 2];
var arr2 = [3, 8, 11, 9];
var outputArr = [];
var m = 0;
var k = 1;
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        outputArr [k] = arr2 [j]
    }
    outputArr [m] = arr1 [i]; 
}

console.log (outputArr);
