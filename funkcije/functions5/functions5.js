function switchNumbers(arr) {
    var min = arr[0];
    var minIndex = 0;
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
            minIndex = i;
        } 
        if (max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }
    arr[minIndex] = max;
    arr[maxIndex] = min;
    return arr;

}
var arr = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(switchNumbers(arr));

//zadatak 2

function changeArr(arr){
    var newArr = [];
    var result;
    for (var i = 0; i < arr.length; i++){
        result = arr[i] / 2 + 5;
        if (result === 0){
            newArr[i] = 20;
        } else {
            newArr[i] = result;
        }
    }
        
    return newArr;
}
var arr = [3, 500 , -10, 149, 53, 414, 1, 19];
console.log(changeArr(arr));

//zadatak 3

function studentGrade(names, grade){
    var resultStr = "";
    var points;
    
    for (var i = 0; i < grade.length; i++){
        
        var str = names[i] + " acquired " + grade[i] + " points and earned " + points +". ";
        if(grade[i] <= 50){
            points = "failed";
            resultStr += (names[i] + " acquired " + grade[i] + " points and failed to complete exam. ");
        } else if (grade[i] > 50 && grade[i] <= 60){
            points = 6;
            resultStr += str;
        }  else if (grade[i] > 60 && grade[i] <= 70){
            points = 7;
            resultStr += str;
        } else if (grade[i] > 70 && grade[i] <= 80){
            points = 8;
            resultStr += str;
        } else if (grade[i] > 80 && grade[i] <= 90){
            points = 9;
            resultStr += str;
        } else{
            points = 10;
            resultStr += str;
        }
    }
    return resultStr;
}

var names = [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ];
var grade = [ 50, 39, 63, 72, 99, 51, 83, 59 ];
console.log(studentGrade(names, grade));


// zadatak 4.

function sortMultiple(arr) {
    var temp;
    for (var i=0; i < arr.length-1; i++) {
        var position = i;
        for (var j = i; j < arr.length; j++) {
            if (arr[position] > arr[j]) {
                position = j;
            }
        }

        var temp = arr[i];
        arr[i] = arr[position];
        arr[position] = temp;
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

var arr = [13,11,15,5,6,1,8,12];
console.log(sortMultiple(arr));

// zadatak 5.

function smallestOnLast(arr){
    for (var i = 0; i < arr.length - 1; i++){
        if (arr[i] < arr[i + 1]){
            var tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;

        }
    }
    return arr;
}


function bubbleSort(arr){
    for (var j = 0; j < arr.length - 1; j++ ){
        smallestOnLast(arr);
    }
    return arr;
}
var arr = [13,11,15,5,6,1,8,12];
console.log(bubbleSort(arr));

// zadatak 6.

function sumEvenSubtractOdd(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 === 0){
            sum += i;
        } else if (i % 2 !== 0 && i <= 500){
            sum -= i;
        }
    }
    return sum * 12.5;
}
console.log(sumEvenSubtractOdd());

// zadatak 7

function twoLetterConcat(arr){
    for (var i = 0; i < arr.length; i++){
        
    }
}

 var arr = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
 console.log(twoLetterConcat(arr));
