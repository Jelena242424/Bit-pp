//Zadatak 1

function convertNumber(number){
    return parseInt(number, 16);
}

console.log(convertNumber("ff"));

//Zadatak 2

function reverseNumber(num){
    return parseInt(num.toString().split("").reverse().join(""));
}


console.log(reverseNumber(12345));
console.log(typeof reverseNumber(12345));

//Zadatak 3

function lettersInAlpha(str){
    return str.toLowerCase().split("").sort().join("");
}
    

console.log(lettersInAlpha("Webmaster"));

//Zadatak 4

function alphabetize(sentence){
    var splited = sentence.split(" ");
    var masterArr = [];
    for (var i in splited){
        var arr = [];
        arr.push(splited[i][0]);
        arr.push(splited[i].slice(1, splited[i].length).split("").sort().join(""));
        masterArr.push(arr.join(""));
    }
    return masterArr.join(" ");

}

console.log(alphabetize("Republic Of Serbia"));

//zadatak 4 verzija 2.0

function alphabetize(sentence){
    var splited = sentence.split(" ");
    var masterArr = [];
    for (var i in splited){
        var arr = [];
        arr.push(splited[i].split("").sort().join(""));
        masterArr.push(arr.join(""));
    }
    return masterArr.join(" ");

}

console.log(alphabetize("Republic Of Serbia"));

