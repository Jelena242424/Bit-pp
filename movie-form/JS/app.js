var allMovies =[];

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

function Program(date) {
    console.log(2,this.date);
    
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = this.listOfMovies.length;
}

Program.prototype.getData = function() {
   
    return this.date.toUTCString();
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
    var text1 = document.createTextNode(movie.getData());
    var newSelect = document.querySelector("#movie-in-program");
    var newOption = document.createElement("option");
    newOption.setAttribute("value", allMovies.length-1);
    newLi.appendChild(text);
    newUl.appendChild(newLi);
    newOption.appendChild(text1);
    newSelect.appendChild(newOption);
}

function createProgram () {
    this.dateInput = document.querySelector("#date");
    this.date = dateInput.value;
    

    var program = new Program(date);
    var newUl = document.querySelector(".program-list");
    var newLi = document.createElement("li");
    var text = document.createTextNode(program.getData());
    var text1 = document.createTextNode(program.getData());
    var newSelect = document.querySelector("#program-in-program");
    var newOption = document.createElement("option");
    newLi.appendChild(text);
    newUl.appendChild(newLi);
    newOption.appendChild(text1);
    newSelect.appendChild(newOption);
}

