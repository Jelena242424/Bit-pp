var array = [1,7,5,9,5,7,4,5];
var sum = 0;
function appearance (number) {
    for ( var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            ++sum;
        }
    }
    return sum;
}
console.log(appearance(5));