var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var b = [];
for( var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length]= a[i];
    }
}
console.log(b);


