"use strict";

Array.prototype.myPop = function () {

    var lastElement= this[this.length-1];
    delete this[this.length-1];
    this.length = this.length -1;
    console.log(lastElement);
    return lastElement;    
     
}
 var a = [1,2,3,4,5];
 a.myPop(); 
 console.log(a);


 Array.prototype.myPush = function(){
    var output;
    for (var i = 0; i<arguments.length; i++){
        this[this.length]=arguments[i];
    }
    output = this.length;
    console.log(output);
    return output;
 }

 var a = [1,2,3,4,5];
 a.myPush(6, 7 ,8);
 console.log(a);

 Array.prototype.myJoin = function(){
     var output = '';
     arguments[0] += '';
     if (arguments.length === 0){
         for (var i = 0; i < this.length; i++){
             if (i === this.length-1){
                output += this[i]
                console.log(output);
                return output;
             }
             output += this[i] + ', ';
         } 
     } else {
         for (var i = 0; i < this.length; i++){
             output += this[i] + arguments[0];
         }
     }
     console.log(output);
     return output;
 }

 var a = [1,2,3,4,5];
 a.myJoin(21);
 
Array.prototype.myFilter = function(callback) {
    var newArray =[];
    for (var i = 0; i < this.length; i++){
        if(callback(this[i])) {
            newArray[newArray.length] = this[i];
        }
    }
    console.log(newArray);
    return newArray;
}

var arr = [1,2,3,4,5,6];
arr.myFilter(function(el){
    return el > 2;
});


Array.prototype.myMap = function(callback){
    var newArray =[];
    for (var i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i]);
    }
    console.log(newArray);
    return newArray;
}
var arr = [1,2,3,4,5,6];
arr.myMap(function(el){
    return el +1;
})

Array.prototype.myCopy = function() {
    
}