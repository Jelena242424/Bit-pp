var a = [3, 11, -5, -3, 2];
var pos = 0;

for (var i = 0; i< a.length; i++) {
    if (a[i] > 0) {
        pos += a[i];
    }
}
console.log(pos);