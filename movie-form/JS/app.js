var allMovies = [];
var allPrograms = [];

function Movie(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var movieGenreFirst = this.genre.slice(0, 1);
    var movieGenreLast = this.genre.slice(this.genre.length - 1);
    var movieGenreInitials = movieGenreFirst + movieGenreLast;

    return this.title + ", " + this.duration + "min, " + movieGenreInitials.toUpperCase();
}

function Program(date) {
    this.date = new Date(date);
    this.movieList= [];
}

Program.prototype.getData = function () {
    return this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + ".";
}

Program.prototype.calculateTotalMovieLength = function () {
    var totalMovieLength = 0;
    this.movieList.forEach(function (movie) {
        totalMovieLength += parseInt(movie.duration);
    });
    return totalMovieLength;
}

Program.prototype.addMovie = function (movie) {
        this.movieList.push(movie);
}


function createMovie() {
    var titleInput = document.querySelector(".movie-title");
    var durationInput = document.querySelector(".movie-length");
    var genreInput = document.querySelector(".movie-genre");

    var title = titleInput.value;
    var duration = durationInput.value;
    var genre = genreInput.value;

    var movie = new Movie(title, duration, genre);
    allMovies.push(movie);

    var movieUlElement = document.querySelector(".movie-list");
    var movieLiElement = document.createElement("li");
    var text = document.createTextNode(movie.getData());
    var text1 = document.createTextNode(movie.getData());
    var newSelect = document.querySelector("#movie-in-program");
    var newOption = document.createElement("option");
    newOption.setAttribute("value", allMovies.length - 1);
    movieLiElement.appendChild(text);
    movieUlElement.appendChild(movieLiElement);
    newOption.appendChild(text1);
    newSelect.appendChild(newOption);

    titleInput.value = "";
    durationInput.value = "";
    genreInput.value = "";
}

function createProgram() {
    this.dateInput = document.querySelector("#date");
    this.date = dateInput.value;

    var program = new Program(date);
    allPrograms.push(program);

    printText();

    var text1 = document.createTextNode(program.getData());
    var newSelect = document.querySelector("#program-in-program");
    var newOption = document.createElement("option");
    newOption.setAttribute("value", allPrograms.length - 1);
    newOption.appendChild(text1);
    newSelect.appendChild(newOption);
    dateInput.value = "";
}



function addMovieToProgram() {

    var movieInProgramInput = document.querySelector("#movie-in-program");
    var programInProgramInput = document.querySelector("#program-in-program");
    
    var movieInProgram = movieInProgramInput.value;
    var programInProgram = programInProgramInput.value;
    
    var chosenMovie = allMovies[movieInProgram];
    var chosenProgram = allPrograms[programInProgram];
    chosenProgram.addMovie(chosenMovie);
    printText();
}

var addMtoP = document.querySelector(".add-movie-program");
addMtoP.onclick = addMovieToProgram;

function printText (){
    var programsUlElement = document.querySelector(".program-list");

    programsUlElement.innerHTML = "";
    
    allPrograms.forEach(function(singleProgram) {
        console.log(singleProgram);
        var programsLiElement = document.createElement("li");
        var text = singleProgram.getData();

        if (singleProgram.movieList.length > 0) {
            text += singleProgram.movieList.length + " movies,"
        }

        var totalMovieLength = singleProgram.calculateTotalMovieLength();

        if(totalMovieLength > 0) {
            text += " duration: " + totalMovieLength + "min";
        } else {
            text += " program duration: TBA";
        }

        programsLiElement.appendChild(document.createTextNode(text));
        programsUlElement.appendChild(programsLiElement);
    });
}

