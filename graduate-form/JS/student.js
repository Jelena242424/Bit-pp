function Student(name, surname) {
    this.name = name;
    this.surname = surname;
 }
 
 Student.prototype.getData = function () {
     return this.name + " " + this.surname;
 }