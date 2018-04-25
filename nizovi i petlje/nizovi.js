// // zadatak 1
// var a = ["jan", "feb","mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"];
// console.log(a[5], a[9], a[0]);

// // zadatak 2
// var week = ["mon", "tue", "wen", "thu", "fri", "sut", "sun"];
// console.log(week[6]);

// // zadatak 3

// var b = [2, -4, 5, -2, -11];
// console.log(b[1], b[3], b[4]);

// // zadatak 4
// var c = [5, 15, -5, 20, 12, 18, 72, 14, 9];
// console.log(c[1], c[4], c[5], c[6], c[8]);

// // zadatak 5

// var d = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(d[0][3]);
// console.log(d[2]);
// console.log(d[2][1]);

// // zadatak 6

// var i = 0;
// var sum = 0;
// while (i<1000) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         sum += i;
//     }
//     i++;
// }

// console.log(sum);

//zadatak 7

// var a = [2,2,1,3];
// var i = 0;
// var sum = 0;
// var prod = 1;
// while (i < a.length){
//     sum += a[i];
//     prod *= a[i];
//     i++;
// }
// console.log(sum, prod);

// zadatak 8
var evenArr = [],
    oddArr = [];
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        evenArr[evenArr.length] = i;
    } else {
        oddArr[oddArr.length] = i;
    }
}
console.log(evenArr, oddArr);

//zadatak 10 

var sum = 0;
for (var j = 0; j <= 20; j++) {
    sum += j * j;
}
console.log(sum);


// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var i = 0;
// var str = "";

// while (i < x.length) {
//     str += x[i];
//     i++;
// }
// console.log(str);

// //zadatak 9

// var a = [
//         [1, 2, 1, 24], 
//         [8, 11, 9, 4], 
//         [7, 0, 7, 27]
//     ];

// var j = 0;
// while (j < a.length) {
//     console.log(a[j]);
//     j++;
// }

var marks = [80, 77, 88, 95, 68];
var sum = 0;
var average = 0;
for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
    if (i === marks.length - 1) {
        average = sum / marks.length;
    }
}
console.log(average);

switch (average) {
    case average <= 60:
        console.log("F");
        break;

    case average >= 60 && average < 70:
        console.log("D");
        break;

    case average >= 70 && average < 80:
        console.log("C");
        break;

    case average >= 80 && average < 90:
        console.log("B");
        break;

    case average >= 90 && average <= 100:
        console.log("B");
        break;

    default:
        console.log("Invalid average grade");
}




