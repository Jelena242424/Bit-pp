"use strict";
(function () {
    console.log("Hi!");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat() {
        this.number = 0;
        this.category = "";
        this.makeNumber = function (number) {
            this.number = number ? number : Math.round((100 - 10) * Math.random() + 2);
        }
        this.makeCategory = function (category) {
            this.category = category.toLowerCase() === "b" ? "b" : "e";
        }
        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
        }
    }

    function Passenger(name, surname, number, category) {
        this.person = new Person(name, surname);
        this.seat = new Seat();
        this.seat.makeNumber(number);
        this.seat.makeCategory("b");

        this.getData = function () {
            return "\t" + this.seat.getData() + ", " + this.person.getData() + "\n";
        }
    }

    function Flight(relationFrom, relationTo, date) {
        this.relation = relationFrom + " - " + relationTo;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.numOfAllPassengers = 0;

        this.addPassenger = function (passenger) {
            this.numOfAllPassengers++;
            return this.listOfPassengers.push(passenger);
        }

        this.passengerGetData = function (passenger) {
            var passengerGetData = "";
            this.listOfPassengers.forEach(function (passenger) {
                passengerGetData += passenger.getData();
            });
            return passengerGetData;
        }
        this.getData = function () {
            return this.date.toUTCString() + ", " + this.relation + "\n" + this.passengerGetData();
        };
    }



    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.numOfAllPassengers = 0;
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
            this.numOfAllPassengers += flight.numOfAllPassengers;
        }


        this.airportGetData = function (flight) {
            var airportGetData = "";
            this.listOfFlights.forEach(function (flight) {
                airportGetData += flight.getData();
            });
            return airportGetData;
        }
        this.getData = function () {
            return "Airport:" + this.name + ", total passengers: " + this.numOfAllPassengers + "\n" + this.airportGetData();
        };
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

