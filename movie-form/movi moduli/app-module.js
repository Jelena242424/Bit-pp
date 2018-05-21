"use strict"
//3 samoizvrsavajuce funkcije, ne primaju paramere, osim poslednje, vracaju objekte

var dataMovie = (function(){

    var data= {
        movieList : []
    }

    var makeMovie = function MakeMovie (title, duration, genre){
        this.title= title;
        this.duration= duration;
        this.genre= genre;
    }

    makeMovie.prototype.getData = function() {
        return this.title + " " + this.duration + " " + this.genre;
    }

    var addMovie = function addMovie(movieData) {
        var movie = new makeMovie (movieData.title, movieData.duration, movieData.genre);
        data.movieList.push(movie);
        return movie;
    }


    return {
        addMovie : addMovie
    }
})();

var uiMovie = (function(){

    function getFormData() {
        var titleElement = document.querySelector(".movie-title");
        var lengthElement = document.querySelector(".movie-length");
        var genreElement = document.querySelector(".movie-genre");
 
        var title = titleElement.value;
        var duration = parseInt(lengthElement.value);
        var genre = genreElement.value;
 
        var formInputData = {
            title: title,
            duration: duration,
            genre: genre
        };
 
        return formInputData;
    }
 
    function showMovieData(movie) {
        var movieListElement = document.querySelector(".movie-list");
        movieListElement.innerHTML += movie.getData() + "</br>";
    }
  

    return {
        getFormData : getFormData,
        showMovieData : showMovieData
    }
})();

var mainMovie = (function(data, ui) {
    console.log(ui);
    document.querySelector(".add-movie").addEventListener("click", function(event){
         var uiData = ui.getFormData();
         var movie = data.addMovie(uiData);
         ui.showMovieData(movie);
    })

})(dataMovie, uiMovie);

