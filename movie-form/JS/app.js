

function Movie(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var movieGenreFirst = this.genre.slice(0, 1);
    var movieGenreLast = this.genre.slice(genre.length - 1);
    var movieGenreInitials = movieGenreFirst + movieGenreLast;

    return this.title + ", " + this.duration + "min, " + movieGenreInitials.toUpperCase();
}

function Program (date){
   this.date = new Date.toString();
}

Program.prototype.addMovie = function(movie) {
    var listOfMovies = [];
    movie.forEach(function(movie){
        listOfMovies.push(movie);
    })
    return listOfMovies;
}


function createMovie() {
    this.titleInput = document.querySelector(".movie-title");
    this.durationInput = document.querySelector(".movie-length");
    this.genreInput = document.querySelector(".movie-genre");

    this.title = titleInput.value;
    this.duration = durationInput.value;
    this.genre = genreInput.value;

    var movie = new Movie(title, duration, genre);
    allMovies.push(movie);
    var newUl = document.querySelector(".movie-list");
    var newLi = document.createElement("li");
    var text = document.createTextNode(movie.getData());
    newLi.appendChild(text);
    newUl.appendChild(newLi);
}

function createProgram () {
    var date = document.querySelector("#date");
    var inputDate = new Date();
}
