"use strict"
//3 samoizvrsavajuce funkcije, ne primaju paramere, osim poslednje, vracaju objekte

var dataModule = (function () {

     var listOfMovies = [];

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = genre;
        this.length = length;

    }

    Movie.prototype.getMovieData = function () {
        var output = this.title + ", " + this.genre + ", " + this.length;

       return  output;
    }

    var createMovie = function (title, genre, length) {

        var createdMovie = new Movie(title, genre, length);

        return createdMovie;
    }

   


    return {
        createMovie: createMovie,
        
    }

})()


var uiModule = (function () {

   

    function collectFormData() {

        var titleElement = document.querySelector(".movie-title");
        var genreElement = document.querySelector(".movie-genre");
        var lengthElement = document.querySelector(".movie-length");

        var title = titleElement.value;
        var genre = genreElement.value;
        var length = lengthElement.value;


        return {
            title: title,
            genre: genre,
            length: length

        }
    }

    
    var validation = function (param) {

        if (!title) {
            return "Error, please enter valid title";
        } else {
            title = title;
        }
    }

    var addMovie = function(movie){

        var listOfMovies = document.querySelector(".movie-list");
        var newLi =document.createElement("li").textContent = getMovieData();
        listOfMovies.appendChild(newLi);

        if(!movie && movie instanceof Movie){
            return "Error, please enter valid movie";
        } else {
            listOfMovies.push(movie);
        }

        return listOfMovies;

    }

    return {
        collectFormData: collectFormData,
        addMovie: addMovie

    }
})()


var mainModule = (function (data, ui) {

    document.querySelector('.add-movie').addEventListener('click', function () {
        

        //1. collect form data;
        var movieData = ui.collectFormData();
        console.log(movieData);

        //2. validation

        //3.create movie

        var createMovie = data.createMovie(movieData.title, movieData.genre, movieData.length);

        // update movie list, dodajemo u listu filmova;
        var addMovie = ui.addMovie(movie);
        // prikazati film na formi;

    })

    return {

    }

})(dataModule, uiModule);


