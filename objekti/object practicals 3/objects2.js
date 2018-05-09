// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

function removeDuplicate (input) {
    var copy = input.slice();
     var output = [];
   
     for (var i = 0; i < copy.length; i++) {
         if (output.indexOf(copy[i]) === -1) {

            output.push(copy[i]);
         } else {
             continue;
         }
     }

     return output.sort(function (a,b) {
         return a-b;
     });
   
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));