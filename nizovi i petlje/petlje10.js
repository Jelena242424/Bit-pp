var e = 78;
var p = 3; 
var a = [2, -2, 33, 12, 5, 8];
var b =[];

for (var i = 0; i < a.length+1; i++) {
    if ( i === p) {
       b[i] = e;
    }else if (i > p) {
        b[i] = a[i-1];
    } else {
        b[i] = a[i];
    }
}
console.log(b);