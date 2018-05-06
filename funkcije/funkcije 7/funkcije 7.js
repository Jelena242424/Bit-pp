// zadatak 1.

function fortuneTeller(children, parents, locationa, job) {
    var fortune = "You will be " + x + " in " + y + ", and married to " + z + " width " + n + " children.";
    return fortune;
};

var z = "Tihomir";
var x = "archaeologyst";
var y = "New York";
var n = 2;

console.log(fortuneTeller(n, z, y, x));

// zadatak 2.

function calculateDogAge (n, m) {
    var years = n * 7;
    console.log("Your doggie is " + years + " years old in dog years!");
    var human = m / 7;
   console.log("You have " + human + " dog\'s years!");
}

calculateDogAge(7, 41);

// zadatak 3.

function calculateSupply (age, amount) {
   var x = 100;
   var count = (x - age) * 365 * amount;

    console.log("You will need " + Math.floor(count) + " chocolates to last you until the ripe old age of " + x + ".");
}

calculateSupply(41, 5.3);

// zadatak 4.

function cirumpherence(r) {
    var pi = 3.14;
    var circ = pi * r;
    return  "The circumference is " + circ + ".";
}

console.log(cirumpherence(5));

function areaCircle(r) {
    var pi = 3.14;
    var circ = pi * (r * r);
    return  "The area is " + circ + ".";
}

console.log(areaCircle(5));

// zadatak 5.

function celsiusToFahrenheit(degree) {
    var fahrenheit = degree * 1.8;
    return degree + " C is " + fahrenheit + " F.";
}

console.log(celsiusToFahrenheit(35));


function fahrenheitToCelsius (degree) {
    var celsius = degree / 1.8;
    return degree + " F is " + celsius + " C.";
}

console.log(fahrenheitToCelsius(80));



