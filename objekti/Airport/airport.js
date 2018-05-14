"use strict";
(function () {
    console.log("Hi!");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

    };

    Person.prototype.getData = function () {
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    };

    function Seat() {
        this.number = 0;
        this.category = "";
    }

    Seat.prototype.makeNumber = function (number) {
        this.number = number ? number : Math.round((100 - 10) * Math.random() + 2);
    }

    Seat.prototype.makeCategory = function (category) {
        this.category = category.toLowerCase() === "b" ? "b" : "e";
    }

    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }

    function Passenger(name, surname, number, category) {
        this.person = new Person(name, surname);
        this.seat = new Seat();
        this.seat.makeNumber(number);
        this.seat.makeCategory("b");
    }

    Passenger.prototype.getData = function () {
        return "\t" + this.seat.getData() + ", " + this.person.getData() + "\n";
    }

    function Flight(relationFrom, relationTo, date) {
        this.relation = relationFrom + " - " + relationTo;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.numOfAllPassengers = 0;
    }

    Flight.prototype.addPassenger = function (passenger) {
        this.numOfAllPassengers++;
        return this.listOfPassengers.push(passenger);
    }

    Flight.prototype.passengerGetData = function (passenger) {
        var passengerGetData = "";
        this.listOfPassengers.forEach(function (passenger) {
            passengerGetData += passenger.getData();
        });
        return passengerGetData;
    }

    Flight.prototype.getData = function () {
        return this.date.toUTCString() + ", " + this.relation + "\n" + this.passengerGetData();
    };

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.numOfAllPassengers = 0;
    };

    Airport.prototype.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.numOfAllPassengers += flight.numOfAllPassengers;
    }

    Airport.prototype.airportGetData = function (flight) {
        var airportGetData = "";
        this.listOfFlights.forEach(function (flight) {
            airportGetData += flight.getData();
        });
        return airportGetData;
    }

    Airport.prototype.getData = function () {
        return "Airport:" + this.name + ", total passengers: " + this.numOfAllPassengers + "\n" + this.airportGetData();
    };

    function createFlight(relationFrom, relationTo, date) {
        return new Flight(relationFrom, relationTo, date);
    };



    //var jelena = new Person("Jelena", "Opacic");
    //var seat = new Seat(18);
    var jelena = new Passenger("Jelena", "Opacic", 18, "b");
    var tihomir = new Passenger("Tihomir", "Opacic", 19, "b");
    var hana = new Passenger("Hana", "Opacic", 20, "b");
    var dorijan = new Passenger("Dorijan", "Opacic", 21, "b");
    var london = createFlight("Belgrade", "London", "1 9 2018");
    var newYork = createFlight("Belgrade", "New York", "12 25 2018");
    london.addPassenger(jelena);
    london.addPassenger(hana);
    newYork.addPassenger(tihomir);
    newYork.addPassenger(dorijan);
    var nikolaTesla = new Airport();
    nikolaTesla.addFlight(london);
    nikolaTesla.addFlight(newYork);
    //var flightToLondon = new Flight("Belgrade", "London", "1 9 2018");
    //var airport = new Airport();
    //flightToLondon.addPassenger(passenger);

    //console.log(seat.getData());
    //console.log(jelena.getData());
    //console.log(passenger.getData());
    //console.log(flightToLondon.getData());
    //console.log(airport);
    //console.log(flightToLondon.listOfPassengers);
    console.log(nikolaTesla.getData());
})();

