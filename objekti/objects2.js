function Person (name, surname, eyeColor){
    this.name = name;
    this.surname = surname;
    this.eyeColor = eyeColor;
    this.hi= function(){
        console.log("I'm " + this.name + " and I have " + this.eyeColor + " eyes! Hi!")
    }
    this.changeSurname = function(newSurname){
        this.surname = newSurname;
    }
};

var jelena = new Person ("Jelena", "Ristic", "blue");
var jovica = new Person ("Jovica", "Krivosija", "brown");

jovica.hi();
jovica.changeSurname("abc");
jelena.changeSurname("Opacic");
console.log(jelena);
console.log(jovica);

var test = 12;
console.log(this);



