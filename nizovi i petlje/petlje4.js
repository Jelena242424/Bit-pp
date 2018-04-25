
var a = [4, 2, 2, -1, 6];
var min = a[0];
var min2 = a[1];

for (var i = 0; i < a.length; i++) {
    if (min > a[i]) {
        min = a[i];
    }
    if (min2 > a[i] && min2 === min) {
        min2 = a[i];
    }

}
console.log(min2);

