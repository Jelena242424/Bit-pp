function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numOfMovies = this.listOfMovies.length;

    this.addMovie = function (movie) {
        this.numOfMovies++;
        this.listOfMovies.push(movie);
    }

    this.lengthAllMovies = function () {
        var lengthAllMovies = 0;
        this.listOfMovies.forEach(function (movie) {
            lengthAllMovies += parseFloat(movie.length);
        });
        return lengthAllMovies + "min";
    }

    this.moviesData = function () {
        var movieData = "";
        this.listOfMovies.forEach(function (movie) {
            movieData += movie.getData();

        });
        return movieData;
    }

    this.getData = function () {
        return this.date.toUTCString() + " program duration " + this.lengthAllMovies() + "\n" + this.moviesData();
    }
}