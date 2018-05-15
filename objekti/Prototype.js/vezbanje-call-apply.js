/*"use strict!";

function Person(name, surname, eyeColor, hairColor) {
    this.name = name;
    this.surname = surname;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
}

Person.prototype.getData = function () {
    console.log("I am " + this.name + " " + this.surname + " and I have " + this.eyeColor + " eyes !");
};

var barbara = {
    poklanjam: "znanje",
    uslov: "morate da naucite, a komp ostaje moj",
    documentation: function (msg) {
        console.log("ko zna, taj i moze " + msg + "!");
    }

}

var jelena = {
    name: "Jelena",
    surname: "Ristic",
    read: function () {
        console.log("I am reading a book!");
    }

};

var abc = barbara.documentation.bind(jelena, "123")
console.log(abc());

//console.log(jelenaDocumentatin());
//console.log(barbara);

//jelena.prototype = Object.create(barbara.prototype);
//jelena.prototype.constructor=





//var kristina = new Person("Kristina", "Butkovic", "brown", "brown");
//jelena.read.call(kristina);

//console.log(kristina.getData());
 
*/


// zadatak

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype.getData = function (){
    return this.name + "\n" + this.surname + "\n" + this.salary;
}

Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.increaseSalary = function() {
    var increase = (parseInt(this.salary) / 100) * 110;
    return increase;
}

function Developer(name, surname, job, salary, spec) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = spec;
}

Developer.prototype.getSpecialization = function (){
    return this.specialization;
}

function Manager (name, surname, job, salary, dep){
    Employee.call(this, name, surname, job, salary)
    this.department = dep;
}

Manager.prototype.getDepartment = function (){
    return this.department;
}

Manager.prototype.changeDepartment = function (changeDep){
    return this.department = changeDep;
}

var kristina = new Employee ("Kristina", "Butkovic", "programer", "999e");
var jelena = new Manager ("Jelena", "Ristic", "Programer wanna be", "1000e", "web-dizajn");
console.log(jelena.changeDepartment("telefon"));
console.log(kristina.increaseSalary());



// APPLICATIONS

function WebApp (name, url, technology, licence, stars){
    this.name = name;
    this.url = url;
    this.technology = technology;
    this.licence = licence;
    this.stars = stars
}

WebApp.prototype.getData = function (){
    return this.name + " " + this.url + " " + this.technology + " " + this.licence + " " + this.stars; 
}

WebApp.prototype.reactBased = function (){
    return this.technology.toLowerCase() === "react";
}

WebApp.prototype.isCCLIcence = function (){
    return this.licence.toLowerCase() === "cc";
}

WebApp.prototype.like = function (){
    return ++this.stars;
}

WebApp.prototype.showStars = function (){
    return this.stars;
}

function MobileApp (name, platforms, licence, stars){
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}

MobileApp.prototype.getData = function () {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars; 
}

MobileApp.prototype.forAndroid = function () {
    return this.platforms.toLowerCase() === "android";
}


MobileApp.prototype = Object.create (WebApp.prototype);
MobileApp.prototype.constructor = MobileApp;

var web = new WebApp ("1", "2", "3", "4", "5");
var mob = new MobileApp ("fon", "android", "cc", 4);

console.log(web.isCCLIcence());
console.log(mob.isCCLIcence());