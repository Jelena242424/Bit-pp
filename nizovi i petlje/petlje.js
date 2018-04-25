// zadatak 1-8
// var fizz = "Fizz";
// var buzz = "Buzz"
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(fizz + buzz);
//     } else if (i % 5 === 0) {
//         console.log(buzz);
//     } else if (i % 3 === 0) {
//         console.log(fizz);
//     } else {
//         console.log(i);
//     }
// }

// zadatak 1

// var a = [31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7, 31, -4.2, 32, 7];
// var e = 31;
// var isContained = false;
// // var message = "no";

// for (var i = 0; i < a.length; i++) {
//     if (a[i] === e) {
//         isContained = true;
//         // message = "yes";
//         break;
//     }
// }

// // console.log(message);

// isContained ? console.log("Yes") : console.log("No");

// // if (isContained) {
// //     console.log("Yes");
// // }else {
// //     console.log("No");  
// // }



// // zadatak 2

// var a = [-3, 11, 5, 3.4, -8];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] > 0) {
//         a[i] *= 2;
//     }
// }

// console.log(a);

// zadatak 3
var a = [-4, 2, 2, -1, 6, -5, 58, 6, -12, 8];
var min = 0;
var index = 0;

for (var i = 0, j = 1; i < a.length - 1; i++ , j++) {
    if (min > a[i] ) {
        min = a[i]
        index = i;
    }
    // if (a[i] < a[j]) {
    //     index = i;
    //     a[j] = a[i];
    //     min = a[j];
    // } else if (a[j] < a[i]) {
    //     index = j;
    //     a[i] = a[j];
    //     min = a[i];
    // }
}
console.log(min);
console.log(index);




