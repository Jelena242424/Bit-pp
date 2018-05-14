"use strict!";

(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateofbirth) {
        this.name = name;
        this.surname = surname;
        this.dateofbirth = new Date(dateofbirth).toDateString();
        var dateofbirthInMilSec = Date.UTC(dateofbirth);
        this.age = Date.now() - dateofbirthInMilSec;
    }

    Person.prototype.getData = function () {
        return this.name + this.surname + ", " + this.dateofbirth;
    }

    function Player(person, betAmount, country) {
        if (!(person instanceof Person)) {
            return;
        } else {
            this.person = person;
        }

        this.betAmount = betAmount;

        if (!(country instanceof Country)) {
            return;
        } else {
            this.country = country;
        }
    }

    Player.prototype.getBetInfo = function (country) {
        var winAmount = this.country.odds * this.betAmount + " eur";
        return this.country.name + ", " +  winAmount + ", " + this.person.getData();
    }

    function Address(country, city, postalcode, street, housenumber) {
        this.country = country;
        this.city = city;
        this.postalcode = postalcode;
        this.street = street;
        this.housenumber = housenumber;
    }

    Address.prototype.getAddress = function () {
        return this.street + " " + this.housenumber + ", " + this.postalcode + " " + this.city + ", " + this.country.name;

    }

    function BettingPlace(adress) {
        this.adress = adress;
        this.listOfPlayers = [];
    }

    function BettingHouse(competition, bettingPlace) {
        this.competition = conpetition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = bettingPlace.listOfPlayers.length;
    }

    var Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    })
    // Country
    var serbia = new Country("SR", "2.34", Continent.EUROPE)


    // Person
    var barbara = new Person("Barbara", "Vasic", "11.07.1991");
    var jelena = new Person("Jelena", "Ristic", "9 14 1976");

    // Address 

    var add1 = new Address(serbia, "Belgrade", "11000", "Nemanjina", 4);

    // Player
    var player1 = new Player(barbara, 1500, serbia);


    console.log(player1.getBetInfo());
    console.log(barbara.age);



})()