var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];

for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
}
console.log(c);

